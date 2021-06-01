let userData = {
 avatar: `$replaceText[$userAvatar[$findMember[$message]];webp;png]`,
 xp: `$getUserVar[exp;$findMember[$message[1]]]`,
 rexp: `$getUserVar[rexp;$findMember[$message[1]]]`,
 level: `$getUserVar[lvl;$findMember[$message[1]]]`,
 status: `$status[$findMember[$message[1]]]`,
 name: `$username[$findMember[$message[1]]]`,
 discrim: `$discriminator[$findMember[$message[1]]]`,
 color: `$getUserVar[col]`,
 bg: `$getUserVar[bg]`,
 position: `$getLeaderboardInfo[exp;$findMember[$message[1]];user;top]` 
};

module.exports = ({
 name: "rank",
 aliases: ['r'],
 code: `
$djsEval[const Discord = require('discord.js');
const canvacord = require("canvacord");
 
const rank = new canvacord.Rank()
.setAvatar("${userData.avatar}")
.setLevel(${userData.level}, "Level", true)
.setCurrentXP(${userData.xp})
.setRequiredXP(${userData.rexp})
.setStatus("offline")
.setProgressBar("#${userData.color}", "COLOR")
.setUsername("${userData.name}")
.setDiscriminator("${userData.discrim}")
.setRank(${userData.position}, "Rank", true)
.renderEmojis(true);

rank.build()
 .then(data => {
 const attachment = new Discord.MessageAttachment(data, "rankcard.png");
 message.channel.send(attachment);
 });
]
$suppressErrors[An error has occured!]
`
});