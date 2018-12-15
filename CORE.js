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
	if (!UsersCoin[id]) {
		UsersCoin[id] = {
			UsersCoin: 0
        };
        cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { console.log(error); } });
	}
    return res.json(
        UsersCoin[id] = {
            UsersCoin: UsersCoin[id].UsersCoin + 1
        });
    });
  
mu.get('/action/UserTyped/:id/:verify', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!req.params.verify) return res.status(401).json({error: 'unauthorized'});
    if (req.params.verify != process.env.verify) return res.status(403).json({error: 'forbidden'});
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
            return res.status(200).json({status: "OK"});
		}
    }
});

mu.get('/action/Dobak/:id/:verify', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!req.params.verify) return res.status(401).json({error: 'unauthorized'});
    if (req.params.verify != process.env.verify) return res.status(403).json({error: 'forbidden'});
    if (!id) {
      return res.status(400).json({error: 'Incorrect id'});
    } else {
        
			if (!UsersCoin[id]) {
				UsersCoin[id] = {
					UsersCoin: 0
				};
                cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { console.log(error); } });
            }

        let Slot1; // 첫번째 슬롯 값의 대한 메세지 스트링
        let Slot2; // 두번째 슬롯 값의 대한 메세지 스트링
        let Slot3; // 세번째 슬롯 값의 대한 메세지 스트링
        let SlotMax = 100; // 생성될 슬롯 값의 최대값
        let Ran1 = Math.floor(Math.random() * (SlotMax)) + 0; // 첫번째 슬롯 값 추출
        let Ran2 = Math.floor(Math.random() * (SlotMax)) + 0; // 두번째 슬롯 값 추출
        let Ran3 = Math.floor(Math.random() * (SlotMax)) + 0; // 세번째 슬롯 값 추출
       
        // 첫번째 슬롯 값의 대한 메세지 스트링
        if (Ran1 <= 20) {
            Slot1 = ":zero:";
        } else if (Ran1 <= 40) {
            Slot1 = ":one:";
        } else if (Ran1 <= 50) {
            Slot1 = ":two:";
        } else if (Ran1 <= 70) {
            Slot1 = ":three:";
        } else if (Ran1 <= 80) {
            Slot1 = ":four:";
        } else if (Ran1 <= 95) {
            Slot1 = ":five:";
        } else if (Ran1 <= 99) {
            Slot1 = ":six:";
        } else if (Ran1 == 100) {
            Slot1 = ":seven:";
        }
    
        // 두번째 슬롯 값의 대한 메세지 스트링
        if (Ran2 <= 10) {
            Slot2 = ":zero:";
        } else if (Ran2 <= 20) {
            Slot2 = ":one:";
        } else if (Ran2 <= 40) {
            Slot2 = ":two:";
        } else if (Ran2 <= 45) {
            Slot2 = ":three:";
        } else if (Ran2 <= 60) {
            Slot2 = ":four:";
        } else if (Ran2 <= 75) {
            Slot2 = ":five:";
        } else if (Ran2 <= 85) {
            Slot2 = ":six:";
        } else if (Ran2 <= 100) {
            Slot2 = ":seven:";
        }
        
        // 세번째 슬롯 값의 대한 메세지 스트링
        if (Ran3 <= 10) {
            Slot3 = ":zero:";
        } else if (Ran3 <= 20) {
            Slot3 = ":one:";
        } else if (Ran3 <= 30) {
            Slot3 = ":two:";
        } else if (Ran3 <= 40) {
            Slot3 = ":three:";
        } else if (Ran3 <= 50) {
            Slot3 = ":four:";
        } else if (Ran3 <= 60) {
            Slot3 = ":five:";
        } else if (Ran3 <= 70) {
            Slot3 = ":six:";
        } else if (Ran3 <= 100) {
            Slot3 = ":seven:";
        }
        
        // 아래 if문들은 위에서 부터 계산이 중요한 순서대로 정렬되야 정상적으로 뮤트코인이 지급됩니다
        if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":seven:") {
            SlotResult = "끼이야야야야아악!! 777!!! 잭팟이다뮤!!!!!! [기존 보유량에 777배]";
            UsersCoin[id] = {
                UsersCoin: UsersCoin[id].UsersCoin * 777
            };
            cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { } });
        } else if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":zero:") {
            SlotResult = "엌ㅋ 000 실화얔ㅋ [기존 보유량에 0배, ㅅㄱ]";
            UsersCoin[id] = {
                UsersCoin: UsersCoin[id].UsersCoin * 0
            };
            cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { } });
        } else if (Slot1 == Slot2 && Slot2 == Slot3) {
            SlotResult = "3슬롯을 맞추는데 성공했다뮤! [+8192 MUC]";
            UsersCoin[id] = {
                UsersCoin: UsersCoin[id].UsersCoin + 8192
            };
            cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { } });
        } else if (Slot1 == Slot2 || Slot2 == Slot3) {
            SlotResult = "2슬롯을 연속으로 맞추는데 성공했다뮤! [+2048 MUC]";
            UsersCoin[id] = {
                UsersCoin: UsersCoin[id].UsersCoin + 2048
            };
            cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { } });
        } else if (Slot1 == Slot3) {
            SlotResult = "연속으론 아니지만 2슬롯을 맞추는데 성공했다뮤! [+1024MUC]";
            UsersCoin[id] = {
                UsersCoin: UsersCoin[id].UsersCoin + 1024
            };
            cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { } });
        } else {
            SlotResult = "히익, 운이 없네뮤... [-10MUC(도박비용)]";
            UsersCoin[id] = {
                UsersCoin: UsersCoin[id].UsersCoin - 10
            };
            cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(UsersCoin), (error) => { if (error) { } });
        }
            return res.status(200).json({"status": "OK", "Slot1": Slot1, "Slot2": Slot2, "Slot3": Slot3 , "SlotResult": SlotResult});
		}
    }
);

// Servers Prefix
mu.get("/api/ServersPrefilx.json", (req, res) => res.json(ServersPrefix));

mu.listen(process.env.PORT, '0.0.0.0', function() {
    console.log(`MuBot Server listening on port ${DBport}!`);
});
