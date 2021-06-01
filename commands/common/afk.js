module.exports = ({
name: "afk",
code: `
$setUserVar[AFK;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;on];false;off]/$replaceText[$replaceText[$checkCondition[$message==];true;AFK];false;$message]]

$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$splitText[1]==on];true;Welcome back <@$authorID>, I removed AFK];false;<@$authorID> I set your AFK: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;AFK];false;$noMentionMessage]]] 

$setUserVar[time;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$dateStamp];false;]]
$textSplit[$getUserVar[AFK];/]
`
})
