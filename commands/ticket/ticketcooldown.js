module.exports = {
name: "set-ticketcooldown",
code: `$title[Success!] $color[00ff00]
$description[The new ticket cooldown is $message]
$suppressErrors[An unexspected Error ocurred]
$setServerVar[ticketcooldown;$message]
$onlyIf[$checkContains[$toLowercase[$message];s;m;d;h]==true;{title:Error} {color:ff0000} {description:You need the following arguments in your message: s,m,h,d (stands for second, minute,...) E.g. 10m would be 10 minutes!}]
$onlyPerms[manageserver;You dont have the perms "manageserver"]
$argsCheck[1;Please follow this example: $getServerVar[prefix]set-ticketcooldown 1d | This would be one day! (avaiable: d,h,m,s)]
`
};
