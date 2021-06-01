module.exports = ({
name: "leaderboard",
aliases: ['lb'],
code:`
$title[$serverName[$guildID]'s Leaderboard]
$description[$userLeaderboard[exp;asc;{top}. {username} - {value} exp]]
$color[$getVar[embedc]]
$addTimestamp
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __Disabled__}{color:$getVar[embedc]}]
`
});