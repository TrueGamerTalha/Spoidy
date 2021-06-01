module.exports = ({
 name: "ping",
 aliases: ["p"],
 code: `$author[Spoidy's Ping!]
 $addField[Database Latency: ; \`\`\`
$dbPing MS\`\`\`]
 $addField[Websocket Latency: ; \`\`\`
$ping MS\`\`\`]
 $addField[Bot Latency: ; \`\`\`
$botPing MS\`\`\`]
 $color[$getVar[embedc]]
`
});
