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
    move-panel 鼠标划过move-title时，显示不同的内容
    */
    $(".recommend .move-panel .move-title li").each(function(i) {
        $(this).mouseover(function() {
            $(this).css("color", "#35b558");
            $(this).siblings().css("color", "#333");
            $(".recommend .move-panel .move-content ul").eq(i).show();
            $(".recommend .move-panel .move-content ul").eq(i).siblings().hide();
        });
    });

    /*在划过recommend的前四个时，显示move-panel*/
    $(".recommend >ul>li").each(function(i) {
        if (i < 4) {
            $(this).mouseover(function() {
                $(".recommend .move-panel").show();
            });
        }
    });
    /*在划出move-panel,隐藏自己*/
    $(".recommend").mouseout(function(){
    	$(".recommend .move-panel").hide();
    });


    /*
    focuswork
    点击向左向右的箭头，到达一个循环滚动的效果。
    */
    var focuswork_list_cur = -559.5;
    var focuswork_list_offer = 186.5;
    var focuswork_list_max = ($(".lesson-center-focus .focuswork .content").width() - $(".lesson-center-focus .focuswork .content-shell").width()) * -1;
    var isEdge = 0; //-1左边缘 0没有在边缘 1右边缘

    $("#banner-left1").click(function() {
        focuswork_list_cur = focuswork_list_cur + focuswork_list_offer;
        isEdge = 0;
        if (focuswork_list_cur > 0) {
            focuswork_list_cur = -932.5
            isEdge = -1;
        }
        focuswork_list_roll();
    });

    $("#banner-right1").click(function() {
        focuswork_list_cur = focuswork_list_cur - focuswork_list_offer;
        isEdge = 0;
        if (focuswork_list_cur < focuswork_list_max) {
            focuswork_list_cur = -559.5
            isEdge = 1;
        }
        focuswork_list_roll();
    })

    function focuswork_list_roll() {
        /*alert("focuswork_list_cur=" + focuswork_list_cur);*/
        if (isEdge == -1) {
            $(".lesson-center-focus .focuswork .content").removeAttr("style");
            focuswork_list_cur = focuswork_list_cur + focuswork_list_offer;
            $(".lesson-center-focus .focuswork .content").
            css({ "animation": "focusworkAniLeft 0.5s linear forwards" }).
            css("transform", "translate3d(" + focuswork_list_cur + "px,0,0)");
        } else if (isEdge == 1) {
            $(".lesson-center-focus .focuswork .content").removeAttr("style");
            /*$(".lesson-center-focus .focuswork .content").css("transform","translate3d(" + focuswork_list_cur + "px,0,0)");*/
            $(".lesson-center-focus .focuswork .content").css({ "transform": "translate3d(" + focuswork_list_cur + "px,0,0)" });
        } else {
            $(".lesson-center-focus .focuswork .content").removeAttr("style");
            /*$(".lesson-center-focus .focuswork .content").css({ "transform": "translate3d(" + focuswork_list_cur + "px,0,0)", "transition": "all .5s linear " });*/
            $(".lesson-center-focus .focuswork .content").css({ "transform": "translate3d(" + focuswork_list_cur + "px,0,0)", "transition": ".5s" });
        }
    }

    /*
    medias-list
    点击向左向右的箭头，到达一个滚动的效果。
    */
    var medias_list_cur = -958;
    var medias_list_offer = 160;
    var medias_list_max = ($(".medias .medias-list .content").width() - $(".medias .medias-list .content-shell").width()) * -1;
    /*alert(enterprise_list_max);*/
    $("#banner-left5").click(function() {
        medias_list_cur = medias_list_cur + medias_list_offer
        if (medias_list_cur > 0) {
            medias_list_cur = 0;
        }
        medias_list_roll();
    });

    $("#banner-right5").click(function() {
        medias_list_cur = medias_list_cur - medias_list_offer
        if (medias_list_cur < medias_list_max) {
            medias_list_cur = medias_list_max;
        }
        medias_list_roll();
    });

    function medias_list_roll() {
        $(".medias .medias-list .content").css("transform", "translate3d(" + medias_list_cur + "px,0,0)");
    }

    /*
    schools-list
    点击向左向右的箭头，到达一个滚动的效果。
    */
    var schools_list_cur = -958;
    var schools_list_offer = 137;
    var schools_list_max = ($(".schools .schools-list .content").width() - $(".schools .schools-list .content-shell").width()) * -1;
    /*alert(enterprise_list_max);*/
    $("#banner-left4").click(function() {
        schools_list_cur = schools_list_cur + schools_list_offer
        if (schools_list_cur > 0) {
            schools_list_cur = 0;
        }
        schools_list_roll();
    });

    $("#banner-right4").click(function() {
        schools_list_cur = schools_list_cur - schools_list_offer
        if (schools_list_cur < schools_list_max) {
            schools_list_cur = schools_list_max;
        }
        schools_list_roll();
    });

    function schools_list_roll() {
        $(".schools .schools-list .content").css("transform", "translate3d(" + schools_list_cur + "px,0,0)");
    }

    /*enterprise-list
    点击向左向右的箭头，到达一个滚动的效果。
    其中.content-shell是展示下面滚动画面的窗口
    */
    var enterprise_list_cur = -1277.33;
    var enterprise_list_offer = 159.66;
    var enterprise_list_max = ($(".enterprise .enterprise-list .content").width() - $(".enterprise .enterprise-list .content-shell").width()) * -1;
    /*alert(enterprise_list_max);*/
    $("#banner-left3").click(function() {
        enterprise_list_cur = enterprise_list_cur + enterprise_list_offer
        if (enterprise_list_cur > 0) {
            enterprise_list_cur = 0;
        }
        enterprise_list_roll();
    });

    $("#banner-right3").click(function() {
        enterprise_list_cur = enterprise_list_cur - enterprise_list_offer
        if (enterprise_list_cur < enterprise_list_max) {
            enterprise_list_cur = enterprise_list_max;
        }
        enterprise_list_roll();
    });


    function enterprise_list_roll() {
        $(".enterprise .enterprise-list .content").css("transform", "translate3d(" + enterprise_list_cur + "px,0,0)");
    }

    /*
    wiki中li元素mouseover,改变自己的border颜色，同时修改自己相邻元素的border
    避免造成li元素内容不稳定
    1.li元素在初始化时候除第一个元素有border-left,其他兄弟元素都没有。
    2.在鼠标滑过时将本元素的right,top,bottom改变颜色。
    3.如果不存在前一个元素侧修改自己的left,否则修改前元素的right
    */
    $(".wiki .wikibox >ul>li").mouseover(function() {
        $(this).css({
            "border-right": "1px solid rgb(53, 181, 88)",
            "border-top": "1px solid rgb(53, 181, 88)",
            "border-bottom": "1px solid rgb(53, 181, 88)"
        });
        if ($(this).prev().length == 0) {
            $(this).css({
                "border-left": "1px solid rgb(53, 181, 88)"
            });
        } else {
            $(this).prev().css("border-right", "1px solid rgb(53, 181, 88)");
        }

    });

    $(".wiki .wikibox >ul>li").mouseout(function() {
        $(this).removeAttr("style");
        if ($(this).prev().length != 0) {
            $(this).prev().removeAttr("style");
        }
    });

    /*
    wiki中，鼠标mouseover过书的封面
    1.显示左上角的“看一看”
    2.img沿着最左侧Y轴旋转一定20deg.
    mouseout时恢复原状
    */
    $(".wiki .wikibox >ul>li .content .cover li a .imgbox .fengmian").mouseover(function() {
        $(this).parent().children(".look").show();
        $(this).css({ "transform": "rotatey(20deg)" });
    });

    $(".wiki .wikibox >ul>li .content .cover li a .imgbox .fengmian").mouseout(function() {
        $(this).parent().children(".look").hide();
        $(this).css({ "transform": "rotatey(0)" });
    });


    /*
    知识体系图实现mouseover翻转背面，mouseout再翻转的正面。
    */
    $(".system .mapbox ul li a").mouseover(function() {
        $(this).children(".front").css({ "transform": "rotatey(180deg)" });
        $(this).children(".back").css({ "transform": "rotatey(-360deg)" });
    });

    $(".system .mapbox ul li a").mouseout(function() {
        $(this).children(".back").css({ "transform": "rotatey(-180deg)" });
        $(this).children(".front").css({ "transform": "rotatey(360deg)" });
    });


    /*
    对职业路径模块和知识体系图question-icon 
    鼠标进过，显示question-mark
    鼠标out，隐藏
    有淡入淡出效果
    */
    $(".learn-way .learn-way-title .question-icon").mouseover(function() {

        if ($(this).parent().children(".question-mark").is(":animated")) {
            $(this).parent().children(".question-mark").stop();
        }
        $(this).parent().children(".question-mark").animate({
            marginLeft: '2px',
            opacity: '1'
        }, "slow");
    });

    $(".learn-way .learn-way-title .question-icon").mouseout(function() {

        if ($(this).parent().children(".question-mark").is(":animated")) {
            $(this).parent().children(".question-mark").stop();
        }
        $(this).parent().children(".question-mark").animate({
            marginLeft: '0',
            opacity: '0'
        }, "slow");
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
