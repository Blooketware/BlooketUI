// Currently fully coded by zastix
let onlyloop;
$ = jQuery;

// iframe bypass
frame = document.createElement("iframe");
frame.style.width = "0px";
frame.style.height = "0px";
frame.style.display = "none";
frame.id = "iframebypass";
document.head.append(frame);
window.alert = frame.contentWindow.alert;
window.prompt = frame.contentWindow.prompt;
window.confirm = frame.contentWindow.confirm;

// CSS styling
style = document.createElement("style");
style.innerHTML = (`
    details > summary {
        cursor: pointer;
        transition: 1s;
        list-style: circle;
    }
    
    .cheat {
        border: none;
        background: hsl(0, 0%, 20%);
        padding: 7px;
        margin: 5px;
        width: 70%;
        color: white;
        transition: 0.1s;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .cheat:hover {
        background: hsl(0, 1%, 31%);
    }`);

// Main div
maingui = document.createElement("div");
maingui.appendChild(style);
maingui.id = "GUI";
maingui.style.width = "350px";
maingui.style.background = "rgb(64, 64, 64)";
maingui.style.borderRadius = "8px";
maingui.style.position = "absolute";
maingui.style.textAlign = "center";
maingui.style.fontFamily = "Nunito";
maingui.style.color = "white";
maingui.style.top = "5%";
maingui.style.left = "40%";
maingui.style.overflow = "hidden";


/// Make Main Div Draggable
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
maingui.onmousedown = ((e = window.event) => {
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
        maingui.style.top = (maingui.offsetTop - pos2) + "px";
        maingui.style.left = (maingui.offsetLeft - pos1) + "px";
    });
});

//Button and Title Div
buttonsDiv = document.createElement("div");
buttonsDiv.style.cursor = "all-scroll";
buttonsDiv.style.paddingTop = "2px";
buttonsDiv.style.fontSize = "1.5rem";
buttonsDiv.style.textAlign = "center";
buttonsDiv.innerText = "BlooketUI";
maingui.appendChild(buttonsDiv);

// Close Button
closeBtn = document.createElement("button");
closeBtn.style.background = "black";
closeBtn.style.height = "45px";
closeBtn.style.width = "45px";
closeBtn.style.border = "none";
closeBtn.style.cursor = "pointer";
closeBtn.style.position = "absolute";
closeBtn.style.top = "-10px";
closeBtn.style.right = "-10px";
closeBtn.style.fontSize = "1.5rem";
closeBtn.style.borderRadius = "10px"
closeBtn.style.fontFamily = "Nunito";
closeBtn.style.fontWeight = "bolder";
closeBtn.style.paddingTop = "10px";
closeBtn.style.paddingRight = "15px";
closeBtn.style.color = "white";
closeBtn.innerText = "X";
closeBtn.onclick = () => {
    GUI.remove();
    clearInterval(onlyloop);
    delete utils;
    delete cheats;
}
maingui.appendChild(closeBtn);

// Minus Button
minusBtn = document.createElement("button");
minusBtn.style.background = "black";
minusBtn.style.height = "45px";
minusBtn.style.width = "45px";
minusBtn.style.border = "none";
minusBtn.style.cursor = "pointer";
minusBtn.style.position = "absolute";
minusBtn.style.top = "-10px";
minusBtn.style.right = "90%";
minusBtn.style.fontSize = "2.5rem";
minusBtn.style.borderRadius = "10px";
minusBtn.style.fontFamily = "Nunito";
minusBtn.style.fontWeight = "bolder";
minusBtn.style.paddingTop = "10px";
minusBtn.style.paddingRight = "-15px";
minusBtn.style.color = "white";
minusBtn.innerText = "-";
maingui.appendChild(minusBtn);

// Body Div
bodyDiv = document.createElement("div");
bodyDiv.style.display = "block";
bodyDiv.style.margin = "10px";
bodyDiv.style.minHeight = "20px";
bodyDiv.innerHTML = (`<span id="curPageEl">no game detected</span><br><span>(press e to hide)</span>`);
maingui.appendChild(bodyDiv);

// Global Div
gbal = document.createElement("details");
gbal.innerHTML = (`<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>`);
maingui.appendChild(gbal);

// Cheat Div
cheatDiv = document.createElement("div");
maingui.appendChild(cheatDiv);

// Footer Div
footer = document.createElement("div");
footer.style.fontSize = "0.9rem";
footer.style.paddingBottom = "5px";
footer.innerHTML = (`Open source on <a href="https://github.com/Blooketware/BlooketUI/tree/v2">GitHub</a><br>V2 Coded by <a href="https://github.com/notzastix">zastix</a>`);
maingui.appendChild(footer);


// utits credits to gliz for 99% of these functions
utils = {
    getValues: () => new Promise((e, t) => {
        try {
            let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
            e({
                blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
            });
        } catch {
            t("Could not fetch auth details");
        }
    }),
    firebaseHandler: () => {
        return reactEventHandler().memoizedProps.firebase;
    },
    reactHandler: () => {
        return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;
    },
    encodeValues: async (e, t) => {
        let d = window.crypto.getRandomValues(new Uint8Array(12));
        return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: d
        }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
            name: "AES-GCM"
        }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
    },
    sleep: (time) => new Promise(resolve => setTimeout(resolve, time)),
    getUserData: () => new Promise(async(resolve, reject) => {
        try {
            response = await fetch('https://api.blooket.com/api/users/verify-session', {
                method: "GET",
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                },
                credentials: "include"
            });
            resolve(response.json());
        } catch {
            reject("Could not fetch user data");
        }
    }),
    createButton: (cheat) => {
        let button = document.createElement('button');
        button.classList.add('cheat');
        button.innerText = cheat;
        return button;
    }
}

// Cheats
cheats = {
    rush: {
        "Set Defense": async () => {
            utils.firebaseHandler().setVal({
                id: reactEventHandler().stateNode.props.client.hostId,
                path: "c/" + reactEventHandler().stateNode.props.client.name + "/d",
                val: Number.parseInt(prompt("How much defense do you want?"))
            });
        },
        "Set Blooks": async () => {
            utils.firebaseHandler().setVal({
                id: reactEventHandler().stateNode.props.client.hostId,
                path: "c/" + reactEventHandler().stateNode.props.client.name + "/bs",
                val: Number.parseInt(prompt("How many blooks do you want?"))
            });
        },
        "Reset Player's Blooks ": async () => {
            e = utils.reactEventHandler();
            wait = ms => new Promise(r => setTimeout(r, ms));
            target = prompt("Who would you like to reset?")
            oldbs = e.stateNode.state.numBlooks
            utils.firebaseHandler().getDatabaseVal(e.stateNode.props.client.hostId, "c", async (players) => {
                if (Object.keys(players).includes(target)) {
                    for (i = 0; i < (layers[target].bs + layers[target].d + 4); i++) {
                        await wait(1500);
                        [bs, tat].forEach(thing => {
                            firebaseHandler().setVal({
                                id: e.stateNode.props.client.hostId,
                                path: "c/" + e.stateNode.props.client.name + `/${thing}`,
                                val: target
                            });
                        });
                    }
                }
            });
        }
    },
    global: {
        "Spam Open Boxes": async () => {

        }
    }
}

Object.keys(cheats.global).forEach(cheatName => {
    btn = utils.createButton(cheats.global[cheatName]);
    btn.onclick = () => {
        cheats.global[cheatName]();
    }
    gbal.appendChild(btn);
})

document.body.append(maingui);
alert('BlooketUIV2 developed by zastix');