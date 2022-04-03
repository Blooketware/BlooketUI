function start()
{
	loadGUI();
	addUtils();
}

function loadGUI()
{ //credits to gliz
	let element = document.createElement('div');
	element.innerHTML = `<div id="GUI"> <style>details > summary{cursor: pointer; transition: 1s; list-style: circle;}.hack{border: none; background: hsl(0, 0%, 20%); padding: 7px; margin: 5px; width: 70%; color: white; transition: 0.1s; border-radius: 5px; cursor: pointer;}.hack:hover{background: hsl(0, 1%, 31%);}</style> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">Blooket Hacks <button id="gui-" style="background: black; height: 45px; width: 45px; border: none; cursor: pointer; position: absolute; top: -10px; right: 90%; font-size: 2.5rem; border-radius: 10px; font-family: Nunito; font-weight: bolder; padding-top: -10px; padding-right: -15px; color: white;">-</button> <button id="guiX" style="background: black; height: 45px; width: 45px; border: none; cursor: pointer; position: absolute; top: -10px; right: -10px; font-size: 1.5rem; border-radius: 10px; font-family: Nunito; font-weight: bolder; padding-top: 10px; padding-right: 15px; color: white;">X</button> </div><div style="display: block; margin: 10px; min-height: 70px;"> <div id="curPage">no game detected</div><div id="name">name: null</div><div>(press e to hide)</div><details open=""> <summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Main</summary> <button id="token" class="hack">Get Daily Rewards</button> <button id="spoof" class="hack">Spoof Blooks</button> <button id="open" class="hack">Spam Open Boxes</button> <button id="sell" class="hack">Auto Sell Dupes</button> <button id="correct" class="hack">Every Answer Correct</button> </details><br><div id="LoadedGame"> </div><div> Hacks by <a href="https://github.com/ZasticBradyn">zastix</a><br><a href="https://github.com/ZasticBradyn/BlooketUI/">Repository</a></div></div>`;
	element.style = `width: 350px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
	document.body.appendChild(element);
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	element.onmousedown = ((e = window.event) =>
	{
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = (() =>
		{
			document.onmouseup = null;
			document.onmousemove = null;
		});
		document.onmousemove = ((e) =>
		{
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
async function debuggerHelp(how)
{
	const response = await fetch('https://api.blooket.com/api/users/verify-token',
	{
		method: "GET",
		headers:
		{
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9,ru;q=0.8",
		},
		credentials: "include"
	});
	const data = await response.json();
	let name = data.name;
	startDebugger(name);
}

function addtoken(event)
{
	try
	{
		let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
		var x = document.getElementsByTagName("P")[0].parentElement;
		x.remove()
	}
	catch (hack)
	{
		if (confirm('An error has occured, would you like to open the debugger?'))
		{
			debuggerHelp()
		};
	};
};

function spoofblooks(event)
{
	try
	{
		if (window.location.pathname == "/play/lobby")
		{
			let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
			hack.stateNode.state.lockedBlooks = [];
			hack.stateNode.state.takenBlooks = [];
			alert("Select a diffrent Blook to unlock all Blooks!")
		}
		else
		{
			alert("Run this in a lobby (https://blooket.com/play/lobby/)")
		}
	}
	catch (hack)
	{
		if (confirm('An error has occured, would you like to open the debugger?'))
		{
			debuggerHelp()
		};
	};
};

function openboxs(event)
{
	try
	{
		let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
		var x = document.getElementsByTagName("P")[0].parentElement;
		x.remove()
	}
	catch (hack)
	{
		if (confirm('An error has occured, would you like to open the debugger?'))
		{
			debuggerHelp()
		};
	};
};

function selldupes(event)
{
	try
	{
		let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
		var x = document.getElementsByTagName("P")[0].parentElement;
		x.remove()
	}
	catch (hack)
	{
		if (confirm('An error has occured, would you like to open the debugger?'))
		{
			debuggerHelp()
		};
	};
};

function allcorect(event)
{
	try
	{
		let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
		hack.stateNode.questions[0].answers = ['https://github.com/ZasticBradyn/BlooketUI', 'https://github.com/ZasticBradyn/BlooketUI-2']
		hack.stateNode.questions[0].correctAnswers = ['https://github.com/ZasticBradyn/BlooketUI', 'https://github.com/ZasticBradyn/BlooketUI-2']
		hack.stateNode.questions[0].text = "https://github.com/ZasticBradyn/BlooketUI"
	}
	catch (hack)
	{
		if (confirm('An error has occured, would you like to open the debugger?'))
		{
			debuggerHelp()
		};
	};
};

function guiexit(event)
{
	const GUI = document.getElementById("GUI")
	GUI.remove();
}

function toggleVisGUI()
{
	var GUI = document.getElementById("GUI");
	if (GUI.style.display == "none")
	{
		GUI.style.display = "block";
	}
	else
	{
		GUI.style.display = "none";
	}
}
window.addEventListener('keydown', function(e)
{
	if (e.key == "e")
	{
		toggleVisGUI();
	}
}, false);

function startDebugger(name)
{
	let debui = document.getElementById("deb")
	if (debui != null)
	{
		alert("The debugger is already open.")
	}
	else
	{
		let element = document.createElement('div');
		element.innerHTML = `<div id="deb"> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">Debug UI</div><div id="debname" style="font-size: 1rem;">Name: null</div><div id="hackstat">Hack Status: null</div><div id="gameinfo">No gamemode detected</div><br><button id="rundeb" style="width: 130px; height: 30px; cursor: pointer; background: hsl(0, 0%, 20%); border-radius: 22px; border: none; font-size: 1rem;"><b>Run Debugger</b></button><br><br><div style="font-size: 0.8rem;">ui by <a href="https://github.com/ZasticBradyn">zastix</a></div></div>`;
		element.style = `width: 175px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
		document.body.appendChild(element);
		var pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;
		element.onmousedown = ((e = window.event) =>
		{
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = (() =>
			{
				document.onmouseup = null;
				document.onmousemove = null;
			});
			document.onmousemove = ((e) =>
			{
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
	switch (site)
		{
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
                mode = "Cafe is not supported"
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
async function getstat()
{
	const hackstat = document.getElementById("hackstat")
	const getApiSetUrlResponse = await fetch('https://api.blooket.com/api/games?gameId=62185f4950d6238032ffd5c2',
	{
		credentials: "include"
	});
	const getApiSetUrlData = await getApiSetUrlResponse.json();
	if (getApiSetUrlData.title == "online")
	{
		hackstat.innerHTML = "Hack Status: Online"
	}
	else
	{
		hackstat.innerHTML = "Hack Status: Offline"
	}
}
async function handelData(type)
{
	if (type = "elements")
	{
		const response = await fetch('https://api.blooket.com/api/users/verify-token',
		{
			method: "GET",
			headers:
			{
				"accept": "application/json, text/plain, */*",
				"accept-language": "en-US,en;q=0.9,ru;q=0.8",
			},
			credentials: "include"
		});
		let mode = "No game detected";
		let site = window.location.pathname
        switch (site)
		{
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
                mode = "Cafe is not supported"
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
	}
	else
	{
		console.error("handel data incorect type")
	}
}


function addListeners()
{
	const GUIX = document.getElementById("guiX")
	const tokens = document.getElementById("token")
	const spoof = document.getElementById("spoof")
	const open = document.getElementById("open")
	const sell = document.getElementById("sell")
	const correct = document.getElementById("correct")
	GUIX.addEventListener('click', guiexit);
	tokens.addEventListener('click', addtoken);
	spoof.addEventListener('click', spoofblooks);
	open.addEventListener('click', openboxs);
	sell.addEventListener('click', selldupes);
	correct.addEventListener('click', allcorect);
}

function CheckGame()
{
	let html = null;
	let type = "";
	let mode = "No game detected";
	let site = window.location.pathname;
    switch (site)
		{
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
		html = '<div id="LoadedGame"><button id="mega" class="hack">All Mega Bots</button> <button id="setcash" class="hack">Set Cash</button> <button id="ng" class="hack">Remove Glitches</button></div><br>'
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
		html = '<div id="LoadedGame"><button id="maxstats" class="hack">Max Stats</button><button id="lowstats" class="hack">Lower Enemey Stats</button><button id="settokens" class="hack">Set Coins</button></div><br>'
		loadgame(type, html, mode)
        break;
            case "/tower/battle":
                type = "doom"
		mode = "Tower of Doom"
		html = '<div id="LoadedGame"><button id="maxstats" class="hack">Max Stats</button><button id="lowstats" class="hack">Lower Enemey Stats</button><button id="settokens" class="hack">Set Coins</button></div><br>'
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
	if (site == "/play/racing")
	{
		type = "race";
		mode = "Racing"
		html = '<div id="LoadedGame"><button id="finish" class="hack">Finish Race</button></div><br>'
		loadgame(type, html, mode)
	}

	function loadgame(type, html, mode)
	{
		let element = document.getElementById("LoadedGame")
		let curPage = document.getElementById("curPage")
		element.innerHTML = html;
		curPage.innerHTML = mode;
        addEvents(type);
	}

	function addEvents(type)
	{
        let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner
		switch (type)
		{
			case "crypto":
				const set = document.getElementById("set")
				const esp2 = document.getElementById("esp")
				set.addEventListener('click', () =>
				{
					let cf = prompt("How much Crypto would you like?")
					let num = Number(cf)
					hack.stateNode.state.crypto = num;
				})
				esp2.addEventListener('click', () =>
				{
					let pass = prompt("What would you like your password to be?")
					hack.stateNode.state.passwordOptions[0] = pass;
					hack.stateNode.state.password = pass;
					alert(`Set password to: ${pass}`)
				})
				break;
			case "defense":
				const settokenss = document.getElementById("settokens")
				const sethealth = document.getElementById("sethealth")
				const setround = document.getElementById("setround")
				const maxtowers = document.getElementById("maxtowers")
				const towersany = document.getElementById("towersany")
				settokenss.addEventListener('click', () =>
				{
					hack.stateNode.state.tokens = prompt("How many tokens would you like?");
				})
				sethealth.addEventListener('click', () =>
				{
					hack.stateNode.state.health = prompt("How much health would you like?")
				})
				setround.addEventListener('click', () =>
				{
					hack.stateNode.state.round = prompt("What round would you like to be on?")
				})
				maxtowers.addEventListener('click', () =>
				{
					if (hack.stateNode.towers[0] != null)
					{
						hack.stateNode.towers[0].damage = "9999"
						hack.stateNode.towers[0].range = "99999"
						hack.stateNode.towers[0].blastRadius = "999"
						hack.stateNode.towers[0].fullCd = "0"
					}
					if (hack.stateNode.towers[1] != null)
					{
						hack.stateNode.towers[1].damage = "9999"
						hack.stateNode.towers[1].range = "99999"
						hack.stateNode.towers[1].blastRadius = "999"
						hack.stateNode.towers[1].fullCd = "0"
					}
					if (hack.stateNode.towers[2] != null)
					{
						hack.stateNode.towers[2].damage = "9999"
						hack.stateNode.towers[2].range = "99999"
						hack.stateNode.towers[2].blastRadius = "999"
						hack.stateNode.towers[2].fullCd = "0"
					}
					if (hack.stateNode.towers[3] != null)
					{
						hack.stateNode.towers[3].damage = "9999"
						hack.stateNode.towers[3].range = "99999"
						hack.stateNode.towers[3].blastRadius = "999"
						hack.stateNode.towers[3].fullCd = "0"
					}
					if (hack.stateNode.towers[4] != null)
					{
						hack.stateNode.towers[4].damage = "9999"
						hack.stateNode.towers[4].range = "99999"
						hack.stateNode.towers[4].blastRadius = "999"
						hack.stateNode.towers[4].fullCd = "0"
					}
					if (hack.stateNode.towers[5] != null)
					{
						hack.stateNode.towers[5].damage = "9999"
						hack.stateNode.towers[5].range = "99999"
						hack.stateNode.towers[5].blastRadius = "999"
						hack.stateNode.towers[5].fullCd = "0"
					}
					if (hack.stateNode.towers[5] != null)
					{
						hack.stateNode.towers[5].damage = "9999"
						hack.stateNode.towers[5].range = "99999"
						hack.stateNode.towers[5].blastRadius = "999"
						hack.stateNode.towers[5].fullCd = "0"
					}
					if (hack.stateNode.towers[6] != null)
					{
						hack.stateNode.towers[6].damage = "9999"
						hack.stateNode.towers[6].range = "99999"
						hack.stateNode.towers[6].blastRadius = "999"
						hack.stateNode.towers[6].fullCd = "0"
					}
					if (hack.stateNode.towers[7] != null)
					{
						hack.stateNode.towers[7].damage = "9999"
						hack.stateNode.towers[7].range = "99999"
						hack.stateNode.towers[7].blastRadius = "999"
						hack.stateNode.towers[7].fullCd = "0"
					}
					if (hack.stateNode.towers[8] != null)
					{
						hack.stateNode.towers[8].damage = "9999"
						hack.stateNode.towers[8].range = "99999"
						hack.stateNode.towers[8].blastRadius = "999"
						hack.stateNode.towers[8].fullCd = "0"
					}
					if (hack.stateNode.towers[9] != null)
					{
						hack.stateNode.towers[9].damage = "9999"
						hack.stateNode.towers[9].range = "99999"
						hack.stateNode.towers[9].blastRadius = "999"
						hack.stateNode.towers[9].fullCd = "0"
					}
					if (hack.stateNode.towers[10] != null)
					{
						hack.stateNode.towers[10].damage = "9999"
						hack.stateNode.towers[10].range = "99999"
						hack.stateNode.towers[10].blastRadius = "999"
						hack.stateNode.towers[10].fullCd = "0"
					}
					if (hack.stateNode.towers[11] != null)
					{
						hack.stateNode.towers[11].damage = "9999"
						hack.stateNode.towers[11].range = "99999"
						hack.stateNode.towers[11].blastRadius = "999"
						hack.stateNode.towers[11].fullCd = "0"
					}
					if (hack.stateNode.towers[12] != null)
					{
						hack.stateNode.towers[12].damage = "9999"
						hack.stateNode.towers[12].range = "99999"
						hack.stateNode.towers[12].blastRadius = "999"
						hack.stateNode.towers[12].fullCd = "0"
					}
					if (hack.stateNode.towers[13] != null)
					{
						hack.stateNode.towers[13].damage = "9999"
						hack.stateNode.towers[13].range = "99999"
						hack.stateNode.towers[13].blastRadius = "999"
						hack.stateNode.towers[13].fullCd = "0"
					}
					if (hack.stateNode.towers[14] != null)
					{
						hack.stateNode.towers[14].damage = "9999"
						hack.stateNode.towers[14].range = "99999"
						hack.stateNode.towers[14].blastRadius = "999"
						hack.stateNode.towers[14].fullCd = "0"
					}
					if (hack.stateNode.towers[15] != null)
					{
						hack.stateNode.towers[15].damage = "9999"
						hack.stateNode.towers[15].range = "99999"
						hack.stateNode.towers[15].blastRadius = "999"
						hack.stateNode.towers[15].fullCd = "0"
					}
					if (hack.stateNode.towers[16] != null)
					{
						hack.stateNode.towers[16].damage = "9999"
						hack.stateNode.towers[16].range = "99999"
						hack.stateNode.towers[16].blastRadius = "999"
						hack.stateNode.towers[16].fullCd = "0"
					}
					if (hack.stateNode.towers[17] != null)
					{
						hack.stateNode.towers[17].damage = "9999"
						hack.stateNode.towers[17].range = "99999"
						hack.stateNode.towers[17].blastRadius = "999"
						hack.stateNode.towers[17].fullCd = "0"
					}
					if (hack.stateNode.towers[18] != null)
					{
						hack.stateNode.towers[18].damage = "9999"
						hack.stateNode.towers[18].range = "99999"
						hack.stateNode.towers[18].blastRadius = "999"
						hack.stateNode.towers[18].fullCd = "0"
					}
					if (hack.stateNode.towers[19] != null)
					{
						hack.stateNode.towers[19].damage = "9999"
						hack.stateNode.towers[19].range = "99999"
						hack.stateNode.towers[19].blastRadius = "999"
						hack.stateNode.towers[19].fullCd = "0"
					}
					if (hack.stateNode.towers[20] != null)
					{
						hack.stateNode.towers[20].damage = "9999"
						hack.stateNode.towers[20].range = "99999"
						hack.stateNode.towers[20].blastRadius = "999"
						hack.stateNode.towers[20].fullCd = "0"
					}
				})
				towersany.addEventListener('click', () =>
				{
					hack.stateNode.tiles[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					hack.stateNode.tiles[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					alert("You can now place Towers on any tile.")
				})
				break;
			case "race":
				const finish = document.getElementById("finish")
				finish.addEventListener('click', () =>
				{
					hack.stateNode.state.progress = hack.stateNode.state.goalAmount;
					alert("Get one question correct to finish the race.")
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
				esp.addEventListener('click', () =>
				{
					kingesp();
				})
				taxes.addEventListener('click', () =>
				{
					hack.stateNode.taxCounter = 99999;
					alert("Disabled the Tax Toucan")
				})
				setgold.addEventListener('click', () =>
				{
					hack.stateNode.state.gold = prompt("How much gold would you like?")
				})
				sethappy.addEventListener('click', () =>
				{
					hack.stateNode.state.happiness = prompt("How much happiness would you like?")
				})
				setmaterials.addEventListener('click', () =>
				{
					hack.stateNode.state.materials = prompt("How many materials would you like?")
				})
				setpeople.addEventListener('click', () =>
				{
					hack.stateNode.state.people = prompt("How many people would you like?")
				})
				max.addEventListener('click', () =>
				{
					hack.stateNode.state.gold = 100;
					hack.stateNode.state.people = 100;
					hack.stateNode.state.materials = 100;
					hack.stateNode.state.happiness = 100;
					alert("Maxed stats.")
				})
				setInterval(() =>
				{
					if (hack.stateNode.state.guest.no.spawn != null)
					{
						if (hack.stateNode.state.guest.no.spawn = "Dragon1")
						{
							let cf = confirm("Toucan detected, would you like to bypass it?")
							if (cf)
							{
								hack.stateNode.state.guest.no.spawn = null;
								alert("You can say No safely now.")
							}
						}
					}
					if (hack.stateNode.state.guest.blook == "Witch")
					{
						let cf = confirm("Witch detected, would you like to set the outcome of yes to gaining riches?")
						if (cf)
						{
							hack.stateNode.state.guest.yes.array[0] = {
								"msg": "Hmmmm... It looks like your future has plenty of riches.",
								"happiness": 10,
								"people": 10,
								"materials": 10,
								"gold": 15
							}
							hack.stateNode.state.guest.yes.array[1] = {
								"msg": "Hmmmm... It looks like your future has plenty of riches.",
								"happiness": 10,
								"people": 10,
								"materials": 10,
								"gold": 15
							}
							hack.stateNode.state.guest.yes.array[2] = {
								"msg": "Hmmmm... It looks like your future has plenty of riches.",
								"happiness": 10,
								"people": 10,
								"materials": 10,
								"gold": 15
							}
							alert("When you say yes you will gain:\nHappiness: 10\nPeople: 10\nMaterials: 10\nGold: 15")
						}
					}
				}, 500);
				break;
			case "doom":
				const lowstats = document.getElementById("lowstats")
				const settokens = document.getElementById("settokens")
				const maxstats = document.getElementById("maxstats")
				settokens.addEventListener('click', () =>
				{
					let coinhtml = document.querySelector(".styles__playerEnergy___2x0Fv-camelCase")
					let coin = hack.stateNode.state.coins;
					coin = prompt("How many coins would you like?")
					coinhtml.innerText = coin;
				})
				maxstats.addEventListener('click', () =>
				{
					let stat = document.querySelectorAll(".styles__innerPower___lZjG4-camelCase");
					let nums = document.querySelectorAll(".styles__powerBox___1CXx3-camelCase");
					hack.stateNode.state.myCard.charisma = 20;
					hack.stateNode.state.myCard.strength = 20;
					hack.stateNode.state.myCard.wisdom = 20;
					stat[0].style = 'background-color: rgb(151, 15, 5); width: 100%;'
					stat[1].style = 'background-color: rgb(7, 21, 93); width: 100%;'
					stat[2].style = 'background-color: rgb(148, 12, 128); width: 100%;'
					nums[0].innerText = hack.stateNode.state.myCard.strength;
					nums[1].innerText = hack.stateNode.state.myCard.charisma;
					nums[2].innerText = hack.stateNode.state.myCard.wisdom;
				})
				lowstats.addEventListener('click', () =>
				{
					hack.stateNode.state.enemyCard.charisma = 0;
					hack.stateNode.state.enemyCard.strength = 0;
					hack.stateNode.state.enemyCard.wisdom = 0;
					alert("Set enemy stats to 0")
				})
				break;
			case "factory":
				const mega = document.getElementById("mega")
				const setcash = document.getElementById("setcash")
				const ng = document.getElementById("ng")
				mega.addEventListener('click', () =>
				{
					let blook = hack.stateNode.state.blooks
					blook[0] = {
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
					blook[1] = {
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
					blook[2] = {
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
					blook[3] = {
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
					blook[4] = {
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
					blook[5] = {
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
					blook[6] = {
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
					blook[7] = {
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
					blook[8] = {
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
					blook[9] = {
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
				})
				setcash.addEventListener('click', () =>
				{
					hack.stateNode.state.cash = prompt("How much cash would you like?")
				})
				ng.addEventListener('click', () =>
				{
					hack.stateNode.state.dance = ""
					hack.stateNode.state.lol = ""
					hack.stateNode.state.joke = ""
					hack.stateNode.state.showTour = ""
					hack.stateNode.state.hazards = ["", "", "", "", ""]
					hack.stateNode.state.glitcherName = ""
					hack.stateNode.state.glitch = ""
					hack.stateNode.state.glitchMsg = ""
					hack.stateNode.state.glitcherBlook = ""
					alert("Attempted to remove glitches\n(Im to lazy to test if it works, so it it doesnt work\nopen a issue on github)")
				})
				break;
			case "fishing":
				const frenzy = document.getElementById("frenzy")
				const setweight = document.getElementById("setweight")
				const setlure = document.getElementById("setlure")
				frenzy.addEventListener('click', () =>
				{
					hack.stateNode.state.isFrenzy = true;
				})
				setweight.addEventListener('click', () =>
				{
					hack.stateNode.state.weight = prompt("How much weight would you like?")
				})
				setlure.addEventListener('click', () =>
				{
					hack.stateNode.state.lure = prompt("How much lure would you like (0-4)")
				})
				break;
			case "gold":
				const setgoldg = document.getElementById("setgold")
				const choiceesp = document.getElementById("choiceesp")
				setgoldg.addEventListener('click', () =>
				{
					hack.stateNode.state.gold = prompt("How much gold would you like?")
				})
				choiceesp.addEventListener('click', () =>
				{
					goldesp()
				})
				break;
		}
	}
}

function kingesp()
{
	function ChoiceUII()
	{
		let element = document.createElement('div');
		element.innerHTML = `<div id="espp"><style>details>summary{cursor:pointer;transition:1s;list-style:circle}.button{font-size:1rem}</style><div style="padding-top:2px;font-size:1.5rem;text-align:center">Choice ESP</div><br><details open><summary style="padding:10px;font-size:1.5em;font-weight:bolder">Yes:</summary><div id="c1h" class="button"></div><div id="c1p" class="button"></div><div id="c1g" class="button"></div><div id="c1m" class="button"></div></details><details open><summary style="padding:10px;font-size:1.5em;font-weight:bolder">No:</summary><div id="c2h" class="button"></div><div id="c2p" class="button"></div><div id="c2g" class="button"></div><div id="c2m" class="button"></div></details><br><button id="close" style="width:130px;height:30px;cursor:pointer;background:#333;border-radius:22px;border:none;font-size:1rem"><b>Close ESP</b></button><br><div style="font-size:.8rem">ui by <a href="https://github.com/ZasticBradyn">zastix</a></div></div>`;
		element.style = `width: 200px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
		document.body.appendChild(element);
		var pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;
		element.onmousedown = ((e = window.event) =>
		{
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = (() =>
			{
				document.onmouseup = null;
				document.onmousemove = null;
			});
			document.onmousemove = ((e) =>
			{
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

	function closeui()
	{
		const esp = document.getElementById("espp")
		esp.remove();
	}

	function addUtils()
	{
		const exit = document.getElementById("close")
		exit.addEventListener('click', closeui);
	}
	ChoiceUII()
	addUtils()

	function updateChoices()
	{
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

		function updateNo()
		{
			if (no.happiness != null)
			{
				c2happy.innerHTML = `Happiness: ${no.happiness}`
			}
			else
			{
				c2happy.innerHTML = null;
			}
			if (no.people != null)
			{
				c2people.innerHTML = `People: ${yes.people}`
			}
			else
			{
				c2people.innerHTML = null;
			}
			if (no.gold != null)
			{
				c2gold.innerHTML = `Gold: ${no.gold}`
			}
			else
			{
				c2gold.innerHTML = null;
			}
			if (no.materials != null)
			{
				c2mats.innerHTML = `Materials: ${no.materials}`
			}
			else
			{
				c2mats.innerHTML = null;
			}
		}

		function updateYes()
		{
			if (yes.happiness != null)
			{
				c1happy.innerHTML = `Happiness: ${yes.happiness}`
			}
			else
			{
				c1happy.innerHTML = null;
			}
			if (yes.people != null)
			{
				c1people.innerHTML = `People: ${yes.people}`
			}
			else
			{
				c1people.innerHTML = null;
			}
			if (yes.gold != null)
			{
				c1gold.innerHTML = `Gold: ${yes.gold}`
			}
			else
			{
				c1gold.innerHTML = null;
			}
			if (yes.materials != null)
			{
				c1mats.innerHTML = `Materials: ${yes.materials}`
			}
			else
			{
				c1mats.innerHTML = null;
			}
		}
	}
	setInterval(() =>
	{
		const esp = document.getElementById("espp")
		if (esp != null)
		{
			updateChoices();
		}
	}, 500);
}

function goldesp()
{
	function ChoiceUI()
	{
		let element = document.createElement('div');
		element.innerHTML = `<div id="esp"> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">Choice ESP</div><div id="c1" style="font-size: 1rem;">Choice 1:</div><div id="c2">Choice 2:</div><div id="c3">Choice 3:</div><br><button id="close" style="width: 130px; height: 30px; cursor: pointer; background: hsl(0, 0%, 20%); border-radius: 22px; border: none; font-size: 1rem;"><b>Close ESP</b></button><br><br><div style="font-size: 0.8rem;">ui by <a href="https://github.com/ZasticBradyn">zastix</a></div></div>`;
		element.style = `width: 200px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;`;
		document.body.appendChild(element);
		var pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;
		element.onmousedown = ((e = window.event) =>
		{
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = (() =>
			{
				document.onmouseup = null;
				document.onmousemove = null;
			});
			document.onmousemove = ((e) =>
			{
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

	function closeui()
	{
		const esp = document.getElementById("esp")
		esp.remove();
	}

	function addUtilss()
	{
		const exit = document.getElementById("close")
		exit.addEventListener('click', closeui);
	}
	ChoiceUI()
	addUtilss()

	function updateChoicess()
	{
		let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner
		const choice = hack.stateNode.state.choices
		const c1 = document.getElementById("c1")
		const c2 = document.getElementById("c2")
		const c3 = document.getElementById("c3")
		c1.innerHTML = "Choice 1: " + choice[0].text
		c2.innerHTML = "Choice 2: " + choice[1].text
		c3.innerHTML = "Choice 3: " + choice[2].text
	}
	setInterval(() =>
	{
		updateChoicess();
	}, 500);
}

function addUtils()
{
	handelData("elements");
	addListeners()
	CheckGame();
}
addUtils();
setInterval(() =>
{
	CheckGame();
}, 10000);
alert("This GUI is coded by zastix");
