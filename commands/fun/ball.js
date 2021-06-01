module.exports = {
name: "8ball",
code: `
$jsonRequest[https://no-api-key.com/api/v1/magic8ball;response]
$onlyIf[$message!=;a] 
`
}