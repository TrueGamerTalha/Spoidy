module.exports = ({
    name: "resume",
    code: `
    $author[Music Resumed!]
    $resumesong
    $description[<@$authorID> resumed the music!]
    $color[$getVar[embedc]]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {color:$getVar[embedc]}]
$onlyIf[$voiceID[$clientID]!=; {title: Nothing Is Being Played Now!} {color: $getVar[embedc]}]`
    });
