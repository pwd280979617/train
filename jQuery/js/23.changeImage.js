$(function(){
    var $div1 = $('#div1')
    var $div2 = $('#div2')
    var $btn1 = $('#btn1')
    var $btn2 = $('#btn2')
    var $box1 = $('#box1')
    var pageTime = 400 //总的翻页时间
    var itemTime = 30 //单位翻页时间
    var offsetLeft = 600 //图片宽度
    var imgNumber = $('#div2>img').length
    

    //1.点击向左向右按钮平滑切换图片
    //2.无线循环切换,第一页的上一页为最后一页,最后一页的下一页为第一页
    //3.每3秒自动切换到下一页
    //4.当鼠标进入图片区域是,图片切换自动停止,当鼠标离开是开始切换
    //5.切换页面时下面的点同步切换
    //6.点击点图标切换到对应的图片

    //1.点击向左向右按钮平滑切换图片
    $btn1.click(function(){
        pageNext(false);
    })
    
    $btn2.click(function(){
        pageNext(true);
    })


    //2.无线循环切换,第一页的上一页为最后一页,最后一页的下一页为第一页
    function pageNext (next){
        var currentLeft  = $div2.position().left //获取当前偏移量
        var offset =  next ? -offsetLeft : offsetLeft //判断向左向右
        var targetLeft = currentLeft + offset //计算移动目标偏移量
        var itemLeft = offset/(pageTime/itemTime) //计算单位便宜距离
        var  timer = setInterval(function(){
            currentLeft = currentLeft+itemLeft
            if(next ? currentLeft <= targetLeft : currentLeft >= targetLeft){
                clearInterval(timer)
                currentLeft = targetLeft
                if(currentLeft === -(imgNumber-1)*offsetLeft){
                    currentLeft = -offsetLeft
                } else if (currentLeft === 0){
                    currentLeft = -(imgNumber-2)*offsetLeft
                }
            }
            $div2.css('left',currentLeft)
        },itemTime)
    }
    
    //3.每3秒自动切换到下一页
    var timer1 = setInterval(function(){
        pageNext(true);
    },3000)

    //4.当鼠标进入图片区域是,图片切换自动停止,当鼠标离开是开始切换
    $div1.hover(function(){
        clearInterval(timer1);
    },function(){
        timer1 = setInterval(function(){
            pageNext(true);
        },3000)
    })

})