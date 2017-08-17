/**
 * Created by Evan_ on 2017/4/9.
 */
window.onload = function(){
    var libox = document.getElementById("imglibox");
    var childli = imglibox.children[0].children;
    var bigimgs = document.getElementsByName("img");
    var banner = document.getElementById("banner");
    var beginx = banner.offsetLeft;
    var currentx = banner.offsetLeft;
    var srcId=1;
    for(var i=0;i<childli.length;i++)
    {
        var li = childli[i];
        li.onmouseover = function(event)
        {
            event = event||window.event;
            var src = event.srcElement;
            srcId  = src.id;
            currentx = -(srcId-1)*400;
        }
    }
    window.setInterval(function(){
        beginx  = beginx + (currentx-beginx)/10;
        banner.style.left =beginx+"px";
    },20);

    var small = document.getElementById("smallimg");
    var big = document.getElementById("bigimg");
    var bigimgs = document.getElementById("bigimgs"+srcId);
    var box = document.getElementById("box"+srcId);
    small.onmouseover = function(event)
    {
        box = document.getElementById("box"+srcId);
        event = event||window.event;
        box.style.display = "block";
        var bigId = document.getElementById("banner"+srcId);
        big.style.display = "block";
        //alert(big.style.backgroundImage);
        //big.style.backgroundImage = bigId.style.backgroundImage;
        for(var i=1;i<6;i++)
        {
            bigimgs = document.getElementById("bigimgs"+i);
            if(srcId==(i+"")){
                bigimgs.style.display="block";
            }else{
                bigimgs.style.display="none";
            }
        }
        /*if(srcId=="1")
        {
            bigimgs.style.display = "block";
            /!*bigimgs.style.backgroundImage = "url('../汇总/image/a.jpg')";*!/
        }
        if(srcId=="2")
        {
            bigimgs.style.display = "block";
            /!*bigimgs.style.backgroundImage = "url('../汇总/image/a.jpg')";*!/
        }
        if(srcId=="3")
        {
            bigimgs.style.display = "block";
            /!*big.style.backgroundImage = "url('../汇总/image/c.jpg')";*!/
        }
        if(srcId=="4")
        {
            bigimgs.style.display = "block";
            /!*big.style.backgroundImage = "url('../汇总/image/d.jpg')";*!/
        }
        if(srcId=="5")
        {
            bigimgs.style.display = "block";
            /!*big.style.backgroundImage = "url('../汇总/image/e.jpg')";*!/
        }*/
    }
    small.onmouseout = function(event)
    {
        event = event||window.event;
        box.style.display = "none";
        big.style.display = "none";
    }
    small.onmousemove = function(event)
    {
        bigimgs = document.getElementById("bigimgs"+srcId);
        //alert(1);
        box = document.getElementById("box"+srcId);
        event = event||window.event;
        var x = event.clientX - small.offsetLeft-box.offsetWidth/2;
        var y = event.clientY - small.offsetTop - box.offsetHeight/2;
        //考虑边界问题
        if(x<0){
            x=0;
        }else if(x>small.offsetWidth-box.offsetWidth){
            x = small.offsetWidth-box.offsetWidth;
        }
        if(y<0){
            y=0;
        }else if(y>small.offsetHeight-box.offsetHeight){
            y = small.offsetHeight-box.offsetHeight;
        }
        box.style.left = x+"px";
        box.style.top = y +"px";

        //修改大图背景的位置
        var bgx = -x * 250/145;
        var bgy = -y* 950/190;
        //alert(bgx);
        bigimgs.style.left = bgx+"px";
        bigimgs.style.top = bgy+"px";
        /*big.style.backgroundPosition = bgx+"px "+bgy+"px";*/
    }
}