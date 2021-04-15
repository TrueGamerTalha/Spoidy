module.exports = {
name: "set-ticketmessage",
code: `
Changed the ticket message.
$setServerVar[ticketmessage;$message]
$onlyPerms[manageserver;You dont have the perms "manageserver"]
$argsCheck[>5;The ticket message MUST be at least 5 words long!]
`
};
