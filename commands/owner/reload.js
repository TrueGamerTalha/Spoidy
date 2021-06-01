module.exports = ({
name: "reload",
aliases: ["restart"],
code: `$updateCommands
$customEmoji[sloading] Loading all commands.....
$editIn[5s;$customEmoji[spoidyhelp] All commands have been loaded Successfully]
$onlyForIDs[613963112726659092;You are not authorized to run this command!]`
});