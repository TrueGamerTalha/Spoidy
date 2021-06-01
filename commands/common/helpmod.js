module.exports = {
name: "helpmod",
aliases: ["hmod"],
code: `$title[$customEmoji[helpmod] Spoidy Moderation Commands]

$addField[**$getServerVar[prefix]clear <amount>**;\`\`\`
Clears an Amount Of Messages\`\`\`]

$addField[**$getServerVar[prefix]kick <user>**;\`\`\`
Kicks A User From The Server\`\`\`]

$addField[**$getServerVar[prefix]unban <userID>**;\`\`\`
Unbans A User From The Server\`\`\`]

$addField[**$getServerVar[prefix]ban <user>**;\`\`\`
Bans A User From The Server\`\`\`]

$addField[**$getServerVar[prefix]tempmute <user>**;\`\`\`
Temporarily Mutes A User\`\`\`]

$addField[**$getServerVar[prefix]unmute <user>**;\`\`\`
Unmutes a user\`\`\`]

$addField[**$getServerVar[prefix]mute <user>**;\`\`\`
Mutes A user\`\`\`]

$addField[**$getServerVar[prefix]clearwarns <user>**;\`\`\`
Removes A User's Warnings\`\`\`]

$addField[**$getServerVar[prefix]checkwarns <user>**;\`\`\`
Check A User's Warnings\`\`\`]

$addField[**$getServerVar[prefix]warn <user>**;\`\`\`
Warns A Member\`\`\`]
$color[$getVar[embedc]]`
}