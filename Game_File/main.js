//캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 1024;
document.body.appendChild(canvas);
let BG, Ground, HB, G1, G2, G3, MLJ, MLS, MLW1, MLW2, MLW3, MLW4, MRJ, MRS, MRW1, MRW2, MRW3, MRW4;
let marioset_x = 0;
let marioset_y = 0;
let mario_x = 128;
let mario_y = 832;
let walking_frame = 0;
let walking = 1;
let face = 1;
let isStop = false;
let isPushing = false;
let isMidair = false;
let isJumpStop = false;
let isScrolling = false;
let Do_Not_Move = false;
let L_DNM = false;
let R_DNM = false;
let marioGround_y = 832;
let LevelWidth = 48;
let GW = 1;
let GH = 1;
let Level = [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 02, 00, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 02, 00, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 02,
			 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 02,
			 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01,
			 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01];

let LevelBackUp1 = [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 01,
			 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 01];

let LevelBackUp2 = [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 00, 00,
			 00, 00, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 02, 02, 00, 00,
			 00, 02, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 02, 02, 02, 02, 00,
			 01, 01, 01, 01, 01, 01, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 01, 01, 01, 01, 01, 01,
			 01, 01, 01, 01, 01, 01, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 01, 01, 01, 01, 01, 01];

function loadImage() {
    BG = new Image();
    BG.src = "images/BG.png";
    Ground =new Image();
    Ground.src = "images/Ground.png"
    HB =new Image();
    HB.src = "images/HB.png"
	G1 =new Image();
    G1.src = "images/G1.png"
	G2 =new Image();
    G2.src = "images/G2.png"
	G3 =new Image();
    G3.src = "images/G3.png"
    MLJ = new Image();
    MLJ.src = "images/MLJ.png";
	MLS = new Image();
    MLS.src = "images/MLS.png";
    MLW1 = new Image();
    MLW1.src = "images/MLW1.png";
    MLW2 = new Image();
    MLW2.src = "images/MLW2.png";
    MLW3 = new Image();
    MLW3.src = "images/MLW3.png";
    MLW4 = new Image();
    MLW4.src = "images/MLW4.png";
    MRJ = new Image();
    MRJ.src = "images/MRJ.png";
	MRS = new Image();
    MRS.src = "images/MRS.png";
    MRW1 = new Image();
    MRW1.src = "images/MRW1.png";
    MRW2 = new Image();
    MRW2.src = "images/MRW2.png";
    MRW3 = new Image();
    MRW3.src = "images/MRW3.png";
    MRW4 = new Image();
    MRW4.src = "images/MRW4.png";
}

let keysDown = {};
function setKeyboardListener() {
    document.addEventListener("keydown", function (event) {
        keysDown[event.keyCode] = true;
    });
    document.addEventListener("keyup", function (event) {
        delete keysDown[event.keyCode];
        if(event.keyCode == 74){
            isPushing = false;
			isJumpStop = true;
        }
    });
}

function update() {
    if(65 in keysDown){
        face = 0;

        if(75 in keysDown){
            if(!isMidair){
	            walking_frame += 2;
            }else{
                walking_frame = 0;
                walking = 1;
            }

            if(!L_DNM){
				marioset_x -= 0.4;
			}
			
        }else{
            if(!isMidair){
	            walking_frame += 1;
            }else{
                walking_frame = 0;
                walking = 1;
            }

            if(!L_DNM){
				marioset_x -= 0.2;
			}
			
        }
		
    }else if(68 in keysDown){
        face = 1;

	    if(75 in keysDown){
            if(!isMidair){
	            walking_frame += 2;
            }else{
                walking_frame = 0;
                walking = 1;
            }

            if(!R_DNM){
				marioset_x += 0.4;
			}
			
        }else{
            if(!isMidair){
	            walking_frame += 1;
            }else{
                walking_frame = 0;
                walking = 1;
            }

            if(!R_DNM){
				marioset_x += 0.2;
			}
        }
		
    }else{
        walking_frame = 0;
        walking = 1;
		isStop = false;
    }

    if(74 in keysDown && !isJumpStop){
        isPushing = true;
		isStop = false;

        if(!isJumpStop){
			if(75 in keysDown && Math.abs(marioset_x) > 0.25 && mario_y > marioGround_y - 80) {
				mario_y -= 2;
		        marioset_y -= 2;
	        }else if(mario_y > marioGround_y - 64){
		        mario_y -= 2;
				marioset_y -= 2;
		    }else{
				isJumpStop = true;
			}
		}
    }
    
    if(walking_frame >= 6){
        walking++;
        walking_frame = 0;

        if(walking == 5){
            walking = 1;
        }
    }

	if(mario_y < marioGround_y){
		isMidair = true;
	}else{
		isMidair = false;
	}

    marioset_x = marioset_x * 0.95;
    mario_x += marioset_x;

	if(mario_x <= 0){
            mario_x = 0;
            marioset_x = 0;
    }

	if(R_DNM){
		mario_x -= 0.5;
		marioset_x = 0;
	}else if(L_DNM){
		mario_x += 0.5;
		marioset_x = 0;
	}

	if(mario_x >= 64 * LevelWidth - 64){
            mario_x = 64 * LevelWidth - 64;
            marioset_x = 0;
    }

    if(mario_y < marioGround_y){
        marioset_y += 0.5;
    }else if(!isMidair){
		marioset_y = 0;
	}

    mario_y += marioset_y;
}

function render() {

    ctx.drawImage(BG, 0, 0);

	GW = 1;
	GH = 1;

	Do_Not_Move = false;
	L_DNM = false;
	R_DNM = false;
	
	marioGround_y = 1280;
	
	if(!isScrolling){
		if(mario_x < 512){
			while(GW + GH * LevelWidth - LevelWidth - 1 <= Level.length){
				if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 01){
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 <= mario_x + 60 && mario_x + 60 < GW *64){
						Do_Not_Move = true;
						R_DNM = true;
					}
						
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 < mario_x && mario_x <= GW *64){
						Do_Not_Move = true;
						L_DNM = true;
					}
					
					if(GW * 64 - 64 >= mario_x -60 && GW * 64 - 64 <= mario_x + 60){
						if(GH * 64 - 128 < marioGround_y){
							marioGround_y = GH * 64 - 128;
						}
					}
					
					ctx.drawImage(Ground, GW * 64 - 64, GH * 64 - 64);
				}
				
				if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 02){
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 <= mario_x + 60 && mario_x + 60 < GW *64){
						Do_Not_Move = true;
						R_DNM = true;
					}
						
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 < mario_x && mario_x <= GW *64){
						Do_Not_Move = true;
						L_DNM = true;
					}
					
					if(GW * 64 - 64 >= mario_x - 60 && GW * 64 - 64 <= mario_x + 60){
						if(GH * 64 - 128 < marioGround_y){
							marioGround_y = GH * 64 - 128;
						}
					}
					
					ctx.drawImage(HB, GW * 64 - 64, GH * 64 - 64);
				}

				GW++;
				if(GW == LevelWidth + 1){
					GH++;
					GW = 1;
				}
			}
		}else if(mario_x > LevelWidth * 64 - 512){
			while(GW + GH * LevelWidth - LevelWidth - 1 <= Level.length){
				if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 01){
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - LevelWidth * 64 + 960 <= mario_x - LevelWidth * 64 + 1084 && mario_x - LevelWidth * 64 + 1084 < GW *64 - LevelWidth * 64 + 1024){
						Do_Not_Move = true;
						R_DNM = true;
					}
						
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - LevelWidth * 64 + 896 < mario_x - LevelWidth * 64 + 964 && mario_x - LevelWidth * 64 + 964 <= GW *64 - LevelWidth * 64 + 960){
						Do_Not_Move = true;
						L_DNM = true;
					}
					
					if(GW * 64 - LevelWidth * 64 + 960 >= mario_x - LevelWidth * 64 + 976 && GW * 64 - LevelWidth * 64 + 960 <= mario_x - LevelWidth * 64 + 1064){
						if(GH * 64 - 128 < marioGround_y){
							marioGround_y = GH * 64 - 128;
						}
					}
					
					ctx.drawImage(Ground, GW * 64 - LevelWidth * 64 + 960, GH * 64 - 64);
				}
				
				if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 02){
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - LevelWidth * 64 + 960 <= mario_x - LevelWidth * 64 + 1084 && mario_x - LevelWidth * 64 + 1084 < GW *64 - LevelWidth * 64 + 1024){
						Do_Not_Move = true;
						R_DNM = true;
					}
						
					if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - LevelWidth * 64 + 896 < mario_x - LevelWidth * 64 + 964 && mario_x - LevelWidth * 64 + 964 <= GW *64 - LevelWidth * 64 + 960){
						Do_Not_Move = true;
						L_DNM = true;
					}
					
					if(GW * 64 - LevelWidth * 64 + 960 >= mario_x - LevelWidth * 64 + 976 && GW * 64 - LevelWidth * 64 + 960 <= mario_x - LevelWidth * 64 + 1064){
						if(GH * 64 - 128 < marioGround_y){
							marioGround_y = GH * 64 - 128;
						}
					}
					
					ctx.drawImage(HB, GW * 64 - LevelWidth * 64 + 960, GH * 64 - 64);
				}

				GW++;
				if(GW == LevelWidth + 1){
					GH++;
					GW = 1;
				}
			}
		}
	}else{
		while(GW + GH * LevelWidth - LevelWidth - 1 <= Level.length){
			if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 01){
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 <= mario_x + 64 && mario_x + 64 < GW *64){
					Do_Not_Move = true;
					R_DNM = true;
				}
						
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 < mario_x && mario_x <= GW *64){
					Do_Not_Move = true;
					L_DNM = true;
				}
					
				if(GW * 64 - 64 >= mario_x - 60 && GW * 64 - 64 <= mario_x + 60){
					if(GH * 64 - 128 < marioGround_y){
						marioGround_y = GH * 64 - 128;
					}
				}

				if(GW * 64 - mario_x >= 80 && GW * 64 - mario_x <= 48){
					if(GH * 64 - 128 < marioGround_y){
							marioGround_y = GH * 64 - 128;
					}
				}
				
				ctx.drawImage(Ground, GW * 64 + 448 - mario_x, GH * 64 - 64);
			}
			
			if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 02){			
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 <= mario_x + 64 && mario_x + 64 < GW *64){
					Do_Not_Move = true;
					R_DNM = true;
				}
						
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 < mario_x && mario_x <= GW *64){
					Do_Not_Move = true;
					L_DNM = true;
				}
					
				if(GW * 64 - 64 >= mario_x - 60 && GW * 64 - 64 <= mario_x + 60){
					if(GH * 64 - 128 < marioGround_y){
						marioGround_y = GH * 64 - 128;
					}
				}
				
				if(GW * 64 - mario_x >= 80 && GW * 64 - mario_x <= 48){
					if(GH * 64 - 128 < marioGround_y){
							marioGround_y = GH * 64 - 128;
					}
				}
				
				ctx.drawImage(HB, GW * 64 + 448 - mario_x, GH * 64 - 64);
			}

			GW++;
			if(GW == LevelWidth + 1){
				GH++;
				GW = 1;
			}
		}
	}

    if(mario_y >= marioGround_y && !Do_Not_Move){
        if(mario_y > marioGround_y){
			mario_y = marioGround_y;
		}
		if(!isPushing && isJumpStop){
			isJumpStop = false;
		}
    }

	if(mario_x >= 512 && mario_x <= LevelWidth * 64 - 512){
		isScrolling = true;
	}else{
		isScrolling = false;
	}
	
    ctx.fillStyle = "white";
    ctx.font = "20px Arial"
    ctx.fillText(`Do_Not_Move : ${Do_Not_Move}`, 20, 280);
	ctx.fillText(`L_DNM : ${L_DNM}`, 20, 300);
	ctx.fillText(`R_DNM : ${R_DNM}`, 20, 320);
	ctx.fillText(`Ground : ${marioGround_y}`, 20, 340);
	ctx.fillText(`X : ${mario_x}`, 20, 360);
	ctx.fillText(`Y : ${mario_y}`, 20, 380);
	
	if (!isMidair) {
	    if(face == 0 && marioset_x > 0){
			if(!isScrolling){
				if(mario_x <= 512){	
					ctx.drawImage(MLS, mario_x, mario_y);
				}else{
					ctx.drawImage(MLS, mario_x - LevelWidth * 64 + 1024, mario_y);
				}
			}else{
				ctx.drawImage(MLS, 512, mario_y);
			}
			isStop = true;
		}else if(face == 1 && marioset_x < 0){
			if(!isScrolling){
				if(mario_x <= 512){
					ctx.drawImage(MRS,  mario_x + 8, mario_y);
				}else{
					ctx.drawImage(MRS, mario_x - LevelWidth * 64 + 1024, mario_y);
				}
			}else{
				ctx.drawImage(MRS, 520, mario_y);
			}
			isStop = true;
		}else{
			isStop = false;
		}
		
		if(!isStop){
			if (walking == 1){
		        if(face == 0){
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MLW1, mario_x, mario_y);
						}else{
							ctx.drawImage(MLW1, mario_x - LevelWidth * 64 + 1024, mario_y);
						}
					}else{
						ctx.drawImage(MLW1, 512, mario_y);
					}
		        }else{
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MRW1, mario_x + 12, mario_y);
						}else{
							ctx.drawImage(MRW1, mario_x - LevelWidth * 64 + 1036, mario_y);
						}
					}else{
						ctx.drawImage(MRW1, 524, mario_y);
					}
		        }
		    }
		    if (walking == 2){
		        if(face == 0){
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MLW2, mario_x, mario_y);
						}else{
							ctx.drawImage(MLW2, mario_x - LevelWidth * 64 + 1024, mario_y);
						}
					}else{
						ctx.drawImage(MLW2, 512, mario_y);
					}
		        }else{
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MRW2, mario_x, mario_y);
						}else{
							ctx.drawImage(MRW2, mario_x - LevelWidth * 64 + 1024, mario_y);
						}
					}else{
						ctx.drawImage(MRW2, 512, mario_y);
					}
		        }
		    }
		    if (walking == 3){
		        if(face == 0){
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MLW3, mario_x, mario_y);
						}else{
							ctx.drawImage(MLW3, mario_x - LevelWidth * 64 + 1024, mario_y);
						}
					}else{
						ctx.drawImage(MLW3, 512, mario_y);
					}
		        }else{
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MRW3, mario_x + 16, mario_y);
						}else{
							ctx.drawImage(MRW3, mario_x - LevelWidth * 64 + 1040, mario_y);
						}
					}else{
						ctx.drawImage(MRW3, 528, mario_y);
					}
		        }
		    }
		    if (walking == 4){
		        if(face == 0){
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MLW4, mario_x, mario_y);
						}else{
							ctx.drawImage(MLW4, mario_x - LevelWidth * 64 + 1024, mario_y);
						}
					}else{
						ctx.drawImage(MLW4, 512, mario_y);
					}
		        }else{
		            if(!isScrolling){
						if(mario_x <= 512){
							ctx.drawImage(MRW4, mario_x + 8, mario_y);
						}else{
							ctx.drawImage(MRW4, mario_x - LevelWidth * 64 + 1032, mario_y);
						}
					}else{
						ctx.drawImage(MRW4, 520, mario_y);
					}
		        }
		    }
		}
    }else{
        if(face == 0){
            if(!isScrolling){
				if(mario_x < 512){
					ctx.drawImage(MLJ, mario_x, mario_y);
				}else{
					ctx.drawImage(MLJ, mario_x - LevelWidth * 64 + 1024, mario_y);
				}
			}else{
				ctx.drawImage(MLJ, 512, mario_y);
			}
        }else{
            if(!isScrolling){
				if(mario_x <= 512){
					ctx.drawImage(MRJ, mario_x, mario_y);
				}else{
					ctx.drawImage(MRJ, mario_x - LevelWidth * 64 + 1024, mario_y);
				}
			}else{
				ctx.drawImage(MRJ, 512, mario_y);
			}
        }
    }
}

function main() {
    update();
    render();
    requestAnimationFrame(main);
}

loadImage();
setKeyboardListener();
main();
