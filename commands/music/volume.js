module.exports = {
name: "volume",
code: `$if[$message[1]==]
 $title[Volume]
$addField[Current Volume#COLON#;$volume;no]
$color[GREEN]
$addTimestamp
$elseIf[$isNumber[$message[1]]==true]
$title[Volume]
$addField[New Volume#COLON#;$message[1];no]
$color[GREEN]
$addTimestamp
$volume[$message[1]]
$endelseIf
$else
That's not a Number!
$endif
$onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]
$onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {color:$getVar[embedc]}]
$onlyIf[$voiceID[$clientID]!=; {title: Nothing Is Being Played Now!} {color: $getVar[embedc]}]
`
}
