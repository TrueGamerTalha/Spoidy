 module.exports = {
  name: "cpu",
  code: `$title[Spoidy's CPU Information]
  $addField[$customEmoji[scpu] ▪︎ CPU Model:; \`\`\`
$djsEval[require ('os').cpus()[0].model;yes]\`\`\`]
$addField[$customEmoji[scpu] ▪︎ CPU Platform:; \`\`\`
$djsEval[require ('os').platform();yes]\`\`\`]
$addField[$customEmoji[scpu] ▪︎ CPU Usage:; \`\`\`
$cpu%\`\`\`]
$color[$getVar[embedc]]`
 }