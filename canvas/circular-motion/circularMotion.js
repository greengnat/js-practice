
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colorsArray = ["#468189", "#EC058E", "#031926", "#241E4E", "#FB8B24"]

// utility functs
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}





// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
class Particle {
    constructor(x, y, radius, color) {
        this.x = x
        this.originX = x
        this.y = y
        this.originY = y
        this.radius = radius
        this.color = color
        this.radians = Math.random() * Math.PI * 2 // move points over time
        this.velocity = 0.05
        this.distanceFromCenter = randomIntFromRange(50, 120)
        this.lastMouse = { x: x, y: y }
    }




    draw(lastPoint) {
        c.beginPath()
        c.strokeStyle = this.color
        c.lineWidth = this.radius
        c.moveTo(lastPoint.x, lastPoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        c.closePath()
    }

    update() {
        const lastPoint = { x: this.x, y: this.y }
        // move points over time
        this.radians += this.velocity;
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05     //drag effect
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter; //circular motion
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint)


        // original location  
    }
}

// Implementation
let particles;
function init() {
    particles = []

    for (let i = 0; i < 60; i++) {
        const color = randomColor(colorsArray)
        const radius = (Math.random() * 2) + 1
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, color))
    }
}


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'rgba(255, 255, 255, 0.05)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    particles.forEach(particle => {
        particle.update()
    })
}

init()
animate()


