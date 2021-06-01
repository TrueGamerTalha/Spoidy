const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[prefix]"
});

bot.status({
  text: "$serverCount Servers || S.help",
  type: "STREAMING",
  url: "https://www.twitch.tv/truegamertalhayt",
  time: 12
});

bot.onMessage();

bot.musicStartCommand({
	channel: '$channelID',
	code: `$author[Started Playing;https://cdn.discordapp.com/emojis/814941457798266942.gif]
$description[**[$songInfo[title]]($songInfo[url])**

  Requested by: 
<@$songInfo[userID]>

  Duration: 
\`\`\`
$jsonRequest[http://api.somecool.repl.co/yt-search?search=$songInfo[title];duration;]\`\`\`
  Volume: 
\`\`\`
$volume% \`\`\`
  Description:
 \`\`\`
$songInfo[description] \`\`\`
]
$addTimestamp 
$color[$getVar[embedc]] 
$volume[50]
$wait[1s]`
});

bot.botJoinCommand({
  channel: "820977380943462420",
  code: `$title[Spoidy Joined A Server!]
$color[$getVar[embedc]]
$description[**ServerName:** $serverName

**Owner:** $userTag[$ownerID]

**Region:** $serverRegion

**Members:** $membersCount]`
});
bot.onGuildJoin();

bot.botLeaveCommand({
  channel: "820977380943462420",
  code: `$title[Spoidy Left A Server!]
$color[$getVar[embedc]]
$description[**ServerName:** $serverName

**Owner:** $userTag[$ownerID]

**Region:** $serverRegion

**Members:** $membersCount]`
});
bot.onGuildLeave();

let count = 0;
setInterval(() =>
   require('node-fetch')(process.env.URL)
   .then(() => console.log(`[${++count}] Kept ${process.env.URL} alive`))
           
   , 5 * 60 * 1000);

bot.loadCommands('./commands/');

bot.variables({
  warn: "0",
  prefix: "S.",
  lvl: "1",
  rexp: "40",
  exp: "0",
  lvlmsg: "GG! {user.mention} you leveled up to level {level}!",
  col: "7000ff",
  bg: "",
  rsystem: "0",
  embedc: "7000FF",
  AFK: "off",
  time: "",
});

bot.command({
 name: "$alwaysExecute",
 code: `My Prefix In This Server Is **$getServerVar[prefix]**
 $onlyIf[$checkContains[$message;749133435779547188]==true]`
})

bot.command({
  name: "setprefix",
  aliases: ['prefix'],
  code: `
The Prefix For This Server Has Been Successfully Changed To **$message**
$setServerVar[prefix;$message]
$onlyIf[$checkContains[$message;@everyone;@here]==false;You cant put the prefix as mentions!]
$argsCheck[>1;Please Provide Prefix. ] 
$onlyPerms[manageserver;❌ To change the bot's prefix on this guild you will require \`MANAGE_GUILD\` permissions.]
`
});

bot.command ({
 name: "$alwaysExecute",
 code: `$channelSendMessage[$channelID;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[lvlmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]` 
})

bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;5]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]
$cooldown[2s;]`
}) 

bot.command({
    name: "enablerank",
    code: `$description[Leveling system has been __Enabled__!]
$color[$getVar[embedc]]
$setServerVar[rsystem;1]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:$getVar[embedc]}]
$cooldown[5s;Please wait **%time%**]`
}) 

bot.command({
    name: "disablerank",
    code: `$description[Leveling system has been __Disabled__!]
$color[$getVar[embedc]]
$setServerVar[rsystem;0]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:$getVar[embedc]}]
$cooldown[5s;Please wait **%time%**]`
}) 
