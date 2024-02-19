// makes html5 canvases fullscreen.
//made by dumo178 licensed under the unlicense.
var style = document.createElement("style");
style.innerHTML = `
            canvas {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `;
document.head.appendChild(style);
