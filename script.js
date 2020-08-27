window.onload = function () {
	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	counter = 0;
	marginLeftImage = 1;
	canvas.height = canvas.offsetHeight;
	canvas.width = canvas.offsetWidth;
	canvas.width = 500;
	canvas.height = 200;
	window.addEventListener('keypress', function (event) {
		if (event.keyCode == 32) {
			counter++;
			ctx.font = "10px Verdana";
			ctx.fillText(counter, 10, 18);
		}
	});
	window.addEventListener('keydown', function (event) {
		if (event.keyCode == 32) {
			ctx.clearRect(0, 0, 50, 50);
		}
	});
	let playerImage = new Image();
	playerImage2 = new Image();
	playerImage3 = new Image();
	playerImage4 = new Image();
	playerImage5 = new Image();
	playerImage6 = new Image();
	playerImage7 = new Image();
	playerImage8 = new Image();
	playerImage9 = new Image();
	playerImage10 = new Image();
	playerImage11 = new Image();
	playerImage12 = new Image();
	playerImage.src = "PlayerImage/Player.png";
	playerImage2.src = "PlayerImage/Player2.png";
	playerImage3.src = "PlayerImage/Player3.png";
	playerImage4.src = "PlayerImage/Player4.png";
	playerImage5.src = "PlayerImage/Player5.png";
	playerImage6.src = "PlayerImage/Player6.png";
	playerImage7.src = "PlayerImage/Player7.png";
	playerImage8.src = "PlayerImage/Player8.png";
	playerImage9.src = "PlayerImage/Player9.png";
	playerImage10.src = "PlayerImage/Player10.png";
	playerImage11.src = "PlayerImage/Player11.png";
	playerImage12.src = "PlayerImage/Player12.png";
	massiveImage = [playerImage, playerImage2, playerImage3, playerImage4, playerImage5, playerImage6];
	massiveImage1 = [playerImage7, playerImage8, playerImage9, playerImage10, playerImage11, playerImage12];
	massiveIndex = 0;
	massiveIndex1 = 0;
	function onloadImage(image) {
		ctx.drawImage(image, 20, 20);
	}
	playerImage.onload = onloadImage(playerImage);
	ctx.fillStyle = "green";
	ctx.fillRect(0, 170, canvas.width, 30)
	window.addEventListener('keydown', function (event) {
		if (event.keyCode == 37) {
			//37==left
			if (massiveIndex1 < 6) {
				ctx.clearRect(0, 18, canvas.width, 152);
				ctx.drawImage(massiveImage1[massiveIndex1], 20 + marginLeftImage, 20);
				massiveIndex1++;
			}
			else {
				massiveIndex1 = massiveIndex1 - 6;
				ctx.clearRect(0, 18, canvas.width, 152);
				ctx.drawImage(massiveImage1[0], 20 + marginLeftImage, 20);
				massiveIndex1++;
			}
			marginLeftImage = marginLeftImage - 4;
		}
	});
	window.addEventListener('keydown', function (event) {
		if (event.keyCode == 38) {
			//38==up
		}
	});
	window.addEventListener('keydown', function (event) {
		if (event.keyCode == 39) {
			//39==right
			if (massiveIndex < 6) {
				ctx.clearRect(0, 18, canvas.width, 152);
				ctx.drawImage(massiveImage[massiveIndex], 20 + marginLeftImage, 20);
				massiveIndex++;
			}
			else {
				massiveIndex = massiveIndex - 6;
				ctx.clearRect(0, 18, canvas.width, 152);
				ctx.drawImage(massiveImage[0], 20 + marginLeftImage, 20);
				massiveIndex++;
			}
			marginLeftImage = marginLeftImage + 4;
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			//ctx.drawImage(playerImage,20+marginLeftImage,20);
			//marginLeftImage++;
		}
	});
	window.addEventListener('keydown', function (event) {
		if (event.keyCode == 40) {
			//40==down
		}
	});
}




















//37==left
//38==up
//39==right
//40==down
