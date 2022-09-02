// 캔버스 부르기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 캔버스 크기 조정
canvas.width = 800;
canvas.height = 800;
lineWidth = 2;

const colors = [
    "#f03e3e",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14"];

let x_coord = 0;
let y_coord = 0;

function onClick(event) {
    x_coord = event.offsetX;
    y_coord = event.offsetY;
}

function onMousemove (event) {
    ctx.beginPath();
    ctx.moveTo(x_coord, y_coord);
    const strokeColor = colors[Math.floor(Math.random() * colors.length)]
    ctx.strokeStyle = strokeColor;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

addEventListener("mousemove", onMousemove);
addEventListener("click", onClick);
