module.exports = ({
name: "softban",
code: `$unban[$findUser[$message;no]]
$wait[1s]
$ban[$findmember[$message[1];no]]
$senddm[$findmember[$message;no];{title:You got softbanned!}{description:SoftBanned by: $usertag[$authorid], in **$serverName[$guildID]
Reason: $replacetext[$replacetext[$checkcondition[$messageslice[1]!=];false;No reason];true;$messageslice[1]]}{color:$getVar[embedc]}]
$channelSendMessage[$channelID;:white_check_mark: | The User **$usertag[$findmember[$message;no]]** Was softbanned Successfully!]
$onlyif[$roleposition[$highestrole[$clientid]]<$roleposition[$highestrole[$findmember[$message[1];no]]];:x: | I can't ban the user thats have same or highest role than me]
$onlyif[$roleposition[$highestrole[$authorID]]<$roleposition[$highestrole[$findmember[$message[1];no]]];:x: | You can't ban the user who has same or highest role than you]
$onlyif[$hasperms[$clientid;ban]==true;I dont have **Ban Members** permission to do this action]
$onlyif[$hasperms[$authorid;ban]==true;You need **Ban Members** permission to do this action]
$onlyif[$findmember[$message[1];no]!=undefined;:x: | The user doesnt exist!]
$onlyif[$message!=;:x: Invalid arguments \n\`\`\`\n$getServerVar[prefix]softban < member > ( reason )\n\`\`\`]
$cooldown[5s;Please wait for %time% {delete:5s}] 
`})