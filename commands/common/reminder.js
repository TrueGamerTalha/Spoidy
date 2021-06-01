module.exports =({ 
name: "remindme", 
aliases: ['reminder'], 
code: `$sendDM[$authorID;Reminder for: $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20]]
$channelSendMessage[$channelID;<@$authorID> Reminder for: $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20]] $wait[$replaceText[$replaceText[$checkCondition[$noMentionMessage[1]==];true;24d];false;$noMentionMessage[1]]] $channelSendMessage[$channelID; {title:✅ | Reminder Sucessfully Set}{color:$getVar[embedc]}] $argsCheck[>2;Correct usage: \`$getServerVar[prefix]reminder <duration> <reason>\`]
` 
})