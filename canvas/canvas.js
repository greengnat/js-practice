let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
let m = Math.random() * 100;
let r = Math.random() * 1000;

function randomColor(lor = "") {
    return '#' + (function co(lor) {
        return (lor +=
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)])
            && (lor.length == 6) ? lor : co(lor);
    })('');
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c.fillStyle = randomColor();
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.1)';
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.1)';
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = 'rgba(255, 30, 100, 0.6)';
// c.fillRect(500, 800, 100, 100);

// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(m, m);
// c.strokeStyle = "green";
// c.stroke();

// c.beginPath();
// c.moveTo(60, 400);
// c.lineTo(300, 100);
// c.strokeStyle = "red";
// c.stroke();

// c.beginPath();
// c.moveTo(70, 500);
// c.strokeStyle = "#ae4973";
// c.lineTo(r, m);
// c.moveTo(350, 200);
// c.strokeStyle = "#cyan";
// c.lineTo(m, m);
// c.strokeStyle = "#fe34a3";
// c.lineTo(100, 400);
// c.strokeStyle = "#fe34a3";
// c.stroke();
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = 'blue';
// // c.stroke();

// for (let i = 0; i < m; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = randomColor();
//     c.stroke();
// }

function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = randomColor();
        c.stroke();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();

    }
}

let circle = new Circle(200, 200, (Math.random() * 50), (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);


let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 10;
let radius = Math.random() * 50;


function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = randomColor();
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;

    // circle.draw();
    circle.update();
}

animate();