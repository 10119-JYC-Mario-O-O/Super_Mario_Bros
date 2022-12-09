let Game_Start = true;
let Pause = true;
let canvas;
let ctx;
let sfx = 0;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 1024;
document.body.appendChild(canvas);
let Start, PETSA, Goal, GameOver, TimeUP, LUS, CSS, BG, Ground, HB, G1, G2, G3, Died, MFL, MFR1, MFR2, MLJ, MLS, MLW1, MLW2, MLW3, MLW4, MRJ, MRS, MRW1, MRW2, MRW3, MRW4;
let Enttiy_Feet = 1;
let CoinSpin = 1;
let Live = 5;
let Coin = 0;
let timer = 0;
let countframe = 0;
let needtime = 300;
let time = needtime * 60;
let LevelCount = 0;
let Game_Over = false;
let Mario_Died = -1;
let isClear = false;
let publice_clearmove = 0;
let GoalTop = 224;
let mariolast_y = 832;
let marioset_x = 0;
let marioset_y = 0;
let mario_x = 128;
let mario_y = 832;
let marioland_y = 832;
let walking_frame = 0;
let walking = 1;
let face = 1;
let LCS = 120;
let isStop = false;
let isPushing = false;
let isMidair = false;
let isJumpStop = false;
let StopMJ = false;
let isScrolling = false;
let Do_Not_Move = false;
let HSNS = false;
let L_DNM = false;
let R_DNM = false;
let marioGround_y = 832;
let LevelWidth = 48;
let EW = 1;
let EH = 1;
let GW = 1;
let GH = 1;

let Level = [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 49, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 40, 40, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 40, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 40, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 03, 00, 00, 00, 02, 00, 00, 00, 00, 00, 00, 00, 40, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 40, 02, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 40, 02, 02, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 40, 02, 02, 02, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 00, 00, 02, 00, 00, 00, 40, 02, 02, 02, 02, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00,
			 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 02, 02, 00, 02, 02, 02, 00, 40, 02, 02, 02, 02, 02, 02, 02, 02, 02, 00, 00, 00, 00, 00, 00, 00, 00, 02, 00, 00, 00, 00, 00, 00, 00,
			 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01,
			 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01];
					
console.log("The Console");

function loadAudio(){
	overworld = new Audio();
    overworld.src = "audios/overworld.mp3";
	overworld.volume = 0.5;
	FlagSound = new Audio();
    FlagSound.src = "audios/Flagpole.wav";
	FlagSound.volume = 1.0;
	ClearSound = new Audio();
    ClearSound.src = "audios/Clear.mp3";
	ClearSound.volume = 1.0;
	CoinSound = new Audio();
    CoinSound.src = "audios/Coin.wav";
	CoinSound.volume = 1.0;
	LiveUPSound = new Audio();
    LiveUPSound.src = "audios/1up.wav";
	LiveUPSound.volume = 1.0;
	PauseSound = new Audio();
    PauseSound.src = "audios/Pause.wav";
	Pause.volume = 0.5;
	DiedSound = new Audio();
    DiedSound.src = "audios/Die.wav";
	DiedSound.volume = 1.0;
	JumpSound = new Audio();
    JumpSound.src = "audios/Jump.wav";
	JumpSound.volume = 0.5;
	OverSound = new Audio();
    OverSound.src = "audios/Game Over.mp3";
	OverSound.volume = 1.0;
	BumpSound = new Audio();
    BumpSound.src = "audios/Bump.wav";
	BumpSound.volume = 0.5;
	SlipSound = new Audio();
	SlipSound.src = "audios/Skid.wav";
	SlipSound.volume = 0.5;
	JOE = new Audio(); //JOE = Jump On Enemy
	JOE.src = "audios/Squish.wav";
	JOE.volume = 1.0;
}

function loadImage() {
	QB1 = new Image();
    QB1.src = "images/QB1.png";
	QB2 = new Image();
    QB2.src = "images/QB2.png";
	QB3 = new Image();
    QB3.src = "images/QB3.png";
	QHB = new Image();
    QHB.src = "images/QHB.png";
    Coin1 = new Image();
    Coin1.src = "images/Coin1.png";
	Coin2 = new Image();
    Coin2.src = "images/Coin2.png";
	Coin3 = new Image();
    Coin3.src = "images/Coin3.png";
	Coin4 = new Image();
    Coin4.src = "images/Coin4.png";
	MFR1 = new Image();
    MFR1.src = "images/MFR1.png";
	MFR2 = new Image();
    MFR2.src = "images/MFR2.png";
	MFL = new Image();
    MFL.src = "images/MFL.png";
	Flag = new Image();
    Flag.src = "images/Flag.png";
	Goal = new Image();
    Goal.src = "images/Goal.png";
	TimeUP = new Image();
    TimeUP.src = "images/TimeUP.png";
	PETSA = new Image();
    PETSA.src = "images/PETSA.png";
	LUS = new Image();
    LUS.src = "images/LUS.png";
	GameOver = new Image();
    GameOver.src = "images/GameOver.png";
	Start = new Image();
    Start.src = "images/Start.png";
	CSS = new Image();
    CSS.src = "images/CSS.png";
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
	Died = new Image();
    Died.src = "images/Died.png";
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

function Mario_is_Died(){
	QBList.length = 0;
	CoinList.length = 0;
	GomList.length = 0;
	Mario_Died = 240;
	timer = 120;
	Live--;
	
	if(Live <= 0){
		Game_Over = true;
	}
}

function LevelClear(){
	isClear = true;

	QBList.length = 0;
	CoinList.length = 0;
	GomList.length = 0;
	
	overworld.pause();
	overworld.currentTime = 0;

	if(publice_clearmove == 0){
		mario_x = LevelWidth * 64 - 500;
		CoinSound.pause();
		CoinSound.currentTime = 0;
		CoinSound.play();
		
		if(mariolast_y <= GoalTop + 32){
			Coin += 100;
		}else if(mariolast_y > GoalTop + 32 && mariolast_y <= GoalTop + 160){
			Coin += 50;
		}else if(mariolast_y > GoalTop + 160 && mariolast_y <= GoalTop + 352){
			Coin += 25;
		}else{
			Coin += 10;
		}
	
		LF100C();
		
		FlagSound.pause();
		FlagSound.currentTime = 0;
		FlagSound.play();
	}
	
	publice_clearmove += 0.5;

	if(mario_y <= GoalTop){
		mario_y = GoalTop;
	}

	if(countframe % 5 == 0){
		if(Enttiy_Feet == 1){
			Enttiy_Feet = 2;
		}else{
			Enttiy_Feet = 1;
		}
	}

	if(publice_clearmove <= 60){
		if(mario_y + publice_clearmove * 10 + 64 >= GoalTop + 544){
			if(Enttiy_Feet == 1){
				ctx.drawImage(MFR1, 496, GoalTop + 544);
			}else{
				ctx.drawImage(MFR2, 496, GoalTop + 544);
			}
		}else{
			if(Enttiy_Feet == 1){
				ctx.drawImage(MFR1, 496, mario_y + publice_clearmove * 10 + 64);
			}else{
				ctx.drawImage(MFR2, 496, mario_y + publice_clearmove * 10 + 64);
			}
		}
	}else if(publice_clearmove <= 75){
		ctx.drawImage(MFL, 548, GoalTop + 544);
		mario_y = 832;
	}else if(publice_clearmove <= 100){
		if(ClearSound.currentTime == 0){
			ClearSound.play();
		}
	}
}

function Add_Coin(){
	CoinSound.pause();
	CoinSound.currentTime = 0;
	CoinSound.play();

	Coin++;

	LF100C();
}

function LF100C(){
	while(Coin >= 100){
		LiveUPSound.pause();
		LiveUPSound.currentTime = 0;
		LiveUPSound.play();
		Live++;
		Coin -= 100;
	}
}

let QBList = [];
let CoinList = [];
let GomList = [];
function loadEnttiy(){
	EW = 1;
	EH = 1;

	while(EW + EH * LevelWidth - LevelWidth - 1 <= Level.length){
		if(Level[EW + EH * LevelWidth - LevelWidth - 1] == 03){
			QBList.push({x: EW * 64 - 64, y: EH * 64 - 64, stun_timer: 15});
		}
		
		if(Level[EW + EH * LevelWidth - LevelWidth - 1] == 40){
			CoinList.push({x: EW * 64 - 64, y: EH * 64 - 64});
		}
		
		if(Level[EW + EH * LevelWidth - LevelWidth - 1] == 50){
			GomList.push({x: EW * 64 - 64, y: EH * 64 - 64, thisface: 0, alive: true, stun_timer: 60});
		}

		EW++;
		
		if(EW == LevelWidth + 1){
			EH++;
			EW = 1;
		}
	}
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
		if(event.keyCode == 13){
            Game_Start = false;
			Pause = !Pause;
			
			if(!Game_Over && Mario_Died == -1){
				if(Pause){
					overworld.pause();
				}else{
					if(LCS == 0 && !isClear){
						overworld.play();
					}
				}
	
				if(PauseSound.currentTime != 0){
					PauseSound.pause();
					PauseSound.currentTime = 0;
				}
	
				PauseSound.play();
			}
        }
    });
}

function update() {
	if(Mario_Died == -1){
		DiedSound.pause();
		DiedSound.currentTime = 0;
	}
	
	if(HSNS){
		isJumpStop = true;
		isStop = true;
	}
		
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
				marioset_x -= 0.5;
			}
			
        }else{
            if(!isMidair){
	            walking_frame += 1;
            }else{
                walking_frame = 0;
                walking = 1;
            }

            if(!L_DNM){
				marioset_x -= 0.25;
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
				marioset_x += 0.5;
			}
			
        }else{
            if(!isMidair){
	            walking_frame += 1;
            }else{
                walking_frame = 0;
                walking = 1;
            }

            if(!R_DNM){
				marioset_x += 0.25;
			}
        }
		
    }else{
        walking_frame = 0;
        walking = 1;
		isStop = false;
    }

    if(74 in keysDown && !isJumpStop && !HSNS && !StopMJ){
		if(JumpSound.currentTime == 0){
			JumpSound.play();
		}
        
		isPushing = true;
		isStop = false;

        if(!isJumpStop && !StopMJ){
			if(75 in keysDown && Math.abs(marioset_x) > 0.25 && mario_y >= marioland_y - 120) {
				if(!HSNS){
					mario_y -= 2; //If you delete this, you can't jump (go up)
					marioset_y -= 2;
				}
	        }else if(mario_y >= marioland_y - 100){
		        if(!HSNS){
					mario_y -= 2; //If you delete this, you can't jump (go up)
					marioset_y -= 2;
				}
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
		if(!isPushing){
			StopMJ = true;
		}
	}else{
		isMidair = false;
		StopMJ = false;
		marioland_y = marioGround_y;
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

	if(HSNS){
		isJumpStop = true;
		StopMJ = true;

		if(BumpSound.currentTime == 0){
			BumpSound.play();
		}

		if(marioset_y < 0){
			marioset_y = 0;
		}
	}

    if(mario_y < marioGround_y){
	    if(!isJumpStop){
			marioset_y += 0.5;
		}else{
			marioset_y += 0.7;
		}
    }else if(!isMidair){
		marioset_y = 0;
	}

    mario_y += marioset_y;

	if(mario_y >= 1280 || parseInt(time / 60) + 1 <= 0){
		Mario_is_Died();
	}
}

function render_Enttiy(){
	for(let i = 0; i < QBList.length; i++){
		if(QBList[i].stun_timer == 15){
			if(CoinSpin == 1){
				ctx.drawImage(QB1, QBList[i].x + 512 - mario_x, QBList[i].y);
			}else if(CoinSpin == 2){
				ctx.drawImage(QB2, QBList[i].x + 512 - mario_x, QBList[i].y);
			}else if(CoinSpin == 3){
				ctx.drawImage(QB3, QBList[i].x + 512 - mario_x, QBList[i].y);
			}else if(CoinSpin == 4){
				ctx.drawImage(QB2, QBList[i].x + 512 - mario_x, QBList[i].y);
			}
		}else{
			ctx.drawImage(QHB, QBList[i].x + 512 - mario_x, QBList[i].y);
		}

		if(QBList[i].y + 64 >= mario_y && QBList[i].y + 32 <= mario_y){
			if(576 >= QBList[i].x + 512 - mario_x && 512 <= QBList[i].x + 512 - mario_x + 64){
				if(QBList[i].stun_timer == 15){
					QBList.splice(i, 1, {x: QBList[i].x, y: QBList[i].y, stun_timer: QBList[i].stun_timer - 1});
					Add_Coin();
					HSNS = true;
				}else{
					HSNS = true;
				}
			}
		}

		if(QBList[i].stun_timer >= 8 && QBList[i].stun_timer < 15){
			QBList.splice(i, 1, {x: QBList[i].x, y: QBList[i].y - 4, stun_timer: QBList[i].stun_timer - 1});
		}else if(QBList[i].stun_timer < 8 && QBList[i].stun_timer > 0){
			QBList.splice(i, 1, {x: QBList[i].x, y: QBList[i].y + 4, stun_timer: QBList[i].stun_timer - 1});
		}
	}

	for(let i = 0; i < CoinList.length; i++){
		if(CoinSpin == 1){
			ctx.drawImage(Coin1, CoinList[i].x + 16 + 512 - mario_x, CoinList[i].y + 4);
		}else if(CoinSpin == 2){
			ctx.drawImage(Coin2, CoinList[i].x + 24 + 512  - mario_x, CoinList[i].y + 4);
		}else if(CoinSpin == 3){
			ctx.drawImage(Coin3, CoinList[i].x + 30 + 512  - mario_x, CoinList[i].y + 4);
		}else if(CoinSpin == 4){
			ctx.drawImage(Coin4, CoinList[i].x + 24 + 512  - mario_x, CoinList[i].y + 4);
		}

		if(CoinList[i].x + 16 + 512 - mario_x <= 576 && CoinList[i].x + 16 + 544 - mario_x >= 512){
			if(CoinList[i].y <= mario_y + 60 && CoinList[i].y + 60 >= mario_y){ 
				Add_Coin();

				CoinList.splice(i, 1);
			}
		}
	}
	
	for(let i = 0; i < GomList.length; i++){
		if(GomList[i].x + 64 >= mario_x - 512 && mario_x + 512 >= GomList[i].x && Mario_Died == -1){
			if(GomList[i].alive){
				if(GomList[i].thisface == 0){
					GomList.splice(i, 1, {x: GomList[i].x - 0.75, y: GomList[i].y, thisface: 0, alive: true, stun_timer: GomList[i].stun_timer});
				}else{
					GomList.splice(i, 1, {x: GomList[i].x + 0.75, y: GomList[i].y, thisface: 1, alive: true, stun_timer: 60});
				}

				if(Enttiy_Feet == 1){
					ctx.drawImage(G1, GomList[i].x + 512 - mario_x, GomList[i].y);
				}else{
					ctx.drawImage(G2, GomList[i].x + 512 - mario_x, GomList[i].y);
				}

				if(Level[parseInt(GomList[i].x / 64 + 1) + parseInt(GomList[i].y / 64 + 2) * LevelWidth - LevelWidth - 1] == 00 && Level[parseInt(GomList[i].x / 64 + 2) + parseInt(GomList[i].y / 64 + 2) * LevelWidth - LevelWidth - 1] == 00){
					GomList.splice(i, 1, {x: GomList[i].x, y: GomList[i].y + 5, thisface: GomList[i].thisface, alive: true, stun_timer: 60});
				}

				if(Level[parseInt(GomList[i].x / 64 + 1) + parseInt(GomList[i].y / 64) * LevelWidth - LevelWidth - 1] != 00){
					GomList.splice(i, 1, {x: GomList[i].x, y: GomList[i].y, thisface: 1, alive: true, stun_timer: 60});
				}

				if(Level[parseInt(GomList[i].x / 64 + 2) + parseInt(GomList[i].y / 64) * LevelWidth - LevelWidth - 1] != 00){
					GomList.splice(i, 1, {x: GomList[i].x, y: GomList[i].y, thisface: 0, alive: true, stun_timer: 60});
				}

				if(GomList[i].x - 64 <= mario_x && GomList[i].x + 64 >= mario_x){
					if(mario_y + 64 >= GomList[i].y && mario_y <= GomList[i].y + 64){
						if(mario_y + 64 <= GomList[i].y + 16){
							GomList.splice(i, 1, {x: GomList[i].x, y: GomList[i].y, thisface: GomList[i].thisface, alive: false, stun_timer: 60});
							JOE.pause();
							JOE.currentTime = 0;
							JOE.play();
							Coin++;
							isJumpStop = false;
						}else{
							Mario_is_Died();
						}
					}
				}
			}else{
				ctx.drawImage(G3, GomList[i].x + 512 - mario_x, GomList[i].y + 32);
				if(GomList[i].stun_timer >= 56){
					mario_y -= 2;
					marioset_y -= 2;
				}
				GomList.splice(i, 1, {x: GomList[i].x, y: GomList[i].y, thisface: GomList[i].thisface, alive: false, stun_timer: GomList[i].stun_timer - 1});

				if(GomList[i].stun_timer <= 0){
					GomList.splice(i, 1);
				}
			}
		}
	}
}

function render_Not_Enttiy() {
	if(time % 15 == 0){
		CoinSpin++;

		if(CoinSpin >= 5){
			CoinSpin = 1;
		}
		
		if(Enttiy_Feet == 1){
			Enttiy_Feet = 2;
		}else{
			Enttiy_Feet = 1;
		}
	}

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
						if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
							marioGround_y = GH * 64 - 128;
						}
						if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
							HSNS = true;
							mario_y += GH * 64 - mario_y;
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
						if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
							marioGround_y = GH * 64 - 128;
						}
						if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
							HSNS = true;
							mario_y += GH * 64 - mario_y;
						}
					}
					
					ctx.drawImage(HB, GW * 64 - 64, GH * 64 - 64);
				}

				if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 49){
					ctx.drawImage(Goal, GW * 64 - 64, GH * 64 - 96);

					if(GH * 64 - 32 + publice_clearmove * 10 < GoalTop + 480){
						ctx.drawImage(Flag, GW * 64 - 100, GH * 64 - 64 + publice_clearmove * 10);
					}else{
						ctx.drawImage(Flag, GW * 64 - 100, GoalTop + 480);
					}
					
					if(GW * 64 - 64 + 28 <= mario_x + 64 && GW * 64 - 64 + 36 >= mario_x){
						mariolast_y = mario_y;
						GoalTop = GH * 64 - 96;
						LevelClear();
					}
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
						if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
							marioGround_y = GH * 64 - 128;
						}
						if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
							HSNS = true;
							mario_y += GH * 64 - mario_y;
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
						if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
							marioGround_y = GH * 64 - 128;
						}
						if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
							HSNS = true;
							mario_y += GH * 64 - mario_y;
						}
					}
					
					ctx.drawImage(HB, GW * 64 - LevelWidth * 64 + 960, GH * 64 - 64);
				}

				if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 49){
					ctx.drawImage(Goal, GW * 64 - LevelWidth * 64 + 960, GH * 64 - 96);
					if(GH * 64 - 32 + publice_clearmove * 10 < GoalTop + 544){
						ctx.drawImage(Flag, GW * 64 - LevelWidth * 64 + 924, GH * 64 - 64 + publice_clearmove * 10);
					}else{
						ctx.drawImage(Flag, GW * 64 - LevelWidth * 64 + 924, GoalTop + 544);
					}
					
					if(GW * 64 - 64 + 28 <= mario_x + 64 && GW * 64 - 64 + 36 >= mario_x){
						mariolast_y = mario_y;
						GoalTop = GH * 64 - 96;
						LevelClear();
					}
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
						
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 < mario_x && mario_x <= GW * 64){
					Do_Not_Move = true;
					L_DNM = true;
				}
					
				if(GW * 64 - 64 >= mario_x - 60 && GW * 64 - 64 <= mario_x + 60){
					if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
						marioGround_y = GH * 64 - 128;
					}
					if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
						HSNS = true;
						mario_y += GH * 64 - mario_y;
					}
				}
				
				if(GW * 64 - mario_x >= 80 && GW * 64 - mario_x <= 48){
					if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
							marioGround_y = GH * 64 - 128;
					}
					if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
						HSNS = true;
						mario_y += GH * 64 - mario_y;
					}
				}
				
				ctx.drawImage(Ground, GW * 64 + 448 - mario_x, GH * 64 - 64);
			}
			
			if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 02){			
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 <= mario_x + 64 && mario_x + 64 < GW *64){
					Do_Not_Move = true;
					R_DNM = true;
				}
						
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 < mario_x && mario_x <= GW * 64){
					Do_Not_Move = true;
					L_DNM = true;
				}
					
				if(GW * 64 - 64 >= mario_x - 60 && GW * 64 - 64 <= mario_x + 60){
					if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
						marioGround_y = GH * 64 - 128;
					}
					if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
						HSNS = true;
						mario_y += GH * 64 - mario_y;
					}
				}
				
				if(GW * 64 - mario_x >= 80 && GW * 64 - mario_x <= 48){
					if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
							marioGround_y = GH * 64 - 128;
					}
					if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
						HSNS = true;
						mario_y += GH * 64 - mario_y;
					}
				}
				
				ctx.drawImage(HB, GW * 64 + 448 - mario_x, GH * 64 - 64);
			}

			if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 03){			
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 <= mario_x + 64 && mario_x + 64 < GW *64){
					Do_Not_Move = true;
					R_DNM = true;
				}
						
				if(mario_y <= GH * 64 && GH * 64 - 64 <= mario_y && GW * 64 - 64 < mario_x && mario_x <= GW * 64){
					Do_Not_Move = true;
					L_DNM = true;
				}
					
				if(GW * 64 - 64 >= mario_x - 60 && GW * 64 - 64 <= mario_x + 60){
					if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
						marioGround_y = GH * 64 - 128;
					}
					if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
						mario_y += GH * 64 - mario_y;
					}
				}
				
				if(GW * 64 - mario_x >= 80 && GW * 64 - mario_x <= 48){
					if(GH * 64 - 128 < marioGround_y && GH * 64 - 64 > mario_y){
							marioGround_y = GH * 64 - 128;
					}
					if(GH * 64 > mario_y && GH * 64 - 32 < mario_y){
						mario_y += GH * 64 - mario_y;
					}
				}
			}

			if(Level[GW + GH * LevelWidth - LevelWidth - 1] == 49){
				ctx.drawImage(Goal, GW * 64 + 448 - mario_x, GH * 64 - 96);
				if(GH * 64 - 32 + publice_clearmove * 10 < GoalTop + 480){
					ctx.drawImage(Flag, GW * 64 + 412 - mario_x, GH * 64 - 64 + publice_clearmove * 10);
				}else{
					ctx.drawImage(Flag, GW * 64 + 412 - mario_x, GoalTop + 480);
				}
				
				if(GW * 64 - 64 + 28 <= mario_x + 64 && GW * 64 - 64 + 36 >= mario_x){
					mariolast_y = mario_y;
					GoalTop = GH * 64 - 96;
					LevelClear();
				}
			}

			GW++;
			if(GW == LevelWidth + 1){
				GH++;
				GW = 1;
			}
		}
	}

    if(mario_y >= marioGround_y && !Do_Not_Move){
        if(mario_y > marioGround_y && !isMidair){
			mario_y = marioGround_y;
			JumpSound.pause();
			JumpSound.currentTime = 0;
			BumpSound.pause();
			BumpSound.currentTime = 0;
		}
		if(!isPushing && isJumpStop){
			isJumpStop = false;
			HSNS = false;
		}
    }

	if(mario_x >= 512 && mario_x <= LevelWidth * 64 - 512){
		isScrolling = true;
	}else{
		isScrolling = false;
	}
	
    ctx.fillStyle = "white";
    ctx.font = "64px VT323";
    ctx.fillText(`${Live}`, 144, 136);
	ctx.fillText(`${Coin}`, 416, 128);
	ctx.fillText(`${parseInt(LevelCount / 4 + 1)}`, 608, 136);
	ctx.fillText(`${LevelCount % 4 + 1}`, 680, 136);
	ctx.fillText(`${parseInt(time / 60) + 1}`, 840, 136);

	if(Mario_Died == -1 && !isClear){
		if (!isMidair) {
		    if(face == 0 && marioset_x > 0.5){
				SlipSound.pause();
				SlipSound.currentTime = 0;
				SlipSound.play();
				
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
			}else if(face == 1 && marioset_x < -0.5){
				SlipSound.pause();
				SlipSound.currentTime = 0;
				SlipSound.play();
				
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
}

function main() {
	if(!Pause && !Game_Start && LCS == 0){
		
		render_Not_Enttiy();
		render_Enttiy();
		
		if(Mario_Died < 0){
			if(!isClear){
				if(overworld.currentTime == 0){
					overworld.play();
				}else if(overworld.currentTime >= 40){
					overworld.pause();
					overworld.currentTime = 1.9;
					overworld.play();
				}
			}
			
			if(!isClear){
				time--;
				sfx++;
				update();
			}

			countframe++;
			
		}else{
			if(Mario_Died > 0){
				ClearSound.pause();
				ClearSound.currentTime = 0;
				overworld.pause();
				overworld.currentTime = 0;
				PauseSound.pause();
				PauseSound.currentTime = 0;
				JumpSound.pause();
				JumpSound.currentTime = 0;
				if(DiedSound.currentTime == 0){
					DiedSound.play();
				}
				
				Mario_Died--;
				if(Mario_Died >= 200){
					marioset_y -= 10;
				}else{
					marioset_y += 10;
				}
				
				if(isScrolling){
					ctx.drawImage(Died, 512, mario_y + marioset_y);
				}else if(mario_x <= 512){
					ctx.drawImage(Died, mario_x, mario_y + marioset_y);
				}else{
					ctx.drawImage(Died, mario_x - LevelWidth * 64 + 1024, mario_y + marioset_y);
				}
				
			}else{
				if(time <= 0){
					if(timer > 0){
						ctx.drawImage(TimeUP, 0, 0);
						ctx.fillStyle = "white";
					    ctx.font = "64px VT323"
					    ctx.fillText(`${Live}`, 144, 136);
						ctx.fillText(`${Coin}`, 416, 128);
						ctx.fillText(`${parseInt(LevelCount / 4 + 1)}`, 608, 136);
						ctx.fillText(`${LevelCount % 4 + 1}`, 680, 136);
						timer--;
					}else{
						timer = 120;
						time = 1;
					}
				}else if(timer > 0){
					ctx.drawImage(LUS, 0, 0);
					ctx.fillStyle = "white";
				    ctx.font = "64px VT323"
				    ctx.fillText(`${Live}`, 144, 136);
					ctx.fillText(`${Live}`, 512, 480);
					ctx.fillText(`${Coin}`, 416, 128);
					ctx.fillText(`${parseInt(LevelCount / 4 + 1)}`, 608, 136);
					ctx.fillText(`${parseInt(LevelCount / 4 + 1)}`, 552, 352);
					ctx.fillText(`${LevelCount % 4 + 1}`, 680, 136);
					ctx.fillText(`${LevelCount % 4 + 1}`, 608, 352);
					timer--;
				}else{
					if(!Game_Over){
						Mario_Died = -1;
						timer = 0;
						marioset_x = 0;
						marioset_y = 0;
						mario_x = 128;
						mario_y = 832;
						face = 1;
						time = needtime * 60;
						loadEnttiy();
					}else{
						if(OverSound.currentTime == 0){
							OverSound.play();
						}
						
						ctx.drawImage(GameOver, 0, 0);
					}
				}
			}
		}
	}
	
	if(LCS != 0 && !Game_Start){
		ctx.drawImage(LUS, 0, 0);
		ctx.fillStyle = "white";
		ctx.font = "64px VT323"
		ctx.fillText(`${Live}`, 144, 136);
		ctx.fillText(`${Live}`, 512, 480);
		ctx.fillText(`${Coin}`, 416, 128);
		ctx.fillText(`${parseInt(LevelCount / 4 + 1)}`, 608, 136);
		ctx.fillText(`${parseInt(LevelCount / 4 + 1)}`, 552, 352);
		ctx.fillText(`${LevelCount % 4 + 1}`, 680, 136);
		ctx.fillText(`${LevelCount % 4 + 1}`, 608, 352);
		LCS--;
	}
		
	if(Game_Start){
		ctx.fillStyle = "white";
		ctx.font = "64px VT323"
		ctx.drawImage(Start, 0, 0);
		ctx.drawImage(PETSA, 192, 640);
		ctx.fillText(`${parseInt(LevelCount / 4 + 1)}`, 512, 736);
		ctx.fillText(`${LevelCount % 4 + 1}`, 576, 736);
		
	}
	
    requestAnimationFrame(main);
}

loadEnttiy();
loadAudio();
loadImage();
setKeyboardListener();
main();