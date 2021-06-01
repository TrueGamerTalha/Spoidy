module.exports = {
  name: "clear",
  code: `
  $deleteIn[3s]
$title[**$username** Has Cleared $message Messages]
$color[$getVar[embedc]]
$clear[$message;everyone;$channelid;yes]
$deletecommand
$onlyPerms[managemessages;You require Manage Messages permission for this to work.]
$onlyIf[$isNumber[$message]==true;Thats not a number!]`
};
