module.exports = {
  name: "userinfo",
  aliases: ["whois", "ui", "userinfo"],
  code: `
$title[User Info Of **$username[$findUser[$message;yes]]**]

$thumbnail[$userAvatar[$findUser[$message;yes]]]

$addField[**Creation Date**:; $creationDate[$findUser[$message;yes]]]

$addField[**Key Perms:**;$userPerms[$findUser[$message;yes];,]]

$addField[**Roles:**;$replaceText[$replaceText[$checkCondition[$userRoles[$findUser[$message;yes];mentions]==];true;None];false;$userRoles[$findUser[$message;yes];mentions]]]

$addField[**User ID**:; $findUser[$message;yes]]

$addField[**Tag**:;<@$findUser[$message;yes]>]

$color[$getVar[embedc]]`
}