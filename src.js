function start() {
    loadGUI();
    addUtils();
}

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

var getValues = () => new Promise((e, t) => {
    try {
        let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
        e({
            blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
            secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
        })
    } catch {
        t("Could not fetch auth details")
    }
});
var encodeValues = async (e, t) => {
    let d = window.crypto.getRandomValues(new Uint8Array(12));
    return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: d
    }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
        name: "AES-GCM"
    }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
};


function loadGUI() {
    var frame = document.createElement("iframe");
    frame.id = "blooo"
    frame.style.display = "none";
    frame.style.width = "1px";
    frame.style.height = "1px"
    document.body.appendChild(frame);

    window.alert = frame.contentWindow.alert;
    window.prompt = frame.contentWindow.prompt;
    window.confirm = frame.contentWindow.confirm;


    let element = document.createElement('div');
    element.innerHTML = `<div id="GUI"> <style>details > summary{cursor: pointer; transition: 1s; list-style: circle;}.hack{border: none; background: hsl(0, 0%, 20%); padding: 7px; margin: 5px; width: 70%; color: white; transition: 0.1s; border-radius: 5px; cursor: pointer;}.hack:hover{background: hsl(0, 1%, 31%);}</style> <div style="cursor: all-scroll; padding-top: 2px; font-size: 1.5rem; text-align: center;">BlooketUI<button id="gui-" style="background: black; height: 45px; width: 45px; border: none; cursor: pointer; position: absolute; top: -10px; right: 90%; font-size: 2.5rem; border-radius: 10px; font-family: Nunito; font-weight: bolder; padding-top: -10px; padding-right: -15px; color: white;">-</button> <button id="guiX" style="background: black; height: 45px; width: 45px; border: none; cursor: pointer; position: absolute; top: -10px; right: -10px; font-size: 1.5rem; border-radius: 10px; font-family: Nunito; font-weight: bolder; padding-top: 10px; padding-right: 15px; color: white;">X</button> </div><div style="display: block; margin: 10px; min-height: 70px;"> <div id="curPage">no game detected</div><div id="name">name: null</div><div>(press e to hide)</div><details open=""> <summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Main</summary> <button id="token" class="hack">Get Daily Rewards</button> <button id="spoof" class="hack">Spoof Blooks</button> <button id="open" class="hack">Spam Open Boxes</button> <button id="sell" class="hack">Auto Sell Dupes</button> <button id="correct" class="hack">Every Answer Correct</button> </details><br><div id="LoadedGame"> </div><div> Open source on <a href="https://github.com/Blooketware/BlooketUI">GitHub</a></div></div>`;
    element.style = `width: 350px; background: rgb(64, 64, 64); border-radius: 8px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
    document.body.appendChild(element);
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    element.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
            let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
            element.style.top = top + "px";
            element.style.left = left + "px";
        });
    });
}
start();
async function debuggerHelp(how) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token', {
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,ru;q=0.8",
        },
        credentials: "include"
    });
    const data = await response.json();
    let name = data.name;
    let role = data.role;
    window.blooketname = name;
    window.blooketrole = role;
    startDebugger(name);
}

function addtokens(event) {
    try {
        fetch("https://api.blooket.com/api/users", {
            credentials: "include"
        }).then(x => x.json()).then(x => {
            getValues().then(async e => {
                fetch("https://api.blooket.com/api/users/add-rewards", {
                    method: "put",
                    credentials: "include",
                    headers: {
                        "content-type": "application/json",
                        "X-Blooket-Build": e.blooketBuild
                    },
                    body: await encodeValues({
                        name: x.name,
                        addedTokens: 500,
                        addedXp: 300
                    }, e.secret)
                }).then(() => alert('Added daily rewawrds!')).catch(() => alert('There was an error when adding rewards!'));
            }).catch(() => alert('There was an error encoding requests!'));
        }).catch(() => alert('There was an error getting username!'));
        window.console.clear()
    } catch (hack) {
        if (confirm('An error has occured, would you like to open the debugger?')) {
            debuggerHelp()
        };
    };
};

function selldupes(event) {
    fetch("https://api.blooket.com/api/users", {
        credentials: "include"
    }).then(x => x.json()).then(x => {
        let blooks = Object.entries(x.unlocks).map(x => [x[0], x[1] - 1]).filter(x => x[1] > 0);
        let wait = ms => new Promise(r => setTimeout(r, ms));
        getValues().then(async e => {
            let error = false;
            alert('Selling duplicate blooks, please wait');
            for (let [blook, numSold] of blooks) {
                fetch("https://api.blooket.com/api/users/sellblook", {
                    method: "put",
                    credentials: "include",
                    headers: {
                        "content-type": "application/json",
                        "X-Blooket-Build": e.blooketBuild
                    },
                    body: await encodeValues({
                        name: x.name,
                        blook,
                        numSold
                    }, e.secret)
                }).catch(() => {
                    error = true
                });
                await wait(750);
                if (error) break;
            }
            alert(`Results:\n` + blooks.map((x) => `    ${x[1]} ${x[0]}`).join(`\n`));
        }).catch(() => alert('There was an error encoding requests!'));
    }).catch(() => alert('There was an error getting user data!'));
}

function spoofblooks(event) {
    try {
        if (window.location.pathname == "/play/lobby") {
            let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            hack.stateNode.setState({
                takenBlooks: [],
                lockedBlooks: []
            })
        } else {
            window.alert("Run this in a lobby (https://blooket.com/play/lobby/)")
        }
    } catch (hack) {
        if (confirm('An error has occured, would you like to open the debugger?')) {
            debuggerHelp()
        };
    };
};

function openboxes(event) {
    try {
        (async function() {
            let box = prompt('Which box do you want to open? (e.g. Space)');
            let boxes = {
                safari: 25,
                aquatic: 20,
                bot: 20,
                space: 20,
                breakfast: 15,
                medieval: 15,
                wonderland: 15,
                dino: 25
            };
            if (!Object.keys(boxes).includes(box.toLowerCase())) {
                return alert('I could not find that box!')
            };
            let amount = prompt('How many boxes do you want to open?');
            fetch("https://api.blooket.com/api/users", {
                credentials: "include"
            }).then(x => x.json()).then(x => {
                if (x.tokens < boxes[box.toLowerCase()] * amount) amount = Math.floor(x.tokens / boxes[box.toLowerCase()]);
                if (!amount) return alert('You do not have enough tokens!');
                let wait = ms => new Promise(r => setTimeout(r, ms));
                getValues().then(async e => {
                    let error = false,
                        blooks = [];
                    for (let i = 0; i < amount; i++) {
                        fetch("https://api.blooket.com/api/users/unlockblook", {
                            method: "put",
                            credentials: "include",
                            headers: {
                                "content-type": "application/json",
                                "X-Blooket-Build": e.blooketBuild
                            },
                            body: await encodeValues({
                                name: x.name,
                                box: box.charAt(0).toUpperCase() + box.slice(1).toLowerCase()
                            }, e.secret)
                        }).then(async x => {
                            let blook = await x.json();
                            blooks.push(blook.unlockedBlook);
                            alert(`${blook.unlockedBlook} (${i + 1}/${amount})`);
                        }).catch(() => {
                            error = true
                        });
                        await wait(100);
                        if (error) break;
                    }
                    let count = {};
                    blooks.forEach(blook => {
                        count[blook] = (count[blook] || 0) + 1
                    });
                    await alert(`Results:\n` + Object.entries(count).map((x) => `    ${x[1]} ${x[0]}`).join(`\n`));
                }).catch(() => alert('There was an error encoding requests!'));
            }).catch(() => alert('There was an error getting username!'));
        })();
        window.console.clear()
    } catch (hack) {
        if (confirm('An error has occured, would you like to open the debugger?')) {
            debuggerHelp()
        };
    };
};

function allcorrect(event) {
    try {
        let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
        hack.stateNode.questions = [{
            "text": "blooketware moment",
            "answers": [
                "blooketware on top",
                "blooketware on top2"
            ],
            "correctAnswers": [
                "blooketware on top",
                "blooketware on top2"
            ],
            "number": 1,
            "random": false,
            "timeLimit": "999",
            "image": "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1650444812/vr9fwibbp1mm0ge8hbuz.jpg",
            "audio": null
        }]
        hack.stateNode.freeQuestions = [{
            "text": "blooketware moment",
            "answers": [
                "blooketware on top",
                "blooketware on top2"
            ],
            "correctAnswers": [
                "blooketware on top",
                "blooketware on top2"
            ],
            "number": 1,
            "random": false,
            "timeLimit": "999",
            "image": "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1650444812/vr9fwibbp1mm0ge8hbuz.jpg",
            "audio": null
        }]
        var z = document.getElementsByTagName("iframe")
        z[z.length - 1].remove()
        x.remove()
        window.console.clear()
    } catch (hack) {
        if (confirm('An error has occured, would you like to open the debugger?')) {
            debuggerHelp()
        };
    };
};

function guiexit(event) {
    const GUI = document.getElementById("GUI");
    const GUIX = document.getElementById("guiX");
    const IFR = document.getElementById("blooo");
    const tokens = document.getElementById("token");
    const spoof = document.getElementById("spoof");
    const open = document.getElementById("open");
    const sell = document.getElementById("sell");
    const correct = document.getElementById("correct");
    GUIX.removeEventListener('click', guiexit);
    tokens.removeEventListener('click', addtokens);
    spoof.removeEventListener('click', spoofblooks);
    open.removeEventListener('click', openboxes);
    sell.removeEventListener('click', selldupes);
    correct.removeEventListener('click', allcorrect);
    window.onkeydown = null;
    GUI.remove();
    GUIX.remove();
    IFR.remove();
}

function toggleVisGUI() {
    var GUI = document.getElementById("GUI");
    if (GUI.style.display == "none") {
        GUI.style.display = "block";
    } else {
        GUI.style.display = "none";
    }
}

window.addEventListener('keydown', function(e) {
    if (e.key == "e") {
        toggleVisGUI();
    }
});

function startDebugger(name) {
    let debui = document.getElementById("deb")
    if (debui != null) {
        window.alert("The debugger is already open.")
    } else {
        let element = document.createElement('div');
        element.innerHTML = `<div id="deb"> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">Debug UI</div><div id="debname" style="font-size: 1rem;">Name: null</div><div id="hackstat">Hack Status: null</div><div id="gameinfo">No gamemode detected</div><br><button id="rundeb" style="width: 130px; height: 30px; cursor: pointer; background: hsl(0, 0%, 20%); border-radius: 22px; border: none; font-size: 1rem;"><b>Run Debugger</b></button><br><br><div style="font-size: 0.8rem;">ui by <a href="https://github.com/Blooketware">Blooketware</a></div></div>`;
        element.style = `width: 175px; background: rgb(64, 64, 64); border-radius: 8px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
        document.body.appendChild(element);
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        element.onmousedown = ((e = window.event) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = (() => {
                document.onmouseup = null;
                document.onmousemove = null;
            });
            document.onmousemove = ((e) => {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
                let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
                element.style.top = top + "px";
                element.style.left = left + "px";
            });
        });
    }
    let mode = "No game detected";
    let site = window.location.pathname;
    switch (site) {
        case "/play/racing":
            mode = "Racing"
            break;
        case "/play/fishing":
            mode = "Fishing Frenzy"
            break;
        case "/play/gold":
            mode = "Gold Quest"
            break;
        case "/play/factory":
            mode = "Factory";
            break;
        case "/cafe":
            mode = "Cafe"
            break;
        case "/kingdom":
            mode = "Crazy Kingdom"
            break;
        case "/tower/map":
            mode = "Tower of Doom"
            break;
        case "/tower/battle":
            mode = "Tower of Doom"
            break;
        case "/defense":
            mode = "Tower Defense"
            break;
    }
    const Rundeb = document.getElementById("rundeb")
    const gameinfo = document.getElementById("gameinfo")
    const hackstat = document.getElementById("hackstat")
    const debname = document.getElementById("debname")
    Rundeb.addEventListener('click', getstat);
    gameinfo = mode;
    debname.innerHTML = `Name: ${name}`;
    hackstat.innerHTML = "Hack Status:"
}
async function getstat() {
    const hackstat = document.getElementById("hackstat")
    const getApiSetUrlResponse = await fetch('https://api.blooket.com/api/games?gameId=62185f4950d6238032ffd5c2', {
        credentials: "include"
    });
    const getApiSetUrlData = await getApiSetUrlResponse.json();
    if (getApiSetUrlData.title == "online") {
        hackstat.innerHTML = "Hack Status: Online"
    } else {
        hackstat.innerHTML = "Hack Status: Offline"
    }
}
async function handleData(type) {
    if (type = "elements") {
        const response = await fetch('https://api.blooket.com/api/users/verify-token', {
            method: "GET",
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,ru;q=0.8",
            },
            credentials: "include"
        });
        let mode = "No game detected";
        let site = window.location.pathname
        switch (site) {
            case "/play/racing":
                mode = "Racing"
                break;
            case "/play/fishing":
                mode = "Fishing Frenzy"
                break;
            case "/play/gold":
                mode = "Gold Quest"
                break;
            case "/play/factory":
                mode = "Factory";
                break;
            case "/cafe":
                mode = "Cafe"
                break;
            case "/kingdom":
                mode = "Crazy Kingdom"
                break;
            case "/tower/map":
                mode = "Tower of Doom"
                break;
            case "/tower/battle":
                mode = "Tower of Doom"
                break;
            case "/defense":
                mode = "Tower Defense"
                break;
        }
        const data = await response.json();
        let Name = data.name;
        const nameElement = document.getElementById("name");
        const game = document.getElementById("curPage")
        game.innerHTML = mode;
        nameElement.innerHTML = `Name: ${Name}`;
    } else {
        console.error("handle data incorect type")
    }
}


function addListeners() {
    const GUIX = document.getElementById("guiX")
    const GUIM = document.getElementById("gui-")
    const tokens = document.getElementById("token")
    const spoof = document.getElementById("spoof")
    const open = document.getElementById("open")
    const sell = document.getElementById("sell")
    const correct = document.getElementById("correct")
    GUIX.addEventListener('click', guiexit);
    GUIM.addEventListener('click', toggleVisGUI);
    tokens.addEventListener('click', addtokens);
    spoof.addEventListener('click', spoofblooks);
    open.addEventListener('click', openboxes);
    sell.addEventListener('click', selldupes);
    correct.addEventListener('click', allcorrect);
}

function CheckGame() {
    let html = null;
    let type = "";
    let mode = "No game detected";
    let site = window.location.pathname;
    switch (site) {
        case "/play/racing":
            type = "race";
            mode = "Racing"
            html = '<div id="LoadedGame"><button id="finish" class="hack">Finish Race</button></div><br>'
            loadgame(type, html, mode)
            break;
        case "/play/fishing":
            type = "fishing";
            mode = "Fishing Frenzy"
            html = '<div id="LoadedGame"><button id="setweight" class="hack">Set Weight</button><button id="setlure" class="hack">Set Lure</button><button id="frenzy" class="hack">Always Frenzy</button></div><br>';
            loadgame(type, html, mode)
            break;
        case "/play/gold":
            type = "gold";
            mode = "Gold Quest"
            html = '<div id="LoadedGame"> <button id="setgold" class="hack">Set Gold</button> <button id="choiceesp" class="hack">Choice ESP</button> </div><br>';
            loadgame(type, html, mode)
            break;
        case "/play/factory":
            type = "factory";
            mode = "Factory";
            html = '<div id="LoadedGame"><button id="mega" class="hack">All Mega Bots</button> <button id="setcash" class="hack">Set Cash</button> 			<button id="ng" class="hack">Remove Glitches</button></div><br>'
            loadgame(type, html, mode)
            break;
        case "/cafe":
            type = "cafe";
            mode = "Cafe";
            html = '<div id="LoadedGame"><button id="inffood" class="hack">Infinite Food Level</button> <button id="setcoins" class="hack">Set Coins</button> <button id="stock" class="hack">Stock Infinite Food</button></div><br>'
            loadgame(type, html, mode)
            break;
        case "/cafe/shop":
            type = "cafe";
            mode = "Cafe";
            html = '<div id="LoadedGame"><button id="inffood" class="hack">Infinite Food Level</button> <button id="setcoins" class="hack">Set Coins</button> <button id="stock" class="hack">Stock Infinite Food</button></div><br>'
            loadgame(type, html, mode)
            break;
        case "/play/hack":
            type = "crypto";
            mode = "Crypto-Hack"
            html = '<div id="LoadedGame"><button id="set" class="hack">Set Crypto</button> <button id="esp" class="hack">Change Name</button></div><br>';
            loadgame(type, html, mode)
            break;
        case "/kingdom":
            type = "kingdom";
            mode = "Crazy Kingdom"
            html = '<div id="LoadedGame"><button id="esp" class="hack">ChoiceESP</button><button id="max" class="hack">Max Stats</button> <button id="taxes" class="hack">No Taxes</button> <button id="setgold" class="hack">Set Gold</button> <button id="sethappy" class="hack">Set Happiness</button> <button id="setmaterials" class="hack">Set Materials</button> <button id="setpeople" class="hack">Set People</button></div><br>';
            loadgame(type, html, mode)
            break;
        case "/tower/map":
            type = "doom"
            mode = "Tower of Doom"
            html = '<div id="LoadedGame"><button id="maxstats" class="hack">Max Stats</button><button id="lowstats" class="hack">Lower Enemy Stats</button><button id="settokens" class="hack">Set Coins</button><button id="infhlt" class="hack">Infinite Health</button></div><br>'
            loadgame(type, html, mode)
            break;
        case "/tower/battle":
            type = "doom"
            mode = "Tower of Doom"
            html = '<div id="LoadedGame"><button id="maxstats" class="hack">Max Stats</button><button id="lowstats" class="hack">Lower Enemy Stats</button><button id="settokens" class="hack">Set Coins</button><button id="infhlt" class="hack">Infinite Health</button></div><br>'
            loadgame(type, html, mode)
            break;
        case "/defense":
            type = "defense";
            mode = "Tower Defense"
            html = '<div id="LoadedGame"> <button id="settokens" class="hack">Set Tokens</button> <button id="sethealth" class="hack">Set Health</button> <button id="setround" class="hack">Set Round</button> <button id="maxtowers" class="hack">Max All Towers</button> <button id="towersany" class="hack">Place Towers Anywhere</button> </div><br>';
            loadgame(type, html, mode)
            break;
        default:
            let element = document.getElementById("LoadedGame")
            element.innerHTML = '<div id="LoadedGame"></div>';
    }

    function loadgame(type, html, mode) {
        let element = document.getElementById("LoadedGame")
        let curPage = document.getElementById("curPage")
        element.innerHTML = html;
        curPage.innerHTML = mode;
        addEvents(type);
    }

    function addEvents(type) {
        let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner
        switch (type) {
            case "crypto":
                const set = document.getElementById("set")
                const esp2 = document.getElementById("esp")
                set.addEventListener('click', () => {
                    var cf = window.prompt("How much Crypto would you like?")
                    let num = Number(cf)
                    if (num != null || num != undefined) {
                        hack.stateNode.state.crypto = num;
                    }
                })
                esp2.addEventListener('click', () => {
                    var pass = window.prompt("What would you like your password to be?")
                    if (tokenz != null || tokenz != undefined) {
                        hack.stateNode.state.passwordOptions[0] = pass;
                        hack.stateNode.state.password = pass;
                        window.alert(`Set password to: ${pass}`)
                    }
                });
                break;
            case "defense":
                const settokenss = document.getElementById("settokens")
                const sethealth = document.getElementById("sethealth")
                const setround = document.getElementById("setround")
                const maxtowers = document.getElementById("maxtowers")
                const towersany = document.getElementById("towersany")
                settokenss.addEventListener('click', () => {
                    var tokenz = window.prompt("How many tokens would you like?");
                    if (tokenz != null || tokenz != undefined || tokenz != NaN) {
                        hack.stateNode.state.tokens = tokenz
                    }
                })
                sethealth.addEventListener('click', () => {
                    var hltt = window.prompt("How much health would you like?");
                    if (hltt != null || hltt != undefined || hltt != NaN) {
                        hack.stateNode.state.health = hltt
                    }
                })
                setround.addEventListener('click', () => {
                    var rnd = window.prompt("What round would you like to be on?");
                    if (rnd != null || rnd != undefined || rnd != NaN) {
                        hack.stateNode.state.round = rnd
                    }
                })
                maxtowers.addEventListener('click', () => {
                    for (i = 0; i < e.stateNode.towers.length; i++) {
                        e.stateNode.towers[i].damage = "9999"
                        e.stateNode.towers[i].range = "99999"
                        e.stateNode.towers[i].blastRadius = "999"
                        e.stateNode.towers[i].fullCd = "0"
                    }
                })
                towersany.addEventListener('click', () => {
                    for (i = 0; i < 10; i++) {
                        hack.stateNode.tiles[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }
                    window.alert("You can now place Towers on any tile.")
                })
                break;
            case "race":
                const finish = document.getElementById("finish")
                finish.addEventListener('click', () => {
                    hack.stateNode.state.progress = hack.stateNode.state.goalAmount;
                    window.alert("Get one question correct to finish the race.")
                })
                break;
            case "kingdom":
                const esp = document.getElementById("esp")
                const taxes = document.getElementById("taxes")
                const setgold = document.getElementById("setgold")
                const sethappy = document.getElementById("sethappy")
                const setmaterials = document.getElementById("setmaterials")
                const setpeople = document.getElementById("setpeople")
                const max = document.getElementById("max")
                esp.addEventListener('click', () => {
                    kingesp();
                })
                taxes.addEventListener('click', () => {
                    hack.stateNode.taxCounter = 9999999;
                    window.alert("Disabled the Tax Toucan")
                })
                setgold.addEventListener('click', () => {
                    var goldz = window.prompt("How much gold would you like?");
                    if (goldz != null || goldz != undefined || goldz != NaN) {
                        hack.stateNode.state.gold = goldz
                    }
                })
                sethappy.addEventListener('click', () => {
                    var happi = window.prompt("How much happiness would you like?");
                    if (happi != null || happi != undefined || happi != NaN) {
                        hack.stateNode.state.happiness = goldz
                    }
                })
                setmaterials.addEventListener('click', () => {
                    var matrs = window.prompt("How many materials would you like?");
                    if (matrs != null || matrs != undefined || matrs != NaN) {
                        hack.stateNode.state.materials = matrs
                    }
                })
                setpeople.addEventListener('click', () => {
                    var pple = window.prompt("How many people would you like?");
                    if (pple != null || pple != undefined || pple != NaN) {
                        hack.stateNode.state.people = pple
                    }
                })
                max.addEventListener('click', () => {
                    hack.stateNode.state.gold = 100;
                    hack.stateNode.state.people = 100;
                    hack.stateNode.state.materials = 100;
                    hack.stateNode.state.happiness = 100;
                    window.alert("Maxed stats.")
                })
                setInterval(() => {
                    if (hack.stateNode.state.guest.no.spawn != null) {
                        if (hack.stateNode.state.guest.no.spawn = "Dragon1") {
                            let cf = confirm("Toucan detected, would you like to bypass it?")
                            if (cf) {
                                hack.stateNode.state.guest.no.spawn = null;
                                window.alert("You can say No safely now.")
                            }
                        }
                    }
                    if (hack.stateNode.state.guest.blook == "Witch") {
                        let cf = confirm("Witch detected, would you like to set the outcome of yes to gaining riches?")
                        if (cf) {
                            for (i = 0; i < hack.stateNode.state.guest.yes.array.length; i++) {
                                hack.stateNode.state.guest.yes.array[i] = {
                                    "msg": "Hmmmm... It looks like your future has plenty of riches.",
                                    "happiness": 10,
                                    "people": 10,
                                    "materials": 10,
                                    "gold": 15
                                }
                            }
                            window.alert("When you say yes you will gain:\nHappiness: 10\nPeople: 10\nMaterials: 10\nGold: 15")
                        }
                    }
                }, 500);
                break;
            case "doom":
                const lowstats = document.getElementById("lowstats")
                const settokens = document.getElementById("settokens")
                const maxstats = document.getElementById("maxstats")
                const infhlt = document.getElementById("infhlt")
                settokens.addEventListener('click', () => {
                    let coinhtml = document.querySelector(".styles__playerEnergy___G4cGN-camelCase")
                    var coin = window.prompt("How many coins would you like?");
                    if (coin != null || coin != undefined || coin != NaN) {
                        hack.stateNode.state.coins = coin
                        coinhtml.innerText = coin;
                        coinhtml.innerHTML = coin;
                        coinhtml.outerText = coin;
                        coinhtml.outerHTML = coin;
                        window.alert("Set coins to " + coin)
                    }
                })
                maxstats.addEventListener('click', () => {
                    let stat = document.querySelectorAll(".styles__innerPower___3tJ6M-camelCase");
                    let nums = document.querySelectorAll(".styles__powerBox___2sDuh-camelCase");
                    hack.stateNode.state.myCard.charisma = 20;
                    hack.stateNode.state.myCard.strength = 20;
                    hack.stateNode.state.myCard.wisdom = 20;
                    stat[0].style = 'background-color: rgb(151, 15, 5); width: 100%;'
                    stat[1].style = 'background-color: rgb(7, 21, 93); width: 100%;'
                    stat[2].style = 'background-color: rgb(148, 12, 128); width: 100%;'
                    nums[0].innerText = hack.stateNode.state.myCard.strength;
                    nums[1].innerText = hack.stateNode.state.myCard.charisma;
                    nums[2].innerText = hack.stateNode.state.myCard.wisdom;
                    window.alert("Set max stats.")
                })
                lowstats.addEventListener('click', () => {
                    hack.stateNode.state.enemyCard.charisma = 0;
                    hack.stateNode.state.enemyCard.strength = 0;
                    hack.stateNode.state.enemyCard.wisdom = 0;
                    window.alert("Set enemy stats to 0")
                })
                infhlt.addEventListener('click', () => {
                    hack.stateNode.state.myLife = 69420
                    window.alert("Set Health to 69420")
                })
                break;
            case "factory":
                const mega = document.getElementById("mega")
                const setcash = document.getElementById("setcash")
                const ng = document.getElementById("ng")
                mega.addEventListener('click', () => {
                    let blook = hack.stateNode.state.blooks
                    for (i = 0; i < 10; i++) {
                        blook[i] = {
                            "name": "Mega Bot",
                            "color": "#d71f27",
                            "class": "🤖",
                            "rarity": "Legendary",
                            "cash": [80000, 430000, 4200000, 62000000, 1000000000],
                            "time": [5, 5, 3, 3, 3],
                            "price": [7000000, 120000000, 1900000000, 35000000000],
                            "active": false,
                            "level": 4,
                            "bonus": 5.5
                        };
                    }
                })
                setcash.addEventListener('click', () => {
                    hack.stateNode.state.cash = window.prompt("How much cash would you like?")
                })
                ng.addEventListener('click', () => {
                    hack.stateNode.state.dance = ""
                    hack.stateNode.state.lol = ""
                    hack.stateNode.state.joke = ""
                    hack.stateNode.state.showTour = ""
                    hack.stateNode.state.hazards = ["", "", "", "", ""]
                    hack.stateNode.state.glitcherName = ""
                    hack.stateNode.state.glitch = ""
                    hack.stateNode.state.glitchMsg = ""
                    hack.stateNode.state.glitcherBlook = ""
                    window.alert("Attempted to remove glitches.")
                })
                break;
            case "fishing":
                const frenzy = document.getElementById("frenzy")
                const setweight = document.getElementById("setweight")
                const setlure = document.getElementById("setlure")
                frenzy.addEventListener('click', () => {
                    hack.stateNode.state.isFrenzy = true;
                })
                setweight.addEventListener('click', () => {
                    var wght = window.prompt("How much weight would you like?");
                    if (wght != null || wght != undefined || wght != NaN) {
                        hack.stateNode.state.weight = wght
                    }
                })
                setlure.addEventListener('click', () => {
                    var lure = window.prompt("How much lure would you like? (0-4)");
                    if (lure != null || lure != undefined || lure != NaN) {
                        hack.stateNode.state.lure = lure
                    }
                })
                break;
            case "gold":
                const setgoldg = document.getElementById("setgold")
                const choiceesp = document.getElementById("choiceesp")
                setgoldg.addEventListener('click', () => {
                    var gold = window.prompt("How much gold would you like?");
                    if (gold != null || gold != undefined || gold != NaN) {
                        hack.stateNode.state.gold = gold
                    }
                })
                choiceesp.addEventListener('click', () => {
                    goldesp()
                })
                break;
            case "cafe":
                const setcoinz = document.getElementById("setcoins")
                const infifood = document.getElementById("inffood")
                const stockf = document.getElementById("stock")
                setcoinz.addEventListener('click', () => {
                    hack.stateNode.setState({
                        cafeCash: Number(parseFloat(prompt('How much cash would you like?')))
                    });
                    var z = document.getElementsByTagName("iframe")
                    z[z.length - 1].remove()
                    x.remove()
                    window.console.clear()
                })
                infifood.addEventListener('click', () => {
                    if (document.location.pathname != "/cafe") return alert("This cheat doesn't work in the shop!");
                    hack.stateNode.state.foods.forEach(e => e.stock = 99999);
                    hack.stateNode.forceUpdate();
                    var z = document.getElementsByTagName("iframe")
                    z[z.length - 1].remove()
                    x.remove()
                    window.console.clear()
                })
                break;
        }
    }
}

function kingesp() {
    function ChoiceUII() {
        let element = document.createElement('div');
        element.innerHTML = `<div id="espp"><style>details>summary{cursor:pointer;transition:1s;list-style:circle}.button{font-size:1rem}</style><div style="padding-top:2px;font-size:1.5rem;text-align:center">Choice ESP</div><br><details open><summary style="padding:10px;font-size:1.5em;font-weight:bolder">Yes:</summary><div id="c1h" class="button"></div><div id="c1p" class="button"></div><div id="c1g" class="button"></div><div id="c1m" class="button"></div></details><details open><summary style="padding:10px;font-size:1.5em;font-weight:bolder">No:</summary><div id="c2h" class="button"></div><div id="c2p" class="button"></div><div id="c2g" class="button"></div><div id="c2m" class="button"></div></details><br><button id="close" style="width:130px;height:30px;cursor:pointer;background:#333;border-radius:22px;border:none;font-size:1rem"><b>Close ESP</b></button><br><div style="font-size:.8rem">ui by <a href="https://github.com/Blooketware">zastix (blooketware)</a></div></div>`;
        element.style = `width: 200px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
        document.body.appendChild(element);
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        element.onmousedown = ((e = window.event) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = (() => {
                document.onmouseup = null;
                document.onmousemove = null;
            });
            document.onmousemove = ((e) => {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
                let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
                element.style.top = top + "px";
                element.style.left = left + "px";
            });
        });
    }

    function closeui() {
        const esp = document.getElementById("espp")
        esp.remove();
    }

    function addUtils() {
        const exit = document.getElementById("close")
        exit.addEventListener('click', closeui);
    }
    ChoiceUII()
    addUtils()

    function updateChoices() {
        let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner
        const no = hack.stateNode.state.guest.no
        const yes = hack.stateNode.state.guest.yes
        const c2gold = document.getElementById("c2g")
        const c2happy = document.getElementById("c2h")
        const c2people = document.getElementById("c2p")
        const c2mats = document.getElementById("c2m")
        const c1gold = document.getElementById("c1g")
        const c1happy = document.getElementById("c1h")
        const c1people = document.getElementById("c1p")
        const c1mats = document.getElementById("c1m")
        updateNo();
        updateYes();

        function updateNo() {
            if (no.happiness != null) {
                c2happy.innerHTML = `Happiness: ${no.happiness}`
            } else {
                c2happy.innerHTML = null;
            }
            if (no.people != null) {
                c2people.innerHTML = `People: ${yes.people}`
            } else {
                c2people.innerHTML = null;
            }
            if (no.gold != null) {
                c2gold.innerHTML = `Gold: ${no.gold}`
            } else {
                c2gold.innerHTML = null;
            }
            if (no.materials != null) {
                c2mats.innerHTML = `Materials: ${no.materials}`
            } else {
                c2mats.innerHTML = null;
            }
        }

        function updateYes() {
            if (yes.happiness != null) {
                c1happy.innerHTML = `Happiness: ${yes.happiness}`
            } else {
                c1happy.innerHTML = null;
            }
            if (yes.people != null) {
                c1people.innerHTML = `People: ${yes.people}`
            } else {
                c1people.innerHTML = null;
            }
            if (yes.gold != null) {
                c1gold.innerHTML = `Gold: ${yes.gold}`
            } else {
                c1gold.innerHTML = null;
            }
            if (yes.materials != null) {
                c1mats.innerHTML = `Materials: ${yes.materials}`
            } else {
                c1mats.innerHTML = null;
            }
        }
    }
    setInterval(() => {
        const esp = document.getElementById("espp")
        if (esp != null) {
            updateChoices();
        }
    }, 500);
}

function goldesp() {
    function ChoiceUI() {
        let element = document.createElement('div');
        element.innerHTML = `<div id="esp"> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">Choice ESP</div><div id="c1" style="font-size: 1rem;">Choice 1:</div><div id="c2">Choice 2:</div><div id="c3">Choice 3:</div><br><button id="close" style="width: 130px; height: 30px; cursor: pointer; background: hsl(0, 0%, 20%); border-radius: 22px; border: none; font-size: 1rem;"><b>Close ESP</b></button><br><br><div style="font-size: 0.8rem;">ui by <a href="https://github.com/Blooketware">Blooketware</a></div></div>`;
        element.style = `width: 200px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
        document.body.appendChild(element);
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        element.onmousedown = ((e = window.event) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = (() => {
                document.onmouseup = null;
                document.onmousemove = null;
            });
            document.onmousemove = ((e) => {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
                let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
                element.style.top = top + "px";
                element.style.left = left + "px";
            });
        });
    }

    function closeui() {
        const esp = document.getElementById("esp")
        esp.remove();
    }

    function addUtilss() {
        const exit = document.getElementById("close")
        exit.addEventListener('click', closeui);
    }
    ChoiceUI()
    addUtilss()

    function updateChoicess() {
        let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner
        const choice = hack.stateNode.state.choices
        const c1 = document.getElementById("c1")
        const c2 = document.getElementById("c2")
        const c3 = document.getElementById("c3")
        c1.innerHTML = "Choice 1: " + choice[0].text
        c2.innerHTML = "Choice 2: " + choice[1].text
        c3.innerHTML = "Choice 3: " + choice[2].text
    }
    setInterval(() => {
        updateChoicess();
    }, 500);
}

function addUtils() {
    handleData("elements");
    addListeners()
    CheckGame();
}
addUtils();
setInterval(() => {
    CheckGame();
}, 10000);
window.alert("Developed by smint n zastix.");
