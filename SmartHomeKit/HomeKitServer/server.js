'use strict'; 

const Hapi = require('hapi'); 
const Lookup = require("node-yeelight-wifi").Lookup; 
const Yeelight = require("node-yeelight-wifi").Yeelight; 

const look = new Lookup(); 
let lights = []; 

const server = Hapi.server( {
        host:'192.168.1.133', 
        port:8000
}); 

server.route( {
        method:'GET', 
        path:'/', 
        handler:(request, h) =>  {
                console.log('brau ya'); 
                return 'mara ya kaun \n'; 
        }
}); 

server.route( {
        method:'GET', 
        path:'/find', 
        handler:(request, h) =>  {
                let lights = look.getLights(); 
                return lights[0].host; 
        }
}); 

server.route( {
        method:'GET', 
        path:'/on', 
        handler:(request, h) =>  {
                turnOn(); 

                return 200; 
        }
}); 

server.route( {
        method:'GET', 
        path:'/off', 
        handler:(request, h) =>  {
                turnOff(); 

                return 200; 
        }
}); 

server.route( {
        method:'GET', 
        path:'/white', 
        handler:(request, h) =>  {
                turnWhite(); 

                return 200; 
        }
}); 

server.route( {
        method:'GET', 
        path:'/red', 
        handler:(request, h) =>  {
                turnRed(); 

                return 200; 
        }
}); 

server.route( {
        method:'GET', 
        path:'/green', 
        handler:(request, h) =>  {
                turnGreen(); 

                return 200; 
        }
}); 

server.route( {
        method:'GET', 
        path:'/blue', 
        handler:(request, h) =>  {
                turnBlue(); 

                return 200; 
        }
}); 

function start() {
        
        try {
                server.start(); 
        }

        catch (err) {
                console.log(err); 
                process.exit(1); 
        }

        discover(); 
        console.log('server running at: ', server.info.uri);
} 

function discover() {
        lights = look.getLights(); 

        setTimeout(() =>  {
        console.log(lights.length + ' lightbulbs discovered'); 
        console.log('SERVER READY'); 
        }, 1500); 
}

function turnOn() {
        let bulb = lights.filter(l => l.name === 'Kitchen')[0]; 

        bulb.setPower(true).then(() =>  {
                console.log('switched on');
        }).catch(error =>  {
                console.log(error); 
        }); 
}


function turnOff() {
        let bulb = lights.filter(l => l.name === 'Kitchen')[0]; 

        bulb.setPower(false).then(() =>  {
                console.log("success"); 
        }).catch( error =>  {
                console.log("failed", error); 
        }); 

}

function turnWhite() {
        let bulb = lights.filter(l => l.name === 'Kitchen')[0]; 

        bulb.setRGB([0,0,0]).then(() =>  {
                console.log("switched to white"); 
        }).catch( error =>  {
                console.log("failed", error); 
        }); 

}

function turnRed() {
        let bulb = lights[0]; 

        bulb.setRGB([255,0,0]).then(() =>  {
                console.log("success"); 
        }).catch( error =>  {
                console.log("failed", error); 
        }); 

}

function turnGreen() {
        let bulb = lights[0]; 

        bulb.setRGB([0,255,0]).then(() =>  {
                console.log("success"); 
        }).catch( error =>  {
                console.log("failed", error); 
        }); 

}

function turnBlue() {
        let bulb = lights.filter(l => l.name === 'Bedroom')[0]; 

        // let bulb = lights[0]; 

        bulb.setRGB([0,0,255]).then(() =>  {
                console.log("success"); 
        }).catch( error =>  {
                console.log("failed", error); 
        }); 

}

start(); 