$(".two_two").hide();
$(".rules").hide();
$(".second").hide();
$(".bat").hide();
$(".one_one .button").click(function(){
	$(".one_one").hide();
	$(".two_two").show();
	$(".rules").show();
})


$(".rules").click(function(){
	$(".one_one").hide();
	$(this).hide()
	$(".second").show();
})

setTimeout(function(){
    $(".button").css({
    	 "animation": "scale 1.5s linear .1s infinite",
    	/* Safari 与 Chrome: */
   		 "-webkit-animation": "scale 1.5s linear 2s infinite"
    })
    $(".butt").css({
    	 "animation": "scale 1.5s linear .1s infinite",
    	/* Safari 与 Chrome: */
   		 "-webkit-animation": "scale 1.5s linear 2s infinite"
    })
},100)
 
 
 
  	var choose_list=[{
			id:1,src:'img/second/1.png',name:'中国'
		},{id:2,src:'img/second/2.png',name:'中国'
		},{id:3,src:'img/second/3.png',name:'中国'
		},{id:4,src:'img/second/4.png',name:'中国'
		},{id:5,src:'img/second/5.png',name:'中国'
		},{id:6,src:'img/second/6.png',name:'中国'
		},{id:7,src:'img/second/7.png',name:'中国'
		},{id:8,src:'img/second/8.png',name:'中国'
		}];
	for (var i=0;i<choose_list.length;i++) {
		$(".area ul").append('<li data-id="'+choose_list[i].id
		+'"><img src="'+choose_list[i].src+'" /><div>'+choose_list[i].name+'</div></li>');
	}
	
	
	var myAudio=document.getElementById("myaudio");
	myAudio.autoplay=true;
	myAudio.loop =true;
	var player=true;
	myAudio.load();
	$(".music").on("click",function(){
	  if (myAudio.paused==true) {
	  	player=true;
	  	myAudio.play();
	  		$(this).css({"animation":"rotate 1s linear 1s infinite",
	  	"-webkit-animation":"rotate 1s linear 1s infinite"});
	  
	  }else{
	  		 myAudio.pause();
	  	  $(this).css("animation","none")
	  }
	  
	  
	});
	
	
	$(".butt").click(function(){
		$(".one_one").hide();
		$(".rules").hide();
		$(".second").hide();
		$(".bat").show();
		
		location.href="index.html";
	})
	




//微信登录
// 授权获取用户信息并入库
		// 获取微信授权 code
		
//var obj = new WxLogin({
//			 self_redirect:true,
//			 id:"login_container", 
//			 appid: "", 
//			 scope: "", 
//			 redirect_uri: "",
//			  state: "",
//			 style: "",
//			 href: ""
//		});
//		
//	wx.ready(function() {
//		//分享到好友
//		wx.onMenuShareAppMessage({
//			type: '', // 分享类型,music、video或link，不填默认为link
//			title: '来，测测你不为人知的另一面！',
//			desc: '不懂自己怎么装扮最美的家？',
//			link: 'https://www.bozhiyingxiao.com/six_space/index.php',
//			imgUrl: 'https://www.bozhiyingxiao.com/six_space/img/logo.jpg',
//			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//			/* trigger: function (res) {
//			 alert('用户点击发送给朋友');
//			 },*/
//			success: function (res) {
//		
//				//alert("好友助力分享成功");
//			},
//			/* cancel: function (res) {
//			 alert('已取消');
//			 },*/
//			fail: function (res) {
//				alert(JSON.stringify(res));
//			}
//		});
//		//分享到朋友圈
//		wx.onMenuShareTimeline({
//			title: '来，测测你不为人知的另一面！', // 分享标题
//			link: 'https://www.bozhiyingxiao.com/six_space/index.php', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//			imgUrl: 'https://www.bozhiyingxiao.com/six_space/img/logo.jpg', // 分享图标
//			success: function () {
//				// 用户确认分享后执行的回调函数
//				/* $.ajax({
//				 type:"post",
//				 data:{fenxiang:2},
//				 url:"info.php",
//				 dataType:"JSON",
//				 success:function(data){
//				 }
//				 })*/
//				//alert('已分享');
//			},
//			cancel: function () {
//				// 用户取消分享后执行的回调函数
//				//alert('已取消');
//			}
//		});

//	});