// Canvas
const { body } = document
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
const width = 500
const height = 700
const screenWixdth = window.screen.width
const canvasPosition = screenWixdth / 2 - width / 2
const isMobile = window.matchMedia('(max-width: 600px)')
const gameOVerEl = document.createElement('div')

// Paddle
const paddleHeight = 10
const paddleWidth = 50
const paddleDiff = 25
let paddleBottomX = 225
let paddleTopX = 225
let playerMoved = false
let paddleContact = false

// Ball
let ballX = 250
let ballY = 350
const ballRadius = 5

// Speed
let speedY
let speedX
let trajectoryX
let computerSpeed

// Change mobile settings
if (isMobile.matches) {
  speedY = -2
  speedX = speedY
  computerSpeed = 4
} else {
  speedY = -1
  speedX = speedY
}

function renderCanvas() {}

// Create Canvas Element
function createCanvas() {
  canvas.width = width
  canvas.height = height
  body.appendChild(canvas)
  renderCanvas()
}

createCanvas()
