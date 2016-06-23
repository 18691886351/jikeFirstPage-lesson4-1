$(document).ready(function() {
    /*
    遍历导航条的每一个menu，按照menu的遍历顺序，对应不同的.panel-item
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
    鼠标划过hot-lession时,改变该栏目的样式，还原其他栏目的样式
    并显示对应hot-lessionbox中的lession-list，并隐藏其他兄弟元素。
    */
    $(".hot-lessionbox .lession-list").eq(0).show();
    $(".hot-lessionbox .lession-list").eq(0).siblings().hide();

    $(".hot-lession ul li").each(function(i) {
        $(this).mouseover(function() {
        	/*alert(i);*/
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
            $(".hot-lessionbox .lession-list").eq(i).show();
            $(".hot-lessionbox .lession-list").eq(i).siblings().hide();
        });
    });

    /*
	.hot-lessionbox ul li .lession-info
	鼠标在mouseover其中一个lession时,显示level_info和numberinfo,文字段落向下滑动
	鼠标在mouseout其中一个lession时,隐藏level_info和numberinfo，文字段落向上收起
    */
    $(".hot-lessionbox ul li .lession-info").each(function() {
        $(this).mouseover(function() {
            $(this).children(".timeandlevel").children(".level-info").show();
            $(this).children(".timeandlevel").children(".number-info").show();
            /*if (!$(this).children("p").is(":animated")) {
                $(this).children("p").slideDown();
            }*/
            if ($(this).children("p").is(":animated")) {
                $(this).children("p").stop();
            }
            $(this).children("p").slideDown("fast");
        });
        $(this).mouseout(function() {
            $(this).children(".timeandlevel").children(".level-info").hide();
            $(this).children(".timeandlevel").children(".number-info").hide();
            /* 
            if (!$(this).children("p").is(":animated")) {
                            $(this).children("p").slideUp();
            }*/
            if ($(this).children("p").is(":animated")) {
                $(this).children("p").stop();
            }
            $(this).children("p").slideUp("fast");
        });
    });
    /*
    .index-banner content的滚动。
    0 1 2 3 4 5 6 7
    0 1 2 3 4 5 6 7 8
    0=0
    1=-560
    2=-1120
    3=-1680
    4=-2240
    5=-2800
    6=-3360
    7=-3920
    其中0,6相同,1,7相同
    为了在视觉上实现循环滚动的效果。
    页面加载时，从1开始加载
    */
    var offer = 560;
    var max = 4480 - 560;
    var cur = 0;
    /*
    点击pagination中的span，滚动到指定的页面。
    1.switch0,对应滚动面板1
      switch1,对应滚动面板2
      ....
      switch5,对应滚动面板6
    2.改变自己的background为绿色，并还原其他的switch背景颜色为白色
    */
    $(".lesson-center-focus .index-banner .pagination .switch").each(function(i) {
        $(this).click(function() {
            /*将自己的背景改变*/
            /*$(this).css("background","url(./static/images/swiper2_78fab30.jpg) center center no-repeat");*/
            /*修改同胞元素*/
            /*$(this).siblings().css("background","url(./static/images/swiper1_6a811bf.jpg) center center no-repeat");*/
            /*changeSwitch($(this));*/
            cur = (i + 1) * -1 * offer;
            /*alert(_cur);*/
            /*$(".lesson-center-focus .index-banner .content").css({"transform":"translate3d(" + _cur + "px, 0px, 0px)","transition":"all 1s ease-in"});*/
            rollContent();
        });
    });

    function changeSwitch(obj) {
        /*将自己的背景改变*/
        obj.css("background", "url(./static/images/swiper2_78fab30.jpg) center center no-repeat");
        /*修改同胞元素*/
        obj.siblings().css("background", "url(./static/images/swiper1_6a811bf.jpg) center center no-repeat");

    }



    /*
    对lesson-center-focus的content自动进行滚屏
    自动循环滚动，content水平向左移动。视觉上图片向右移动。
    */
    setInterval(autoCirculation, 100000);

    function autoCirculation() {
        cur = cur - offer;
        rollContent();
    }

    /*
    1.switch与面板同步
    */
    function rollContent() {

        var _edge = 0; /*0非边缘，1边缘*/
        if (cur < (max * -1)) {
            cur = -560;
            _edge = 1;
        }
        if (cur > 0) {
            cur = -1 * (6 * offer);
            _edge = 1
        }
        /*0-7*/
        var _panel_idx = Math.abs(cur / offer) % 8;

        var _obj;
        var _cur;

        if (_panel_idx == 7) {
            _obj = $(".lesson-center-focus .index-banner .pagination .switch").eq(1 - 1);
        } else if (_panel_idx == 0) {
            _obj = $(".lesson-center-focus .index-banner .pagination .switch").eq(6 - 1);
        } else {
            _obj = $(".lesson-center-focus .index-banner .pagination .switch").eq(_panel_idx - 1);
        }
        changeSwitch(_obj);

        _cur = _panel_idx * (-1) * offer;
        /*alert("cur="+cur+" _cur="+_cur+" _edge="+_edge+"_panel_idx="+_panel_idx);*/
        if (_edge == 1) {
            $(".lesson-center-focus .index-banner .content").removeAttr("style");
            $(".lesson-center-focus .index-banner .content").css("transform", "translate3d(" + _cur + "px, 0px, 0px)");
        } else {
            $(".lesson-center-focus .index-banner .content").css({ "transform": "translate3d(" + _cur + "px, 0px, 0px)", "transition": "all 1s ease-in" });
        }

    }

    /*
    点击lesson-center-focus左箭头面板向左滚动
    */
    $("#banner-left").click(function() {
        cur = cur + offer;
        rollContent();
    });
    /*
    点击lession-center-focus右箭头面板向右滚动
    */
    $("#banner-right").click(function() {
        cur = cur - offer;
        rollContent();
    });
});
