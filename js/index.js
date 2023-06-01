const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const PlayerImg = new Image();
PlayerImg.src = "./img/img2.png";
PlayerImg.height = 32;
const tileSize = 32;
let x = canvas.width / 2;
let y = canvas.height / 2;
let keyStatus = "stop";

document.addEventListener('keypress', (el) => {
	console.log(el.code);
	switch (el.code) {
		case 'KeyW':
			keyStatus = "up";
			break;
		case 'KeyS':
			keyStatus = "down";
			break;
		case 'KeyA':
			keyStatus = "left";
			break;
		case 'KeyD':
			keyStatus = "right";
			break;

	}

})

document.addEventListener('keyup', () => {
	keyStatus = "stop";
})


function updateCoord() {
	switch (keyStatus) {
		case 'up':
			y -= tileSize;
			break;
		case 'down':
			y += tileSize;
			break;
		case 'left':
			x -= tileSize;
			break;
		case 'right':
			x += tileSize;
			break;

	}
}

console.log(PlayerImg);

function drawImg() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	updateCoord();
	ctx.drawImage(PlayerImg, x, y, tileSize, tileSize);

}
let dr = setInterval(drawImg, 100);