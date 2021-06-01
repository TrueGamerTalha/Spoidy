module.exports = ({
name: "weather",
code: `$title[Weather In $message] 
$addField[Observation Time: ;\`\`\`
$jsonRequest[http://api.somecool.repl.co/weather?place=$message;observation_time;]\`\`\`]
$addField[Wind Display: ;\`\`\`
$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;]\`\`\`]
$addField[Humidity: ;\`\`\`
$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]\`\`\`]
$addField[Wind Speed: ;\`\`\`
$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]\`\`\`]
$addField[Temperature: ;\`\`\`
$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;]\`\`\`]
$addField[Location: ;\`\`\`
$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]\`\`\`]
$argsCheck[>1;❌Please type a location!]
$color[$getVar[embedc]]`
});