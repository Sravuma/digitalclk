function clk()
{
    var date=new Date()
    //console.log(date)

    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
var fullTime=`${hh}:${mm} ${am_pm}`
document.getElementById("Time").innerHTML=fullTime
document.getElementById("Sec").innerHTML=ss
if(mo==0)
{
    mo="Jan"
}
else if(mo==1)
{
    mo="Feb"
}
else if(mo==2)
{
    mo="Mar"
}
else if(mo==3)
{
    mo="Apr"
}
else if(mo==4)
{
    mo="May"
}
 else if(mo==5)
{
    mo="Jun"
}
else if(mo==6)
{
    mo="Jul"
}
else if(mo==7)
{
    mo="Aug"
}
else if(mo==8)
{
    mo="Sep"
}
else if(mo==9)
{
    mo="Oct"
}
else if(mo==10)
{
    mo="Nov"
}
else if(mo==11)
{
    mo="Dec"
}
var fullDate=`${dd}/${mo}/${yy}`
var bdy=document.querySelector("body")
document.getElementById("Date").innerHTML=fullDate
switch(3)  //switch(0)
{
    case 0:dy="Sunday"
    bdy.style.backgroundImage="url(sun.jpg)"

    break;
    case 1:dy="Monday"
    bdy.style.backgroundImage="url(mon.jpeg)"

    break;
    case 2:dy="Tuesday"
    bdy.style.backgroundImage="url(tue.jpeg)"

    break;
    case 3:dy="Wednesday"
    bdy.style.backgroundImage="url(wed.jpeg)"

    break;
    case 4:dy="Thursday"
    bdy.style.backgroundImage="url(thu.jpeg)"
    break;
    case 5:dy="Friday"
    bdy.style.backgroundImage="url(fri.webp)"
    break;
    case 6:dy="Saturday"
    bdy.style.backgroundImage="url(sat.jpg)" 
    break;
}
document.getElementById("Day").innerHTML=dy
}


function greet()
{
    var time=date.getHours()
    if(time>=5 && time<=12) 
    {
        document.getElementById("message").innerHTML="Good Morn!!"
    }  
    else if(time>=12 && time<=16)
    {
        document.getElementById("message").innerHTML="Good Afternoon!!"
    }
    else if(time>=16 && time<=20)
    {
        
    }
}