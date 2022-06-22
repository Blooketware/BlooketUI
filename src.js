let loop;

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
            clearInterval(loop);
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
body.innerHTML = (`<span id="curPageEl">${getSite(true) ? `current gamemode: ${getSite(true)}` : 'no game detected'}</span><br><span>(press e to hide)</span><br>`);





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