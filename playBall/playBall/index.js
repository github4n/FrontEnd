
$(document).on("pagecreate", "#body", function() {
	(function(doc, win) {
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function() {
				var clientWidth = docEl.clientWidth;
				//			            　　　　　window.innerWidth>max ?  window.innerWidth : max;
				if(!clientWidth) return;
				docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
			};

		if(!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

	$(".loading").show();
	var zhong_qiu=false;
	//			  
console.log($("#catchBall").css("margin-top"))	
var t_h=Number($("#catchBall").css("margin-top"));
	//监听加载状态改变  
	document.onreadystatechange = completeLoading;

	//加载状态为complete时移除loading效果  
	function completeLoading() {
		if(document.readyState == "complete") {
			$(".loading").hide();
			var bodyH = $(window).height();
			$(".operate").css("height", bodyH + 'px');
			console.log($('.box').width(), $('.box').height());
		}
	}

	//页面加载完成时：
	$(document).ready(function() {
		var bodyH = $(window).height();
		$(".operate").css("height", bodyH + 'px');
		$(".pop").hide();
		$(".goal").hide();
	})
	
	var play_main = true; //人--模拟守==》人
	var door_main = false; //人--模拟守==>模拟

	var roundNum = 1;
	$(".round text").html(roundNum);
	$(".rest text").html("5");
	var goal = 0; //设置初始分数；
	var playNum = 0; //设置踢球次数
	var dirFlag; //方向标志-2,-1，0,1,2,
	var comeinFlag = false;
	var haDchange = 0; //是否已经运动到栏
	var comeSuccess = false; //踢球人方向是否踢中，左，中，右；
	var origin = [$(".box").offset().left,
		$(window).height() - $(".maxBox").height()
	];
	//球的初始位置
	var sx = document.documentElement.clientWidth/2
	var door_men_origin = [sx,
		"4rem"
	];
	//运动相交时（球-守球人，在栏守的瞬间）的位置记录；
	var door_men_lo_x,
		door_men_lo_y,
		protect_location = [door_men_lo_x, door_men_lo_y],
		ball_lo_x,
		ball_lo_y,
		ball_location = [ball_lo_x, ball_lo_y];

	var maxbox = $(".maxBox");
	var oBall = document.querySelector(".box");
	var borderleft = maxbox.offset().left + (maxbox.offset().left - $('.box').width()) / 2;
	var borderRight = maxbox.offset().left + (maxbox.offset().left - $('.box').width()) / 2 + $('.box').width();
	var leftNum = 5; //设置小球每次向左运动的像素值
	var topNum = 5; //设置小球每次向下运动的像素值
	var leftMax = document.documentElement.clientWidth - oBall.offsetWidth; //浏览器窗口宽度减去小球的宽度等于小球能运动到的最大左边位置，下一行代码同理。
	var topMax = document.documentElement.clientHeight - oBall.offsetHeight-document.getElementById("catchBall").style.borderTop;

	//监听浏览器的窗体变化：
	window.onresize = function() { //当浏览器窗口发生变化时，实时获取浏览器窗口的宽高
		var bodyH = $(window).height();
		$(".operate").css("height", bodyH + 'px');
		var maxbox = document.querySelector(".maxBox");
		var borderleft = maxbox.offsetLeft + (maxbox.offsetLeft - $('.box').width()) / 2;
		var borderRight = maxbox.offsetLeft + (maxbox.offsetLeft - $('.box').width()) / 2 + $('.box').width();
		leftMax = document.documentElement.clientWidth - oBall.clientWidth;
	    topMax = document.documentElement.clientHeight - oBall.offsetHeight-document.getElementById("catchBall").style.borderTop;
		
	}


	var shaoAudio=$("#shaoaudio")[0];
	var winAudio=$("#winaudio")[0];

	//******************---------倒计时准备------------*****************	
    
    var lolo;
       
    $("#bat").on("tap",function(){
    	$(".bat").hide();
    	lolo=1;
    	timer();
    })
    if(lolo==0){
    	$(".bat").show();
    }else if(lolo==1){
    	timer();
    	$(".bat").hide();
    }
    if($(".bat").css("display")=="none"){
    	lolo=1;
    }else if($(".bat").css("display")=="block"){
    	lolo=0;
    	
    }
 	
	var time_used = 0;
	var setTime;
    var hit_dirc;
	function timer() {
		var n = 6;
		$(".timer").show();
		clearInterval(timer);
		$(".timer text").html("");
		setTime = setInterval(function() {
			n--;
			$(".timer text").html(n)
			if(n == 0 || n < 0) {
				clearInterval(setTime);
				time_used = 1;
				//调用函数：自动判方向，踢和守：（即模踢球，也模拟了守球）
				 hit_dirc = Math.round(Math.random() * 4);
				var catc_dirc = Math.round(Math.random() * 2);
				tocomic(hit_dirc, catc_dirc);
				$(".timer").hide();
			}else {
				$(".timer").show();
				
			}
		}, 1000);
	}
	

	//********************-----“主动踢球person_main===》模拟守球”------*******************************		
	//点击球时的判断，(踢球为主动方，模拟守球)取值...
	$(".box").on("touchmove", function(event) {
		if(play_main == true) {
			clearInterval(setTime);
			setTime = null;
			time_used = 0;
			$(".timer text").html("");
			$(".timer").hide();
		}
		
		console.log(event)
		comeinFlag = true;
		msg = true;
		console.log($(".maxBox").css("left"));
		var parentPosition = $(".box");
		var origin = [parentPosition.offset().left, $(window).height() - $(".maxBox").height()];
		//球的初始位置
		//鼠标的最终位置作为判断踢球的方向，左外，左，中，右，右外
		var centerX = Number($('.box').width() / 5); //球心位置：判断踢球方向
		var centerY = $('.box').height() / 5;
		var mouseX = event.originalEvent.changedTouches[0].clientX - $('.box').offset().left;
		var mouseY = event.originalEvent.changedTouches[0].clientY - $('.box').offset().top;
		//鼠标位置判断标准：
		//1:距离左边界
		var outleft = event.pageX;
		var angle;
		if(mouseX < (centerX * 2) && mouseX > centerX) {
			//左
			dirFlag = -1;
			angle = 210;
			$(".box .line_dir").css("transform", "rotate(" + angle + "deg)");
		} else if((centerX * 2) < mouseX && mouseX < (centerX * 3)) {
			//中
			dirFlag = 0;
			angle = 0;
			$(".box .line_dir").css("transform", "rotate(" + angle + "deg)");
		} else if(mouseX > (centerX * 3) && mouseX < (centerX * 4)) {
			//右
			dirFlag = 1;
			angle = 150;
			$(".box .line_dir").css("transform", "rotate(" + angle + "deg)");
		} else if(mouseX > 0 && mouseX < centerX) {
			//左外
			dirFlag = -2;
			angle = 230;
			$(".box .line_dir").css("transform", "rotate(" + angle + "deg)");
		} else if(mouseX > (centerX * 4) && mouseX < centerX * 5) {
			//右外
			dirFlag = 2;
			angle = 130;
			$(".box .line_dir").css("transform", "rotate(" + angle + "deg)");
		}

	})

	//踢球动作完成后：
	$(".box").on("touchend", function() {
		shaoAudio.play();
		var parentPosition = $(".box");
		var origin = [(document.documentElement.clientWidth - document.querySelector(".box").clientWidth) / 2,
			$(window).height() - $(".maxBox").height()
		];
		
		var small_man=[$(".direction").offset().left,$(".direction").offset().top];
		//***************--------踢球---》模拟守球----------------*****************
		$(".direction").css({
			"left":origin[0]+'px',
			"top":small_man[1]+'px',
			"animation":"none",
		})
		//接的方向随机判，随机数组
		var direc_random = Math.round(2 * Math.random());
		if(play_main == true && time_used == 0) {
			if(comeinFlag == true) {
				//点击“踢”，踢球过程：
				var parentPosition = $(".box").position(); //相对于父元素的left，top值；
				var rootPagePosition = $(".box").offset(); //相对于页面的left，top值；
				
				playNum++;
				//获取三个接点的坐标
				var dleftX = $(".dleft").offset().left;
				var dleftY = $(".dleft").offset().top;

				var dcenterX = $(".dcenter").offset().left;
				var dcenterY = $(".dcenter").offset().top;

				var drightX = $(".dright").offset().left;
				var drightY = $(".dright").offset().top;

				//两点失误球位置
				var missleftX = $(".missL").offset().left;
				var missleftY = $(".missL").offset().top;

				var missrightX = $(".missR").offset().left;
				var missrightY = $(".missR").offset().top;
 				var q_h= Number($(".box").height())+dleftY;
				console.log(dleftX, dleftY)
				console.log(dcenterX, dcenterY)
				//球动的方向轨迹
				//未中方向
				if(dirFlag == -2) {
					//左外
					$(".box").animate({
						left: missrightX,
						top: missrightY,
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000)
					comeinFlag = true;
					haDchange = 1;
					comeSuccess = false;
				} else if(dirFlag == 2) {
					//右外
					$(".box").animate({
						left: missleftX,
						top: missleftY,
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000)
					comeinFlag = true;
					haDchange = 1;
					comeSuccess = false;
				}
				//点中方向
				else if(dirFlag == -1) {
					
					comeinFlag = true;
					haDchange = 1;
					comeSuccess = true;
					ball_lo_x = drightX;
					ball_lo_y = drightY;
				} else if(dirFlag == 0) {
					
					haDchange = 1;
					comeinFlag = true;
					comeSuccess = true;
					ball_lo_x = dcenterX;
					ball_lo_y = dcenterY;
				} else {
					
					ball_lo_x = dleftX;
					ball_lo_y = dleftY;
					haDchange = 1;
					comeinFlag = true;
					comeSuccess = true;
				}
				var men_w = $(".door_men").width() / 2;
				var men_h = $(".door_men").height() / 2;
				console.log(direc_random)
				//---------------------守门员接球：
				//接球人的方向运动
				if(direc_random == 0) {
					//左
					$(".door_men").animate({
						left: dleftX,
						top: dleftY
					}, 2000);
					door_men_lo_x = dleftX;
					door_men_lo_y = dleftY;
				} else if(direc_random == 1) {
					//中
					$(".door_men").animate({
						left: dcenterX,
						top: dcenterY
					}, 2000);
					door_men_lo_x = dcenterX;
					door_men_lo_y = dcenterY;
				} else {
					//右
					$(".door_men").animate({
						left: drightX,
						top: drightY
					}, 2000);
					door_men_lo_x = drightX;
					door_men_lo_y = drightY;
				}
				
				if(comeSuccess==true){
						//dirFlag:1:you  
						if(direc_random==0&&dirFlag==1&&comeSuccess==true){
							//同左
							$(".box").animate({
								left: dleftX,
								top: dleftY,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							ball_lo_x = dleftX;
							ball_lo_y = dleftY;
							haDchange = 1;
							comeinFlag = true;
							comeSuccess = true;
							goal++;
						}else if(dirFlag==1&&(direc_random==1||direc_random==2)){
							$(".box").animate({
								left: dleftX,
								top: q_h,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							ball_lo_x = dleftX;
							ball_lo_y = dleftY;
							haDchange = 1;
							comeinFlag = true;
							comeSuccess = true;
							goal++;
							zhong_qiu=true;
						}
						
						if(direc_random==2&&dirFlag==-1&&comeSuccess==true){
							//同you
							$(".box").animate({
								left: drightX,
								top: drightY,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							ball_lo_x = drightX;
							ball_lo_y = drightY;
							haDchange = 1;
							comeinFlag = true;
							comeSuccess = true;
							
						}else if(dirFlag==-1&&(direc_random==1||direc_random==0)){
							$(".box").animate({
								left: drightX,
								top: q_h,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							ball_lo_x = drightX;
							ball_lo_y = drightY;
							haDchange = 1;
							comeinFlag = true;
							comeSuccess = true;
							goal++;
							zhong_qiu=true;
						}
						
						if(direc_random==1&&dirFlag==0&&comeSuccess==true){
							//同zhong
							$(".box").animate({
								left: dcenterX,
								top: dcenterY,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							ball_lo_x = dcenterX;
							ball_lo_y = dcenterY;
							haDchange = 1;
							comeinFlag = true;
							comeSuccess = true;
							
						}else if(dirFlag==0&&(direc_random==0||direc_random==2)){
							$(".box").animate({
								left: dcenterX,
								top: q_h,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							ball_lo_x = dcenterX;
							ball_lo_y = dcenterY;
							haDchange = 1;
							comeinFlag = true;
							comeSuccess = true;
							goal++;
							zhong_qiu=true;
							
						}
						//接球人的位置与球到时的位置判断，坐标于误差5px，则守球成功，
						//计分：守球成功则不得分，守球失败则累计一分；
		
						//step1:获取两方位置：
						//step2:位置计算：
					
				}
				
				
			

			}

		}
	var sx = document.documentElement.clientWidth-$("#catchBall").offset().left-$(".door_men").width()
	var door_men_origin = [sx/2,
		"4rem"
	];
		
		//守球人的位置记录：
		console.log(origin)
		if(play_main == true && time_used == 0) {
			if(haDchange) {
				setTimeout(function() {
					if(zhong_qiu==true){
						winAudio.play();
					}
					$(".box").css({
						"left": origin[0] + 'px',
						"top": "29rem",
						"width": "3.5rem",
						"height": "3.5rem",
						"line-height": "3.5rem",
						"font-size": "1.18rem"
					});
					$(".direction").css({
					"left": origin[0] + 'px',
					"top": small_man[1] + 'px',
					"animation":" run 2s ease-in-out 1s infinite",
				})
					$(".door_men").css({
						"left": door_men_origin[0] + 'px',
						"top": door_men_origin[1] + 'px'
					})
					$(".totalGoal text").html(goal);
					//踢球次数==5
					if(playNum == 5) {
						$(".pop").show();
						$(".goal").animate().show();
						$(".goal text").html(goal);

						clearInterval(setTime);
						setTime = null;
						time_used = 0;
						$(".timer text").html("");
						$(".timer").hide();
						playNum = 0;
						$(".rest text").html("5");
					} else {
						timer();
					}
					var rest = 5 - playNum;
					$(".rest text").html(rest);
					$(".line_dir").css("transform","rotate(0deg)")
				}, 3000)
				comeinFlag = false;
			}

		}
	})

	//hidePop
	$(".pop").on("touchend", function() {
		clearInterval(setTime);
		setTime = null;
		$(".timer text").html("");
		time_used = 0;
		$(".timer").hide();
		$(".pop").hide();
		$(".goal").hide();
		setTimeout(function() {
			$(".pop").hide();
			$(".goal").hide();
			winAudio.pause();
			clearInterval(setTime);
			setTime = null;
			time_used = 0;
			$(".timer text").html("");
			$(".timer").hide();
			timer();
		}, 2000);
		if(play_main == true) {
			play_main = false;
		} else {
			play_main = true;
		}

		if(door_main == false) {
			door_main = true;
		} else {
			door_main = false;
		}

	})

	//********************-----“模拟踢球===》主动守球”------*******************************		
	//注：不计分
	//注：算回合：5
	//注：5秒不出动作，随便判方向
	//注：随机的出球方向   
	//注：守门方向滑动控制    p-->person,m-->mouse 170-190:中，左：>240，右：<120
	//Action:
	//step1:滑动方向 ，守球方向控制

	var protect_num = 0;
	var door_angle;
	$(".door_men").on("touchmove", function(event) {
		if(door_main == true) {
			clearInterval(setTime);
			setTime = null;
			time_used = 0;
			$(".timer text").html("");
			$(".timer").hide();
		}
		if(door_main == true && time_used == 0) {
			console.log(event);
			var mx = event.originalEvent.changedTouches[0].clientX,
				my = event.originalEvent.changedTouches[0].clientY,
				px = document.documentElement.clientWidth / 2,
				py = event.target.offsetTop - event.target.offsetHeight / 2,
				flag = 2;
			//	   getAngle(px,py,mx,my);
			var x = Math.abs(px - mx);
			var y = Math.abs(py - my);
			var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
			var cos = y / z;
			var radina = Math.acos(cos); //用反三角函数求弧度
			var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

			if(mx > px && my > py) { //鼠标在第四象限
				angle = 180 - angle;
			}

			if(mx == px && my > py) { //鼠标在y轴负方向上
				angle = 180;
			}

			if(mx > px && my == py) { //鼠标在x轴正方向上
				angle = 90;
			}

			if(mx < px && my > py) { //鼠标在第三象限
				angle = 180 + angle;
			}

			if(mx < px && my == py) { //鼠标在x轴负方向
				angle = 270;
			}

			if(mx < px && my < py) { //鼠标在第二象限
				angle = 360 - angle;
			}

			//          return angle;
			$(".door_men .line_dir").css("transform", "rotate(" + angle + "deg)");
			door_angle = angle;
		}

	})

	$(".door_men").on("touchend", function() {
		shaoAudio.play();
		var origin = [(document.documentElement.clientWidth - document.querySelector(".box").clientWidth) / 2,
				$(window).height() - $(".maxBox").height()
			];
		if(door_main == true) {
			clearInterval(setTime);
			setTime = null;
			time_used = 0;
			$(".timer text").html("");
			$(".timer").hide();
			
			var small_man=[$(".direction").offset().left,$(".direction").offset().top];
			$(".direction").css({
				"left":origin[0]+'px',
				"top":"29rem",
				"animation":"none",
			})
		}
		if(door_main == true && time_used == 0) {
			protect_num++;
			var ball_dir_random = Math.round(4 * Math.random());
			//*****-------step2:随机的出球方向-------------------
			//获取三个接点的坐标
          
			var dleftX = $(".dleft").offset().left;
			var dleftY = $(".dleft").offset().top;

			var dcenterX = $(".dcenter").offset().left;
			var dcenterY = $(".dcenter").offset().top;

			var drightX = $(".dright").offset().left;
			var drightY = $(".dright").offset().top;

			//两点失误球位置
			var missleftX = $(".missL").offset().left;
			var missleftY = $(".missL").offset().top;

			var missrightX = $(".missR").offset().left;
			var missrightY = $(".missR").offset().top;
			var q_h= Number($(".box").height())+dleftY;
			if(ball_dir_random == 0) {
				//左外
				$(".box").animate({
					left: missleftX,
					top: missleftY+t_h,
					width: "3rem",
					height: "3rem",
					lineHeight: "3rem",
					fontSize: "1.02rem",
				}, 2000)
				comeSuccess=false;
			} else if(ball_dir_random == 1) {
				//左
			
				comeSuccess=true;
			} else if(ball_dir_random == 2) {
				//中
				
				comeSuccess=true;
			} else if(ball_dir_random == 3) {
				//右
				comeSuccess=true;
			} else if(ball_dir_random == 4) {
				//右外
				$(".box").animate({
					left: missrightX,
					top: missrightY,
					width: "3rem",
					height: "3rem",
					lineHeight: "3rem",
					fontSize: "1.02rem",
				}, 2000)
				comeSuccess=false;
			}
			//*****-------step3:守门员的位置------------------------
			var men_w = $(".door_men").width();
			var men_h = $(".door_men").height();
			console.log(door_angle)
			if(door_angle > 190) {
				//左
				$(".door_men").animate({
					left: dleftX,
					top: dleftY
				}, 2000);
				ren_dir=1;
			} else if(door_angle < 170) {
				//右
				$(".door_men").animate({
					left: drightX,
					top: drightY
				}, 2000);
				ren_dir=2;
			} else if(170 < door_angle && door_angle < 190) {
				//中
				$(".door_men").animate({
					left: dcenterX,
					top: dcenterY
				}, 2000);
				ren_dir=3;
			}
			
//			ball_dir_random,0-4
//			ren_dir:1-3
			
			if(comeSuccess==true){
						//dirFlag:1:you  
						if(ball_dir_random==1&&ren_dir==1&&comeSuccess==true){
							//同左
							$(".box").animate({
							left: dleftX,
							top: dleftY,
							width: "3rem",
							height: "3rem",
							lineHeight: "3rem",
							fontSize: "1.02rem",
						}, 2000)
							
						}else if(ball_dir_random==1&&(ren_dir==2||ren_dir==3)){
							$(".box").animate({
							left: dleftX,
							top: dleftY+t_h,
							width: "3rem",
							height: "3rem",
							lineHeight: "3rem",
							fontSize: "1.02rem",
						}, 2000)
							goal++;
							zhong_qiu=true;
						}
						
						if(ball_dir_random==2&&ren_dir==3&&comeSuccess==true){
							//中
							$(".box").animate({
								left: dcenterX,
								top: dcenterY,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
						}else if(ball_dir_random==2&&(ren_dir==1||ren_dir==2)){
								//中
							$(".box").animate({
								left: dcenterX,
								top: dcenterY+t_h,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							goal++;
							zhong_qiu=true;
						}
						
						if(ball_dir_random==3&&ren_dir==2&&comeSuccess==true){
							//同zhong
										//右
							$(".box").animate({
								left: drightX,
								top: drightY,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							
						}else if(ball_dir_random==3&&(ren_dir==1||ren_dir==3)){
										//右
							$(".box").animate({
								left: drightX,
								top: drightY+t_h,
								width: "3rem",
								height: "3rem",
								lineHeight: "3rem",
								fontSize: "1.02rem",
							}, 2000)
							goal++;
							zhong_qiu=true;
							
						}
						//接球人的位置与球到时的位置判断，坐标于误差5px，则守球成功，
						//计分：守球成功则不得分，守球失败则累计一分；
		
						//step1:获取两方位置：
						//step2:位置计算：
					
				}
			
			
			//*****-------step4：归位，算局数------------------------
			var sx = document.documentElement.clientWidth-$("#catchBall").offset().left-$(".door_men").width()
	var door_men_origin = [sx/2,
		"4rem"
	];
	
	
	
	
			setTimeout(function() {
				if(zhong_qiu==true){
						winAudio.play();
					}
			
				$(".direction").css({
					"left": origin[0] + 'px',
					"top": small_man[1] + 'px',
					"animation":" run 2s ease-in-out 1s infinite",
				})
				$(".box").css({
					"left": origin[0] + 'px',
					"top": "29rem",
					"width": "4rem",
					"height": "4rem",
					"line-height": "4rem",
					"font-size": "1.18rem"
				});
				$(".door_men").css({
					"left": door_men_origin[0] + 'px',
					"top": "4rem"
				})
				$(".door_men div").css("tansform", "rotate(0deg)");
				//踢球次数==5
				if(goal == 0) {
					$(".totalGoal text").html(0);
				} else {
					$(".totalGoal text").html(goal);
				}
				if(protect_num == 5) {
					roundNum++;
					$(".rest text").html("5");
					$(".round text").html(roundNum);
					clearInterval(setTime);
					setTime = null;
					time_used = 0;
					$(".timer text").html("");
					$(".timer").hide();
					protect_num = 0;

					$(".pop").show();
					$(".goal").animate().show();
					$(".goal text").html(goal);
					$(".goal span").html("本轮游戏结束！");
					if(roundNum>1){
						$.ajax({
		                      type:"post",
		                      url:"https://www.bozhiyingxiao.com/little_program/football/info.php",
		                      data:{score:goal},
		   					  success:function(){
		                       location.href="https://www.bozhiyingxiao.com/little_program/football/second.php"
		  					 }
		
		
		                  })
						
					}
				} else {
					timer();
				}
				var rest = 5 - protect_num;
				$(".rest text").html(rest);
			}, 2400);
		}

	})

	//step3:如果

	function getAngle(px, py, mx, my, flag) { //获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
		var x = Math.abs(px - mx);
		var y = Math.abs(py - my);
		var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
		var cos = y / z;
		var radina = Math.acos(cos); //用反三角函数求弧度
		var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

		if(mx > px && my > py) { //鼠标在第四象限
			angle = 180 - angle;
		}

		if(mx == px && my > py) { //鼠标在y轴负方向上
			angle = 180;
		}

		if(mx > px && my == py) { //鼠标在x轴正方向上
			angle = 90;
		}

		if(mx < px && my > py) { //鼠标在第三象限
			angle = 180 + angle;
		}

		if(mx < px && my == py) { //鼠标在x轴负方向
			angle = 270;
		}

		if(mx < px && my < py) { //鼠标在第二象限
			angle = 360 - angle;
		}

		//          return angle;
		$(".box .line_dir").css("transform", "rotate(" + angle + "deg)");
		console.log(angle)
		door_angle = angle;

	}

	//倒计时下：

	//函数：自动判方向，踢和守：（即模踢球，也模拟了守球）
	function tocomic(hit_lo, ca_lo) {
		shaoAudio.play();
		var origin = [(document.documentElement.clientWidth - document.querySelector(".box").clientWidth) / 2,
			"29rem"
		];
		//******************模拟踢球************************
		var small_man=[$(".direction").offset().left,$(".direction").offset().top];
		
			$(".direction").css({
				"left":origin[0]+'px',
				"top":"29rem",
				"animation":"none",
			})
		
		//获取三个接点的坐标
		var dleftX = $(".dleft").offset().left;
		var dleftY = $(".dleft").offset().top;

		var dcenterX = $(".dcenter").offset().left;
		var dcenterY = $(".dcenter").offset().top;

		var drightX = $(".dright").offset().left;
		var drightY = $(".dright").offset().top;

		//两点失误球位置
		var missleftX = $(".missL").offset().left;
		var missleftY = $(".missL").offset().top;

		var missrightX = $(".missR").offset().left;
		var missrightY = $(".missR").offset().top;
 var q_h= Number($(".box").height())+dleftY;
 comeSuccess = true;
		if(hit_lo == 0) {
			//左外
			$(".box").animate({
				left: missleftX+"px",
				top: missleftY+"px",
				width: "3rem",
				height: "3rem",
				lineHeight: "3rem",
				fontSize: "1.02rem",
			}, 2000);
			comeSuccess = false;
		} 
//		else if(hit_lo == 1) {
//			//左
//			comeSuccess = true;
//			
//		} 
//		else if(hit_lo == 2) {
//			//中
//			
//			comeSuccess = true;
//			
//		} else if(hit_lo == 3) {
//			//右
//			
//			comeSuccess = true;
//			
//		}
		else if(hit_lo == 4) {
			//右外
			$(".box").animate({
				left: missrightX+"px",
				top: missrightY+"px",
				width: "3rem",
				height: "3rem",
				lineHeight: "3rem",
				fontSize: "1.02rem",
			}, 2000)
			comeSuccess = false;
		}else{
			comeSuccess = true;
		}
		//******************模拟守球*********************
		var men_w = $(".door_men").width();
		var men_h = $(".door_men").height();
		if(ca_lo == 0) {
			//左
			$(".door_men").animate({
				left: dleftX,
				top: dleftY
			}, 2000);
			door_men_lo_x = dleftX;
			door_men_lo_y = dleftY;
		} else if(ca_lo == 1) {
			//中
			$(".door_men").animate({
				left: dcenterX,
				top: dcenterY
			}, 2000);
			door_men_lo_x = dcenterX;
			door_men_lo_y = dcenterY;
		} else {
			//右
			$(".door_men").animate({
				left: drightX - men_w,
				top: drightY
			}, 2000);
			door_men_lo_x = drightX;
			door_men_lo_y = drightY;
		}

		//接球人的位置与球到时的位置判断，坐标于误差5px，则守球成功，
		//计分：守球成功则不得分，守球失败则累计一分；

if(comeSuccess==true){
	//step1:获取两方位置：
			//dirFlag:1:you  
				if(hit_lo==3&&ca_lo==2){
					shaoAudio.pause();
					$(".box").animate({
						left: drightX+"px",
						top: drightY+'px',
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000);
					comeSuccess = true;
					ball_lo_x = drightX;
					ball_lo_y = drightY;
				}else if(hit_lo==3&&(ca_lo==0||ca_lo==1)){
					$(".box").animate({
						left: drightX+"px",
						top: q_h,
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000);
					comeSuccess = true;
					ball_lo_x = drightX;
					ball_lo_y = drightY;
					goal++;
					zhong_qiu=true;
				}
				// 1:zuo
				if(hit_lo==1&&ca_lo==0){
					shaoAudio.pause();
					$(".box").animate({
						left: dleftX+"px",
						top: dleftY+'px',
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000);
					comeSuccess = true;
					ball_lo_x = dleftX;
					ball_lo_y = dleftY;
				}else if(hit_lo==1&&(ca_lo==2||ca_lo==1)){
					
					$(".box").animate({
						left: dleftX+"px",
						top: q_h,
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000);
					comeSuccess = true;
					goal++;
					zhong_qiu=true;
				}
				// 1:zuo
				if(hit_lo==2&&ca_lo==1){
							//中
					$(".box").animate({
						left: dcenterX+"px",
						top: dcenterY+'px',
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000);
					comeSuccess = true;
					ball_lo_x = dcenterX;
					ball_lo_y = dcenterY;
					
				}else if(hit_lo==2&&(ca_lo==0||ca_lo==2)){
					
					$(".box").animate({
						left: dcenterX+"px",
						top: q_h,
						width: "3rem",
						height: "3rem",
						lineHeight: "3rem",
						fontSize: "1.02rem",
					}, 2000);
					comeSuccess = true;
					goal++;
					zhong_qiu=true;
				}
}
		

		//*****-------step4：归位，算局数------------------------
		var sx = document.documentElement.clientWidth-$("#catchBall").offset().left-$(".door_men").width()
	var door_men_origin = [sx/2,
		"4rem"
	];
		setTimeout(function() {
//			crash=null;
			if(zhong_qiu==true){
				winAudio.play()
			}
			if(play_main == true) {
				playNum++;
			}
			if(door_main == true) {
				protect_num++;
			}
			$(".door_men").css({
					"left": door_men_origin[0] + 'px',
					"top": "4rem"
				})
			$(".direction").css({
					"left": origin[0] + 'px',
					"top":small_man[1]+'px',
					"animation":" run 2s ease-in-out 1s infinite",
			})
			$(".box").css({
				"left": origin[0] + 'px',
				"top": "29rem",
				"width": "3.5rem",
				"height": "3.5rem",
				"line-height": "3.5rem",
				"font-size": "1.18rem"
			});
			
			//踢球次数==5
			if(goal == 0) {
				$(".totalGoal text").html(0);
			} else {
				$(".totalGoal text").html(goal);
			}
			//剩余数量显示：
			if(play_main == true && door_main == false) {
				if(playNum == 5) {
					$(".pop").show();
					$(".goal").animate().show();
					$(".goal text").html(goal);
					$(".goal span").html("踢球环节结束，该你守球啦！");

					clearInterval(setTime);
					setTime = null;
					time_used = 0;
					$(".timer text").html("");
					$(".timer").hide();
					playNum = 0;
					$(".rest text").html("5");
				} else {
					timer();
				}
				var rest = 5 - playNum;
				$(".rest text").html(rest);
			} else if(play_main == false && door_main == true) {
				if(protect_num == 5) {
					roundNum++;
					$(".round text").html(roundNum);
					clearInterval(setTime);
					setTime = null;
					time_used = 0;
					$(".timer text").html("");
					$(".timer").hide();
					protect_num = 0;
					$(".rest text").html("5");
					$(".pop").show();
					$(".goal").animate().show();
					$(".goal text").html(goal);
					$(".goal span").html("本轮游戏结束！");
					if(roundNum>1){
						$.ajax({
	                      type:"post",
	                      url:"https://www.bozhiyingxiao.com/little_program/football/info.php",
	                      data:{score:goal},
						   success:function(){
						          location.href="https://www.bozhiyingxiao.com/little_program/football/second.php"
						   }
						
						
						})
					}
				} else {
					timer();
				}
				var rest = 5 - protect_num;
				$(".rest text").html(rest);
			}
			//				if ($(".pop").display=="block") {
			//					clearInterval(timer);
			//				} else{
			//					
			//				}
		}, 2400);
	}
	
	

})