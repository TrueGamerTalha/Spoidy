module.exports = ({
name: "commandinfo",
code:
`
$reply[$messageID;{color:$getVar[embedc]}
{title:$toLocaleUppercase[$commandInfo[$message[1];name]]}
{field:**Category (Module)**:$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];cat]!=];true;$commandInfo[$message[1];cat]];false;None]:yes}
{field:**Description**:$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];desc]!=];true;$commandInfo[$message[1];desc]];false;None]}
{field:**Usage**:$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$getServerVar[prefix]$commandInfo[$message[1];usage]];false;None]:yes}
{field:**Aliases**:$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,;, ]];false;None]}
{footer:Requested by $userTag[$authorID]:$authorAvatar}{timestamp:ms};no]
$onlyIf[$commandInfo[$message[1];name]!=;That is not a valid command!{delete:5s}]
`
})