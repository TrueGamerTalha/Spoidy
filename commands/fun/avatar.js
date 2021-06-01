module.exports = ({
    name:"avatar",
    aliases: ["avatar", "av"],
    code:`$author[Avatar for $userTag[$findUser[$message;yes]]]
    $image[$replaceText[$userAvatar[$findUser[$message;yes]];size=2048;size=1024]]
    $color[$getVar[embedc]]`
})