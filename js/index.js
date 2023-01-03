$(document).ready(function(){//시작

    //섹션 분할하기
    $(document).ready(function() {
        $('#fullpage').fullpage({
            sectionsColor: ['#fff6ef', '#fff6ef', '#fff6ef', '#fff6ef', '#ffffff', '#ffffff']//,
            // $('#fullpage').css({"height": "100vh", "width":"100vw"});
            // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
        });
    });	
    
	// 배너 애니메이션	
	setInterval( move , 2500);
	let i = 0;
	let x = 3;

	function move(){
		//동그라미 위치이동
		i++;
		if(i > 3){ i = 0; }		
		$("#pos div").removeClass("dodgerblue");
		$("#pos div").eq(i).addClass("dodgerblue");
		
        //뒷배경 페이드인/아웃 [이거 1번 이미지 뒤로 빼야함 마지막에 이미지 없어짐]
        if( $("#wineBg img").eq(1).css("display") == "none" ){
            $("#wineBg img").fadeIn(800);
            x = 3;
        } else {
            $("#wineBg img").eq(x).fadeOut(1000);
            x--;
        }

        //와인 좌우슬라이드 wine이미지 가로방향 정렬 후 overflow hidden으로 감춰두기
        // function bast(){
            $("#wine-img").animate({left:"-1000px"},1000, function(){
                $(this).append(  $(this).children().first() );
                $(this).css("left" , 0);
            });
        // }

	}	
	
	
    //2번째 섹션 슬라이드
    setInterval( bast, 1800);
				function bast(){
					$("#bastList_img").animate({left:"-436px"},1000, function(){
						$(this).append(  $(this).children().first() );
						$(this).css("left" , 0);
					});
				}

    //3번째 애니메이션으로 와인병 위레서 아래로 움직이기

    //4번째 섹션 아래에서 위로 튀어나오기


















});