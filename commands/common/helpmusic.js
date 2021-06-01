module.exports = {
name: "helpmusic",
aliases: ['hmusic'],
code:` $title[$customEmoji[smusic] Spoidy Music Commands]
$addField[**$getServerVar[prefix]volume <volume>**;\`\`\`
Change The Volume Of The Songs\`\`\`]

$addField[**$getServerVar[prefix]skipto <songnumber>**;\`\`\`
Skips To A Specified Song In The Queue\`\`\`]

$addField[**$getServerVar[prefix]skip**;\`\`\`
Skips The Current Song\`\`\`]

$addField[**$getServerVar[prefix]queue**;\`\`\`
Shows The Songs In The Queue\`\`\`]

$addField[**$getServerVar[prefix]loop**;\`\`\`
Enable/Disable Loop For The Queue\`\`\`]

$addField[**$getServerVar[prefix]nowplaying**;\`\`\`
Shows Information Of The Song\`\`\`]

$addField[**$getServerVar[prefix]resume**;\`\`\`
Resumes The Song/Queue\`\`\`]

$addField[**$getServerVar[prefix]pause**;\`\`\`
Pauses The Song/Queue\`\`\`]

$addField[**$getServerVar[prefix]play <song>**;\`\`\`
Plays A Song From YouTube\`\`\`]

$color[$getVar[embedc]]`
}