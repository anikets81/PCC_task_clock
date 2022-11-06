function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    

    if(h<10)
      h = "0"+h;
    if(m<10)
      m = "0"+m;
    if(s<10)
      s = "0"+s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
}

showTime();

var button = document.getElementById("MyClockDisplay");
count = 0;
button.onclick = function() 
{
  count += 1;
  document.getElementById("counter").innerHTML = "Count: " + count;

  if(count%2!=0)
  {
    document.getElementById("MyClockDisplay").style.color =  "#E94057";
    document.getElementById("counter").style.color = "#78ffd6";
  }
  else
  {
    document.getElementById("MyClockDisplay").style.color = "#78ffd6"; 
    document.getElementById("counter").style.color = "#E94057"; 
  }
};
 
