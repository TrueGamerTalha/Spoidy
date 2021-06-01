 module.exports = {
  name: "info",
  aliases: ["i", "botinfo"],
  code: `$title[$customEmoji[spoidyhelp] **Spoidy's Information**]
$color[$getVar[embedc]]
$addField[$customEmoji[sdeveloper] **Developers**;\`\`\`\nTrueGamerTalha#9356\`\`\`]
$addField[$customEmoji[sDISCORD] **Members**;\`\`\`\n$allMembersCount\`\`\`]
$addField[$customEmoji[sserver] **Servers**;\`\`\`\n$serverCount\`\`\`]
$addField[$customEmoji[sinfinite] **Uptime**;\`\`\`\n$uptime\`\`\`] 
$addField[$customEmoji[swifi] **Ping**;\`\`\`\n$botPing MS\`\`\`]
`
};
