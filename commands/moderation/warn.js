module.exports = {
  name: "warn",
  code: `

$onlyIf[$checkContains[$message;check]==false;]

$onlyIf[$mentioned[1]!=;You must mention someone.]

$onlyPerms[manageroles;You cannot use this command]

$color[ffffff]

$title[**$username[$mentioned[1]]** has been warned by $username for $noMentionMessage]

$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]

$suppressErrors[You Must Mention Someone To Warn!]`
};