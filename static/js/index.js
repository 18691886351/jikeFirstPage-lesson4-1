$(document).ready(function() {

	/*遍历每一个menu，按照menu的遍历顺序，对应不同的.panel-item
	1.每个menu,mouseover与moseout事件的实现
	*/
    $(".navbox .menu").each(function(i) {
        $(this).mouseover(function() {
            $(this).css("color", "#35b558"); //改变menu的字体颜色
            if (i != 0) {
                $(".navpanel .panel-item:eq(" + (i - 1) + ") .angle").show(); //对应的panel-item 箭头进行显示
                $(".navpanel .panel-item:eq(" + (i - 1) + ")").css("background-color", "rgb(247,247,247)"); //改变背景显色
            }

        });
        $(this).mouseout(function() {
            $(this).css("color", "#333");
            if (i != 0) {
                $(".navpanel .panel-item:eq(" + (i - 1) + ") .angle").hide(); //对应的panel-item 箭头进行隐藏
                $(".navpanel .panel-item:eq(" + (i - 1) + ")").css("background-color", "#fff");
            }
        });
    });

    /*
    点击pagination中的span，滚动到指定的页面。
    1.switch1,对应滚动面板2
	  switch2,对应滚动面板3
	  以此类推
	2.改变自己的background为绿色，并还原其他的switch背景颜色为白色
    */

   	var offer = 560;
    var max = -4480+560;
    var cur = -560;

    $(".lesson-center-focus .index-banner .pagination .switch").each(function(i){
    	$(this).click(function(){
    		/*将自己的背景改变*/
    		/*$(this).css("background","url(./static/images/swiper2_78fab30.jpg) center center no-repeat");*/
    		/*修改同胞元素*/
    		/*$(this).siblings().css("background","url(./static/images/swiper1_6a811bf.jpg) center center no-repeat");*/
			/*changeSwitch($(this));*/
			cur=(i+1)*-1*offer;
    		/*alert(_cur);*/
    		/*$(".lesson-center-focus .index-banner .content").css({"transform":"translate3d(" + _cur + "px, 0px, 0px)","transition":"all 1s ease-in"});*/
    		changeContent();
    	});
    });
     
    function changeSwitch(obj){
    	/*将自己的背景改变*/
    	obj.css("background","url(./static/images/swiper2_78fab30.jpg) center center no-repeat");
    	/*修改同胞元素*/
    	obj.siblings().css("background","url(./static/images/swiper1_6a811bf.jpg) center center no-repeat");
    	
    }

    /*
    1.对lesson-center-focus的content自动进行滚屏
    2.根据_cur的值,来对应switch。
    */
    setInterval(circulation,100000);

    function circulation(){
    	changeContent();
    	cur = cur - offer;
    }

    function changeContent() {

    
    	/*对应到相应的switch*/
    	var _switchIdx=Math.abs(cur/offer);
    	var _obj;

		if(_switchIdx>=7){/*视觉循环*/
    		_obj=$(".lesson-center-focus .index-banner .pagination .switch").eq(0);
    		changeSwitch(_obj);
    	}
    	else{
    		_obj=$(".lesson-center-focus .index-banner .pagination .switch").eq(_switchIdx-1);
    		changeSwitch(_obj);
    	}
   		

        if (cur >= max) {
            $(".lesson-center-focus .index-banner .content").css({"transform":"translate3d(" + cur + "px, 0px, 0px)","transition":"all 1s ease-in"});
        }else {
            cur=-560;
            $(".lesson-center-focus .index-banner .content").removeAttr("style");
            $(".lesson-center-focus .index-banner .content").css("transform","translate3d(" + cur + "px, 0px, 0px)");
        };
        
    }

    /*
    1.点击lesson-center-focus左箭头与右箭头完成滚动
    */
    $("#banner-left").click(function(){
    	changeContent();
    	cur=cur+offer;
    });

});
