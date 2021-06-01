module.exports = {
  name: "help",
  aliases: ["h", "help"],
  code: `$author[Spoidy Help Commands;$userAvatar[$clientID]]
$description[**≪═════ ≪°❈°≫ ═════≫**]
$addField[$customEmoji[helpfun] **$getServerVar[prefix]helpfun**;\`\`\`
Fun Commands List\`\`\`]

$addField[$customEmoji[smusic] **$getServerVar[prefix]helpmusic**;\`\`\`
Music Commands List\`\`\`]

$addField[$customEmoji[helpsettings] **$getServerVar[prefix]helpsettings**;\`\`\`
Settings Commands List\`\`\`]

$addField[$customEmoji[helpmod]  **$getServerVar[prefix]helpmod**;\`\`\`
Admin Commands List\`\`\`]

$addField[$customEmoji[helpcommon] **$getServerVar[prefix]helpcommon**;\`\`\`
Common Commands List\`\`\`]

$color[$getVar[embedc]]
$onlyIf[$message==;]
`
};
