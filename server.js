const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token:"Spoidy_Token",
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
	code: ``$author[Started Playing;https://cdn.discordapp.com/emojis/814941457798266942.gif]
$description[**[$songInfo[title]\\]($songInfo[url])**

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
$wait[1s]``
});

bot.botJoinCommand({
  channel: "820977380943462420",
  code: ``$title[Spoidy Joined A Server!]
$color[$getVar[embedc]]
$description[**ServerName:** $serverName

**Owner:** <@$ownerID>

**Region:** $serverRegion

**Members:** $membersCount]``
});
bot.onGuildJoin();

bot.botLeaveCommand({
  channel: "820977380943462420",
  code: ``$title[Spoidy Left A Server!]
$color[$getVar[embedc]]
$description[**ServerName:** $serverName

**Region:** $serverRegion

**Owner:** <@$ownerID>

**Members:** $membersCount]``
});
bot.onGuildLeave();

bot.loadCommands('./commands/');

bot.variables({[
  warn: "0",
  prefix: "S.",
  lvl: "0",
  lvlcard: "https://cdn.discordapp.com/attachments/807418758162284564/811474170532986940/20210217_123840.jpg",
  rexp: "40",
  exp: "0",
  lvlmsg: "GG! {user.mention} you leveled up to level {level}!",
  rsystem: "0",
  embedc: "00FFFF",
  afk: "0",
  afkwhy: "",
  automod: "enabled",
  antilinks: "enabled",
  nword: "enabled",
}]);

bot.command({
 name: "$alwaysExecute",
 code: `My Prefix In This Server Is **$getServerVar[prefix]**
 $onlyIf[$checkContains[$message;749133435779547188]==true]`
})

bot.command({
  name: "setprefix",
  code: ``
The Prefix For This Server Has Been Successfully Changed To **$message**
$setServerVar[prefix;$message]
$onlyIf[$checkContains[$message;@everyone;@here]==false;You cant put the prefix as mentions!]
$argsCheck[>1;Please Provide Prefix. ] 
$onlyPerms[manageserver;❌ To change the bot's prefix on this guild you will require \`MANAGE_GUILD\` permissions.]
``
});

bot.command({
 name: "rank",
 aliases: ["r"],
 code: ``$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=$getUserVar[lvlcard;$mentioned[1;yes]]&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __Disabled__}{color:$getVar[embedc]}]
$color[$getVar[embedc]]``
});

bot.command ({
 name: "$alwaysExecute",
 code: `$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[lvlmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
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

bot.command({
    name: "afk",
    description: "Get an AFK status",
    category: "utility",
    usage: "afk <reason/status>",
    code: `
<@$authorID>.. I set your AFK: $message
$setUserVar[afk;1;$authorID]
$setUserVar[afkwhy;$message;$authorID]
$suppressErrors
`
})

bot.command({
    name: "$alwaysExecute",
    code: `
$username[$mentioned[1]] is AFK: $getUserVar[afkwhy;$mentioned[1]]
$onlyIf[$getUserVar[afk;$mentioned[1]]>=1;]
`
})

bot.command({
    name: "$alwaysExecute",
    code: `
$setUserVar[afk;0;$authorID]
$setUserVar[afkwhy;;$authorID]    
Hello <@$authorID>, I have removed your AFK
$onlyIf[$getUserVar[afk;$authorID]>=1;]`
})
