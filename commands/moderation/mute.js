module.exports = ({
 name: "mute",
 code: `
 $giveRole[$mentioned[1];$roleID[Muted]]
 $userTag[$mentioned[1]] has been muted!
 $onlyIf[$mentioned[1]!=$clientID;{description:I can't mute myself!}{color: $getVar[embedc]}]
 $onlyIf[$mentioned[1]!=$authorID;{description:You can't mute yourself!}{color: $getVar[embedc]}]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you or same as you on role position.]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than me or same as me on role position.]
 $onlyIf[$hasRoles[$mentioned[1];$roleID[Muted]]==false;{description:User is already muted!}{color: $getVar[embedc]}]
 $onlyIf[$mentioned[1]!=;{title: You need to mention a user to mute!}{color: $getVar[embedc]}]
 $onlyIf[$roleExists[$findRole[Muted]]==true;Please Create A Role Named **Muted**]
 $onlyBotPerms[manageroles;{description:I don't have permissions to do that! | Missing permissions: \`MANAGE_ROLES\`}{color: $getVar[embedc]}]
 $onlyPerms[manageroles;{description:To use this you require the \`MANAGE_ROLES\` permission!}{color: $getVar[embedc]}]
 $suppressErrors[Something went wrong...]
 `
})