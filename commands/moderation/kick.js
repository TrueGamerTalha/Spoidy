module.exports = ({
name: "kick",
code: `$kick[$findmember[$message[1];no]]
$senddm[$findmember[$message;no];{title:You got kicked!}{description:Banned by: $usertag[$authorid], in **$serverName[$guildID]
Reason: $replacetext[$replacetext[$checkcondition[$messageslice[1]!=];false;No reason];true;$messageslice[1]]}{color:$getVar[embedc]}]
$channelSendMessage[$channelID;:white_check_mark: | The User **$usertag[$findmember[$message;no]]** Was Kicked Successfully!]
$onlyif[$roleposition[$highestrole[$clientid]]<$roleposition[$highestrole[$findmember[$message[1];no]]];:x: | I can't kick the user who has same or highest role than me]
$onlyif[$roleposition[$highestrole[$authorID]]<$roleposition[$highestrole[$findmember[$message[1];no]]];:x: | You can't kick the user who has same or highest role than you]
$onlyif[$hasperms[$clientid;kick]==true;I dont have **Kick Members** permission to do this action]
$onlyif[$hasperms[$authorid;kick]==true;You need **Kick Members** permission to do this action]
$onlyif[$findmember[$message[1];no]!=undefined;:x: | The user doesnt exist!]
$onlyif[$message!=;:x: Invalid arguments \n\`\`\`\n$getServerVar[prefix]kick < member > ( reason )\n\`\`\`]
$suppressErrors[Something went wrong...]
`})