/*
	μBot v7.0 DataBase. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const server = require("express");
const UsersCoin = require("./Saved/UsersCoin.json");
const ServersPrefix = require("./Saved/ServersPrefix.json");
const mu = server();

let DBport = 8080;

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
        "howToGet": "/<FileName>"
    });
});

// Users Coin 
mu.get("/api/UsersCoin.json", (req, res) => res.json(UsersCoin));

mu.get('/api/UsersCoin.json/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    }
  
    let user = UsersCoin.filter(user => user.userID === id)[0]
    if (!user) {
      return res.status(404).json({error: 'Unknown user'});
    }
  
    return res.json(user);
  });
  
  

// Servers Prefix
mu.get("/api/ServersPrefilx.json", (req, res) => res.json(ServersPrefix));

mu.listen(DBport, () => {
    console.log(`MuBot Server listening on port ${DBport}!`);
});
