/*
	μBot v7.0 DataBase. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const server = require("express");
const bodyParser = require('body-parser');
const UsersCoin = require("./Saved/UsersCoin.json");
const ServersPrefix = require("./Saved/ServersPrefix.json");
const cmds = require("fs");
const mu = server();

mu.use(bodyParser.json());
mu.use(bodyParser.urlencoded({ extended: true }));


let DBport = 80;

mu.get("/", (req, res) => {
    res.send({
        "notch": "This Server is Private, Do not Web Crawling This Server",
        "server": {
            "status": "OK",
            "statusID": 200,
            "name": "µServer",
            "description": "µBot's Server DataBase"
        },
        "have": ["UsersCoin.json", "ServersPrefix.json", "AV.avi"],
        "canGive": ["UsersCoin.json", "ServersPrefix.json"],
        "cannotGive": ["AV.avi"],
        "howToGet": "/api/<FileName>"
    });
});

// Users Coin 
mu.get("/api/UsersCoin.json", (req, res) => res.json(UsersCoin));

mu.get('/api/UsersCoin.json/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }
    let userCoinData = UsersCoin[id].UsersCoin;
    if (!userCoinData) {
        return res.status(404).json({error: 'Not Found That User'})
    }
    return res.json({
        "UserID": id,
        "mute": userCoinData
    });
  });
  
mu.get('/action/UserTyped/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    } else {
    // MuteCoin
		{
			if (!UsersCoin[id]) {
				UsersCoin[id] = {
					UsersCoin: 0
				};
			}
			let muteAmt = Math.floor(Math.random() * 11) + 1;
			if (muteAmt == 1) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 1
				};
			} else
			if (muteAmt == 2) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 2
				};
			} else
			if (muteAmt == 3) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 4
				};
			} else
			if (muteAmt == 4) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 8
				};
			} else
			if (muteAmt == 5) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 16
				};
			} else
			if (muteAmt == 6) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 32
				};
			} else		
			if (muteAmt == 7) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 64
				};
			} else
			if (muteAmt == 8) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 128
				};
			} else
			if (muteAmt == 9) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 256
				};
			} else
			if (muteAmt == 10) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 512
				};
			} else
			if (muteAmt == 11) {
				UsersCoin[id] = {
					UsersCoin: UsersCoin[id].UsersCoin + 1024
				};
			}
			cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { console.log(error); } });
		}
    }
});

// Servers Prefix
mu.get("/api/ServersPrefilx.json", (req, res) => res.json(ServersPrefix));

mu.listen(process.env.PORT, '0.0.0.0', function() {
    console.log(`MuBot Server listening on port ${DBport}!`);
});
