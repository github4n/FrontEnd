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
	$(".fir_ti ul li").click(function(){
		$(".fir_main").html("");
		var url;
		$(this).addClass("active").siblings().removeClass("active");
		var dec=$(this).index();
		if (dec==0) {
			url="";
		} else if (dec==1){
			url="";
		}
		$.ajax({
			type:"get",
			url:url,
			data:{index:dec},
			success:function(res){
				var list=res.list;
				for (var i=0;i<list.length;i++) {
					$(".fir_main").append('<li><div class="fir_num">'+list[i].num
					+'</div><div class="fir_intro"><div class="headimg"><img src="'+list[i].src
	           		+'" /></div><div class="nickname">'+list[i].name
	           		+'</div></div><div class="single_score">'+list[i].score
	           		+'分</div></li>')
				}
			}
		});
	})
	
	
$("#join").click(function(){
	location.href="three.html"
})

$("#play").click(function(){
	location.href="index.html"
})