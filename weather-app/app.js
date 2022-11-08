const http = require("http")
const fs = require("fs")
const requests = require("requests")

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=5385d0affc7f3e01a50c4d417e3ad48b

const mainfile = fs.readFileSync("index.html", "utf-8")
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests("https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=5385d0affc7f3e01a50c4d417e3ad48b")
      .on("data",(chunk) => {
        const object = JSON.parse(chunk)
        const arrData = [object]
          console.log(`${arrData[0].name}: ${(arrData[0].main.temp-273.15).toFixed(1)}°C`)

          weatherState = '<i class="fa fa-sun-o" style="font-size: 170px"></i>'

          let realTime = mainfile.replace("{%temperature%}",Math.round(arrData[0].main.temp - 273.15) + "°C").replace("{%city%}",arrData[0].name).replace("{%weatherState%}",weatherState)
            res.write(realTime,"utf-8")
            res.end()
        })
    .on("end",function(err){
        if(err){
            throw(err)
        }
        console.log("ended successfully")
    })
  }
})

server.listen(8000,()=>{
    console.log('Server running on port 8000')
})
