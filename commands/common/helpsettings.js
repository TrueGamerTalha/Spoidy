module.exports = {
name: "helpsettings",
aliases: ["hsettings"],
code: `$title[$customEmoji[helpsettings] Spoidy ServerSettings Commands]
$addField[**$getServerVar[prefix]nuke**;\`\`\`
Nukes the channel\`\`\`]

$addField[**$getServerVar[prefix]unlock**;\`\`\`
Unlock the channel\`\`\`]

$addField[**$getServerVar[prefix]lock**;\`\`\`
Lock the channel\`\`\`]

$addField[**$getServerVar[prefix]disablerank**;\`\`\`
Disables The Leveling System\`\`\`]

$addField[**$getServerVar[prefix]enablerank**;\`\`\`
Enables The Leveling System\`\`\`]

$addField[**$getServerVar[prefix]setprefix <new_prefix>**;\`\`\`
Change the prefix of Spoidy\`\`\`]

$color[$getVar[embedc]]`
}