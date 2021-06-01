module.exports = ({
 name:"function",
 code:`
$title[$message;https://dbd.leref.ga/functions/usd$toLowercase[$replaceText[$get[msg];$;;-1]]]
$let[msg;$filterMessage[$message;$]]
$description[\`\`\`html
$jsonRequest[https://dbdjs.leref.ga/functions/$message;description]
\`\`\`
$addField[Usage:;\`\`\`kt
$jsonRequest[https://dbdjs.leref.ga/functions/$message;usage]

\`\`\`]]
$thumbnail[https://images-ext-2.discordapp.net/external/CS9w5CIsh5MGh1Oi4bcr5IRRtwYiPaTWKX4Hn-1lfpM/https/cdn.discordapp.com/avatars/640397198240251905/027e54e21fb2048df5db9a1e5552716e.webp]
$color[$getVar[embedc]]
$onlyif[$jsonRequest[https://dbdjs.leref.ga/functions/$message;name]!=;Function not found]`
}) 