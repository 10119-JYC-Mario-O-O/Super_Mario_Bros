let Start = true;
let Pause = true;
let canvas;
let ctx;
let sfx = 0;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 896;
canvas.height = 504;
document.body.appendChild(canvas);
let BG, W, H1, H2, H3, H4, B0_1, B0_2, B1, B2, B3, B4, B5, F1, F2, F3, F4, T, G;
let is_A_press = false;
let T1P = 1;
let T1X = 229;
let ClapFrame1 = 0;
let T2P = 1;
let ClapFrame2 = 0;
let T2X = 397;
let T3P = 1;
let T3PNeed = 1;
let ClapFrame = 0;
let T3X = 565;
let TriosY = 268;

let Trio1Clap = [1, 49];
let Trio2Clap = [2, 50];
let Trio3Clap = [3, 51];
					
console.log("The Console");

function loadAudio(){
	Title_music = new Audio();
    Title_music.src = "audios/Title_music.mp3";
	Title_music.volume = 0.75;
	Clap1 = new Audio();
    Clap1.src = "audios/Clap (1).wav";
	Clap1.volume = 1;
	Clap2 = new Audio();
    Clap2.src = "audios/Clap (2).wav";
	Clap2.volume = 1;
	Clap3 = new Audio();
    Clap3.src = "audios/Clap (3).wav";
	Clap3.volume = 1;
}

function loadImage() {
	BG = new Image();
    BG.src = "images/BG.png";
	W = new Image();
    W.src = "images/W.png";
	H1 = new Image();
    H1.src = "images/H1.png";
	H2 = new Image();
    H2.src = "images/H2.png";
	H3 = new Image();
    H3.src = "images/H3.png";
	H4 = new Image();
    H4.src = "images/H4.png";
	B0_1 = new Image();
    B0_1.src = "images/B0_1.png";
	B0_2 = new Image();
    B0_2.src = "images/B0_2.png";
	B1 = new Image();
    B1.src = "images/B1.png";
	B2 = new Image();
    B2.src = "images/B2.png";
	B3 = new Image();
    B3.src = "images/B3.png";
	B4 = new Image();
    B4.src = "images/B4.png";
	B5 = new Image();
    B5.src = "images/B5.png";
	F1 = new Image();
    F1.src = "images/F1.png";
	F2 = new Image();
    F2.src = "images/F2.png";
	F3 = new Image();
    F3.src = "images/F3.png";
	F4 = new Image();
    F4.src = "images/F4.png";
	T = new Image();
    T.src = "images/T.png";
	G = new Image();
    G.src = "images/G.png";
}
	
let keysDown = {};
function setKeyboardListener() {
    document.addEventListener("keydown", function (event) {
        keysDown[event.keyCode] = true;
    });
    document.addEventListener("keyup", function (event) {
        delete keysDown[event.keyCode];

		if(event.keyCode == 13){
			Start = false;
			T3P = T3PNeed;
		}

		if(event.keyCode == 74){
			is_A_press = false;
		}

		if(event.keyCode == 49){
			console.log("1, ", Title_music.currentTime);
		}
		if(event.keyCode == 50){
			console.log("2, ", Title_music.currentTime);
		
		}
		if(event.keyCode == 51){
			console.log("3, ", Title_music.currentTime);
		}
		//console.log(event.keyCode);
    });
}

function update() {
    if(74 in keysDown){
		if(!is_A_press){
			T3P = 2;
		}
		
        is_A_press = true;		
	}

	//for(let i = 0; i < Trio1Clap.length; i++){
		//if(Title_music.currentTime == i){
			//T1P = 2;
		//}
	//}

	//for(let i = 0; i < Trio2Clap.length; i++){
		//if(Title_music.currentTime == i){
			//T2P = 2;
		//}
	//}

	if(T1P >= 2 && T1P <= 3){
		ClapFrame1++;

	if(ClapFrame >= 5){
		T1P++;
		ClapFrame1 = 0;
	}
	
	if(T2P >= 2 && T2P <= 3){
		ClapFrame2++;

	if(ClapFrame >= 5){
		T2P++;
		ClapFrame2 = 0;
	}

	if(T3P >= 2 && T3P <= 3){
		ClapFrame++;

		if(ClapFrame >= 5){
			T3P++;
			ClapFrame = 0;
		}
	}

	//T1P = T3P;
	//T2P = T3P;
}

function Trio1() {
    if(T1P == 1) {
		ctx.drawImage(G, T1X + 7, TriosY + 136);
		ctx.drawImage(F4, T1X + 19, TriosY + 118);
		ctx.drawImage(B0_1, T1X - 4, TriosY + 64);
		ctx.drawImage(H1, T1X + 13, TriosY + 46);
		ctx.drawImage(W, T1X, TriosY + 14);
		ctx.drawImage(B1, T1X - 4, TriosY + 64);
	}
	if(T1P == 2) {
		Clap1.pause();
		Clap1.currentTime == 0;
		Clap1.play();
		
		ctx.drawImage(G, T1X + 7, TriosY + 136);
		ctx.drawImage(F1, T1X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T1X + 8, TriosY + 4);
		ctx.drawImage(H3, T1X + 13, TriosY + 32);
		ctx.drawImage(W, T1X, TriosY);
		ctx.drawImage(B3, T1X + 8, TriosY - 30);
	}
	if(T1P == 3) {
		ctx.drawImage(G, T1X + 7, TriosY + 136);
		ctx.drawImage(F1, T1X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T1X + 8, TriosY + 4);
		ctx.drawImage(H3, T1X + 13, TriosY + 32);
		ctx.drawImage(W, T1X, TriosY);
		ctx.drawImage(B4, T1X + 8, TriosY - 18);
	}
	if(T1P == 4) {
		ctx.drawImage(G, T1X + 7, TriosY + 136);
		ctx.drawImage(F1, T1X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T1X + 8, TriosY + 4);
		ctx.drawImage(H3, T1X + 13, TriosY + 32);
		ctx.drawImage(W, T1X, TriosY);
		ctx.drawImage(B5, T1X + 8, TriosY + 4);
	}
}

function Trio2() {
    if(T2P == 1) {
		ctx.drawImage(G, T2X + 7, TriosY + 136);
		ctx.drawImage(F4, T2X + 19, TriosY + 118);
		ctx.drawImage(B0_1, T2X - 4, TriosY + 64);
		ctx.drawImage(H1, T2X + 13, TriosY + 46);
		ctx.drawImage(W, T2X, TriosY + 14);
		ctx.drawImage(B1, T2X - 4, TriosY + 64);
	}
	if(T2P == 2) {
		Clap2.pause();
		Clap2.currentTime == 0;
		Clap2.play();
		
		ctx.drawImage(G, T2X + 7, TriosY + 136);
		ctx.drawImage(F1, T2X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T2X + 8, TriosY + 4);
		ctx.drawImage(H3, T2X + 13, TriosY + 32);
		ctx.drawImage(W, T2X, TriosY);
		ctx.drawImage(B3, T2X + 8, TriosY - 30);
	}
	if(T2P == 3) {
		ctx.drawImage(G, T2X + 7, TriosY + 136);
		ctx.drawImage(F1, T2X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T2X + 8, TriosY + 4);
		ctx.drawImage(H3, T2X + 13, TriosY + 32);
		ctx.drawImage(W, T2X, TriosY);
		ctx.drawImage(B4, T2X + 8, TriosY - 18);
	}
	if(T2P == 4) {
		ctx.drawImage(G, T2X + 7, TriosY + 136);
		ctx.drawImage(F1, T2X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T2X + 8, TriosY + 4);
		ctx.drawImage(H3, T2X + 13, TriosY + 32);
		ctx.drawImage(W, T2X, TriosY);
		ctx.drawImage(B5, T2X + 8, TriosY + 4);
	}
}

function Trio3() {
    if(T3P == 1) {
		ctx.drawImage(G, T3X + 7, TriosY + 136);
		ctx.drawImage(F4, T3X + 19, TriosY + 118);
		ctx.drawImage(B0_1, T3X - 4, TriosY + 64);
		ctx.drawImage(H1, T3X + 13, TriosY + 46);
		ctx.drawImage(W, T3X, TriosY + 14);
		ctx.drawImage(B1, T3X - 4, TriosY + 64);
	}
	if(T3P == 2) {
		//Clap3.pause();
		Clap3.currentTime == 0;
		Clap3.play();
		
		ctx.drawImage(G, T3X + 7, TriosY + 136);
		ctx.drawImage(F1, T3X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T3X + 8, TriosY + 4);
		ctx.drawImage(H3, T3X + 13, TriosY + 32);
		ctx.drawImage(W, T3X, TriosY);
		ctx.drawImage(B3, T3X + 8, TriosY - 30);
	}
	if(T3P == 3) {
		ctx.drawImage(G, T3X + 7, TriosY + 136);
		ctx.drawImage(F1, T3X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T3X + 8, TriosY + 4);
		ctx.drawImage(H3, T3X + 13, TriosY + 32);
		ctx.drawImage(W, T3X, TriosY);
		ctx.drawImage(B4, T3X + 8, TriosY - 18);
	}
	if(T3P == 4) {
		ctx.drawImage(G, T3X + 7, TriosY + 136);
		ctx.drawImage(F1, T3X + 19, TriosY + 104);
		ctx.drawImage(B0_2, T3X + 8, TriosY + 4);
		ctx.drawImage(H3, T3X + 13, TriosY + 32);
		ctx.drawImage(W, T3X, TriosY);
		ctx.drawImage(B5, T3X + 8, TriosY + 4);
	}
}

function render() {
	Trio1();
	Trio2();
	Trio3();
}

function main() {
    if(Start){
		
	}else{
		if(Title_music.currentTime == 0){
	        Title_music.play();
		}
		
		ctx.drawImage(BG, 0, 0);

		update();
		
		render();
	}
    requestAnimationFrame(main);
}

loadAudio();
loadImage();
setKeyboardListener();
main();

//sound//
//currentTime, pause, play//

//txt//
//ctx.fillStyle = "white";//
//ctx.font = "64px VT323";//
//ctx.fillText(`...`, ..., ...);//
