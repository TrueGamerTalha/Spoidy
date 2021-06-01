module.exports = ({
  name: "queue",
  aliases: ['q'],
  cat: "Music",
  usage: "queue",
  desc: "Displays the queue.",
  code:
  `
  $color[$getVar[embedc]]
  $thumbnail[$songinfo[thumbnail]]
  $author[Queue;$useravatar[$clientID]]
  $title[Music Queue]
  $description[$queue[$replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1];10;{number}. {title} | {duration}]]
  $addField[Current Song;[$songinfo[title]]($songinfo[url])]

  $footer[Page $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]];$authoravatar]
  $addTimestamp

  $textSplit[$divide[$queueLength;10];.]

  $onlyIf[$voiceID==$voiceID[$clientID];{color:FF0000}{title:Error!}{description:You need to be in the same VC as the bot!}{delete:10s}]
  $onlyIf[$voiceID!=;{color:FF0000}{title:Error!}{description:You must connect to a voice channel!}{delete:10s}]
  $onlyIf[$queueLength>0;You don't have anything in the queue!{delete:10s}]

  $onlyIf[$checkContains[$channelType;text;news]==true;]

  $suppressErrors[Something went wrong...{delete:10s}]

$onlyIf[$voiceID[$clientID]!=; {title: Nothing Is Being Played Now!} {color: $getVar[embedc]}]
`
})