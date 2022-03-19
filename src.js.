function start()
{
	loadGUI();
	addUtils();
}

function loadGUI()
{
	//code to insert gui (by gliz so i removed it)
}
start();
async function debuggerHelp()
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
		//gliz code
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
			//gliz code
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
		//gliz code
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
		//gliz code
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
		//gliz code
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
		//gliz code
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
		//gliz code
		if ( //gliz code == "online")
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
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/play/fishing":
					type = "fishing";
					mode = "Fishing Frenzy"
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/play/gold":
					type = "gold";
					mode = "Gold Quest"
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/play/factory":
					type = "factory";
					mode = "Factory";
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/play/hack":
					type = "crypto";
					mode = "Crypto-Hack"
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/kingdom":
					type = "kingdom";
					mode = "Crazy Kingdom"
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/tower/map":
					type = "doom"
					mode = "Tower of Doom"
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/tower/battle":
					type = "doom"
					mode = "Tower of Doom"
					//gliz code
					loadgame(type, html, mode)
					break;
				case "/defense":
					type = "defense";
					mode = "Tower Defense"
					//gliz code
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
				//gliz code
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
				//gliz code
				switch (type)
				{
					case "crypto":
						const set = document.getElementById("set")
						const esp2 = document.getElementById("esp")
						set.addEventListener('click', () =>
						{
							//gliz code
						})
						esp2.addEventListener('click', () =>
						{
							//gliz code
						})
						break;
					case "defense":
						//gliz code
						break;
					case "race":
						//gliz code
						break;
					case "kingdom":
						//gliz code
						break;
					case "doom":
						const lowstats = document.getElementById("lowstats")
						const settokens = document.getElementById("settokens")
						const maxstats = document.getElementById("maxstats")
						settokens.addEventListener('click', () =>
						{
							//gliz code
						})
						maxstats.addEventListener('click', () =>
						{
							//gliz code
						})
						lowstats.addEventListener('click', () =>
						{
							//gliz code
						})
						break;
					case "factory":
						const mega = document.getElementById("mega")
						const setcash = document.getElementById("setcash")
						const ng = document.getElementById("ng")
						mega.addEventListener('click', () =>
						{
							//gliz code
						})
						setcash.addEventListener('click', () =>
						{
							//gliz code
						})
						ng.addEventListener('click', () =>
						{
							//gliz code
						})
						break;
					case "fishing":
						const frenzy = document.getElementById("frenzy")
						const setweight = document.getElementById("setweight")
						const setlure = document.getElementById("setlure")
						frenzy.addEventListener('click', () =>
						{
							//gliz code
						})
						setweight.addEventListener('click', () =>
						{
							//gliz code
						})
						setlure.addEventListener('click', () =>
						{
							//gliz code
						})
						break;
					case "gold":
						const setgoldg = document.getElementById("setgold")
						const choiceesp = document.getElementById("choiceesp")
						setgoldg.addEventListener('click', () =>
						{
							//gliz code
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
				//gliz code
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
				//gliz code
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
				//gliz code
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
				//gliz code
				const choice = hack.stateNode.state.choices
				const c1 = document.getElementById("c1")
				const c2 = document.getElementById("c2")
				const c3 = document.getElementById("c3")
				//gliz code
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
