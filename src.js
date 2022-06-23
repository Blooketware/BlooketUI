// Currently fully coded by zastix

let onlyloop;

// Iframe bypass
frame = document.createElement('iframe')
frame.style.width = '0px'
frame.style.height = '0px'
frame.style.display = 'none'
frame.id = 'iframebypass'
document.head.append(frame)
window.alert = frame.contentWindow.alert
window.prompt = frame.contentWindow.prompt
window.confirm = frame.contentWindow.confirm

// Main div
maingui = document.createElement('div')
maingui.id = 'GUI'
maingui.style.width = '350px'
maingui.style.background = 'rgb(64, 64, 64)'
maingui.style.borderRadius = '8px'
maingui.style.position = 'absolute'
maingui.style.textAlign = 'center'
maingui.style.fontFamily = 'Nunito'
maingui.style.color = 'white'
maingui.style.top = '5%'
maingui.style.left = '40%'
maingui.style.overflow = 'hidden'

/// Make Main Div Draggable
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
GUI.onmousedown = ((e = window.event) => {
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
        GUI.style.top = (GUI.offsetTop - pos2) + "px";
        GUI.style.left = (GUI.offsetLeft - pos1) + "px";
    });
});

// CSS styling
style = document.createElement('style')
style.innerHTML = `
    details > summary {
        cursor: pointer;
        transition: 1s;
        list-style: circle;
    }
    
    .hack {
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
    
    .hack:hover {
        background: hsl(0, 1%, 31%);
    }`

//Button and Title Div
buttonsDiv = document.createElement('div')
buttonsDiv.style.cursor = 'all-scroll'
buttonsDiv.style.paddingTop = '2px'
buttonsDiv.style.fontSize = '1.5rem'
buttonsDiv.style.textAlign = 'center'
buttonsDiv.innerText = 'BlooketUI'

// Close Button
closeBtn = document.createElement('button')
closeBtn.style.background = 'black'
closeBtn.style.height = '45px'
closeBtn.style.width = '45px'
closeBtn.style.border = 'none'
closeBtn.style.cursor = 'pointer'
closeBtn.style.position = 'absolute'
closeBtn.style.top = '-10px'
closeBtn.style.right = '-10px'
closeBtn.style.fontSize = '1.5rem'
closeBtn.style.borderRadius = '10px'
closeBtn.style.fontFamily = 'Nunito'
closeBtn.style.fontWeight = 'bolder'
closeBtn.style.paddingTop = '10px'
closeBtn.style.paddingRight = '15px'
closeBtn.style.color = 'white'
closeBtn.innerText = 'X'
closeBtn.onclick = () => {
    GUI.remove();
    clearInterval(onlyloop);
}

// Minus Button
minusBtn = document.createElement('button')
minusBtn.style.background = 'black'
minusBtn.style.height = '45px'
minusBtn.style.width = '45px'
minusBtn.style.border = 'none'
minusBtn.style.cursor = 'pointer'
minusBtn.style.position = 'absolute'
minusBtn.style.top = '-10px'
minusBtn.style.right = '90%'
minusBtn.style.fontSize = '2.5rem'
minusBtn.style.borderRadius = '10px'
minusBtn.style.fontFamily = 'Nunito'
minusBtn.style.fontWeight = 'bolder'
minusBtn.style.paddingTop = '10px'
minusBtn.style.paddingRight = '-15px'
minusBtn.style.color = 'white'
minusBtn.innerText = '-'

// Body Div
bodyDiv = document.createElement('div')
bodyDiv.style.display = 'block'
bodyDiv.style.margin = '10px'
bodyDiv.style.minHeight = '70px'
body.innerHTML = (`<span id="curPageEl">no game detected</span><br><span>(press e to hide)</span><br>`);

// Global Div
gbal = document.createElement('details');
gbal.innerHTML = (`<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>`);

// Cheat Div
cheatDiv = document.createElement('div');

// Footer Div
footer = document.createElement('div');
footer.style.fontSize = '0.9rem';
footer.style.paddingBottom = '5px';
footer.innerHTML = (`Open source on <a href="https://github.com/Blooketware/BlooketUI">GitHub</a><br>V2 Coded by <a href='https://github.com/notzastix'>zastix</a>`);

// React Event Handler
function reactEventHandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
}

// Firebase Handler
function firebaseHandler() {
    return reactEventHandler().memoizedProps.firebase
}

// Cheats
cheats = {
    rush: {
        'Set Defense': async () => {
            firebaseHandler().setVal({
                id: reactEventHandler().stateNode.props.client.hostId,
                path: 'c/' + reactEventHandler().stateNode.props.client.name + '/d',
                val: Number(prompt('How much defense do you want?'))
            });
        },
        'Set Blooks': async () => {
            firebaseHandler().setVal({
                id: reactEventHandler().stateNode.props.client.hostId,
                path: 'c/' + reactEventHandler().stateNode.props.client.name + '/bs',
                val: Number(prompt('How many blooks do you want?'))
            });
        },
        'Reset Player\'s Blooks ': async () => {
            e = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            wait = ms => new Promise(r => setTimeout(r, ms));
            target = prompt('Who would you like to reset?')
            oldbs = e.stateNode.state.numBlooks
            firebaseHandler().getDatabaseVal(e.stateNode.props.client.hostId, "c", async (players) => {
                if (Object.keys(players).includes(target)) {
                    target2 = players[target]
                    for (i = 0; i < (target2.bs + target2.d + 4); i++) {
                        await wait(1500)
                        firebaseHandler().setVal({
                            id: e.stateNode.props.client.hostId,
                            path: 'c/' + e.stateNode.props.client.name + '/tat',
                            val: target
                        });
                        firebaseHandler().setVal({
                            id: e.stateNode.props.client.hostId,
                            path: 'c/' + e.stateNode.props.client.name + '/bs',
                            val: oldbs
                        });
                    }
                }
            })
        }
    }
}