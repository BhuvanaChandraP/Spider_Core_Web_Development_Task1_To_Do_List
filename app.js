

var userName = prompt("Enter your user name");
console.log(userName);
var hello = document.getElementById("hi");
hello.innerHTML += "Hi" + "&nbsp &nbsp" + userName + "!!" ;
var userName1 = userName + 1;
console.log(userName1);
alert("Turn on notifications to get notified with your tasks");
let ask = "Make to do";
// notification.classList.add('ask');

function showNotification(){
  const noti = new Notification("New message",{
    body: "you have some pending work"
  });
}
function showNotification1(){
  const noti = new Notification("New message",{
    body:"Add some works here"
  });
}

var x1 = document.getElementById("mouse"); 

function playAudio() { 
   x1.play(); 
} 
var x2 = document.getElementById("mousedelete"); 

function playAudio1() { 
   x2.play(); 
} 



function GetFormattedDate() {
  var todayTime = new Date();
  var month = todayTime .getMonth() + 1;
  var day = todayTime .getDate();
  var year = todayTime .getFullYear();
  if(month<=9)
    return year + "-" +"0"+ month + "-" + day;
  else
     return year + "-" + month + "-" + day;
}
var today = GetFormattedDate();
          //console.log(today);

var dayslist = ["Sun","Mon","Tue","wed","Thu","Fri","Sat"];
var weekday;
function GetFormattedDate1() {
  //var dayslist = ["Sun","Mon","Tue","wed","Thu","Fri","Sat"];
  var todayTime1 = new Date();
  var month1 = todayTime1 .getMonth() + 1;
  var day1 = todayTime1 .getDate();
  var year1 = todayTime1 .getFullYear();
   weekday = todayTime1.getDay();
  if(month1<=9)
    return day1 + "-" +"0"+ month1 + "-" + year1 ;//+ dayslist[weekday];
  else
     return day1 + "-" + month1 + "-" + year1;//+ dayslist[weekday];
}
var today1 = GetFormattedDate1();
console.log(today1);
var displayDate = document.getElementById("displayDate");
displayDate.innerHTML +='<h2>'+ today1 + "&nbsp"+ dayslist[weekday] +'<h2>'; 
let  timeNow ; 

function GetFormattedTime(){
  let time1 = new Date();
  let hour1 = time1.getHours();
  let minutes1 = time1.getMinutes();
  let seconds1 = time1.getSeconds();
  hour1 = hour1 < 10 ? "0" + hour1 : hour1;
  minutes1 = minutes1 < 10 ? "0" + minutes1 : minutes1;
  
  timeNow = hour1+":"+minutes1;
}

GetFormattedTime();
//////////console.log(timeNow)


setInterval(clock, 1000);
        function clock() {
            let time = new Date();
            let hour = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            
            amOrPm = "AM";
  
            if (hour > 12) {
                hour -= 12;
                amOrPm= "PM";
            }
            if (hour == 0) {
                hr = 12;
                amOrPm= "AM";
            }
  
            hour = hour < 10 ? "0" + hour : hour;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
  
            let currentTime = hour + ":" 
                + minutes + ":" + seconds + " "+  amOrPm ;//am_pm;
  
            document.getElementById("digitalclock")
                .innerHTML = currentTime;
        }
  
        clock();
        
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90
        setInterval(clockpic, 1000);
        
        function clockpic() {
          drawClock(ctx, radius);
          drawNum(ctx, radius);
          drawTime(ctx, radius);
        }
        
        function drawClock(ctx, radius) {
          var grad;
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, 2*Math.PI);
          ctx.fillStyle = 'white';
          ctx.fill();
          grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
          grad.addColorStop(0, '#333');
          grad.addColorStop(0.5, 'white');
          grad.addColorStop(1, '#333');
          ctx.strokeStyle = grad;
          ctx.lineWidth = radius*0.1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
          ctx.fillStyle = '#333';
          ctx.fill();
        }
        
        function drawNum(ctx, radius) {
          var ang;
          var num;
          ctx.font = radius*0.15 + "px arial";
          ctx.textBaseline="middle";
          ctx.textAlign="center";
          for(num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius*0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
          }
        }
        
        function drawTime(ctx, radius){
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            //hour
            hour=hour%12;
            hour=(hour*Math.PI/6)+
            (minute*Math.PI/(6*60))+
            (second*Math.PI/(360*60));
            drawHand(ctx, hour, radius*0.4, radius*0.07);
            //minute
            minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
            drawHand(ctx, minute, radius*0.7, radius*0.07);
            // second
            second=(second*Math.PI/30);
            drawHand(ctx, second, radius*0.9, radius*0.02);
        }
        
        function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0,0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }
        
        
        document.getElementById("canvas").style.display = "none";
        //document.getElementById("digitalclock").style.display = "none";
        function displayDigital()
        {
          document.getElementById("canvas").style.display = "none";
          document.getElementById("digitalclock").style.display = "block";
          
           
        }
        function displayAnalog()
        {
          document.getElementById("digitalclock").style.display = "none";
          document.getElementById("canvas").style.display = "block";
         
           
        }
        

        let x;
        x = document.getElementById("myDate").value;
        function myFunction() {
              x = document.getElementById("myDate").value;
              
            } 


            let y;
            y = document.getElementById("time").value;
            function myFunction1() {
                  y = document.getElementById("time").value;
                 
                } 


           
        (function(){
  
            var list = document.querySelector('#list');
            var  form = document.querySelector('form');
            var  item = document.querySelector('#item');
            var comp = document.querySelector('#completed');
            var exp = document.querySelector('#overdue');
            form.addEventListener('submit',function(e){
            e.preventDefault();
            console.log(timeNow);
            console.log(y);
            if (item.value == "" || x =="" || y =="" )     //|| x =="" || y ==""
            {
              

            }
            else if(x < today )
            {
              alert("Add a future date");
            }
            
            else if((y < timeNow) && (x <= today))      // && x < today
            {
              alert("Add a future time");
            }
            else if(x == today)
            {
               
               comp.innerHTML += '<li>' + item.value   + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + y + '</li>';
               store1();
               item.value = "";
                x = "";
                y = "";
              
            }
           
            
            else
            {
              
              list.innerHTML += '<li>' + x + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + item.value + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+y+ '</li>' ;// + '<button>'+ delete +'</button>';
              //list.innerHTML +=  '<li>'+ X +'</li>';
              store();
              item.value = "";
              x = "";
              y = "";
             
            }
             
            
          },false)
          
          list.addEventListener('click',function(e){
            var t = e.target;
            
            if(t.classList.contains('checked')){
              playAudio1();
              t.parentNode.removeChild(t);
              
            } 
            else {
              t.classList.add('checked');
              playAudio();
              // console.log(t.classList);
              // comp.innerHTML +='<li>'+ abc +'</li>'
            }
            store();
          },false)


          comp.addEventListener('click',function(e){
            var t1 = e.target;
            
            if(t1.classList.contains('checked')){
              playAudio1();
              t1.parentNode.removeChild(t1);
              
            } else {
              t1.classList.add('checked');
              playAudio();
              //console.log(t1.classList);
              //comp.innerHTML +='<li>'+ abc +'</li>';
            }
            store1();
          },false)
         


          function store() {
            //window.localStorage.userName = list.innerHTML;
            var val = list.innerHTML;
            localStorage.setItem(userName,val);
            //console(userName);
          }
          function store1() {
            
            var val1 = comp.innerHTML;
            localStorage.setItem(userName1,val1);
          }
          
          function getValues() {
            var storedValues = localStorage.getItem(userName); //window.localStorage.userName;
           
            if(!storedValues) {
              list.innerHTML = '<li>Make a to do list</li>';
              showNotification1();                 
            }
            else {
              list.innerHTML = storedValues;
              
              
            }
          }
          getValues();



          function getValues1() {
            var storedValues1 = localStorage.getItem(userName1);
            
            if(!storedValues1 ) {
              
              showNotification1();                 
            }
            else {
              comp.innerHTML = storedValues1;
              showNotification();
              //list.innerHTML = '<button>delete</button>'
            }
          }
          getValues1();



        })();



        function generate_year_range(start, end) {
          var years = "";
          for (var year2 = start; year2 <= end; year2++) {
              years += "<option value='" + year2 + "'>" + year2 + "</option>";
          }
          return years;
        }
        
        today3 = new Date();
        currentMonth = today3.getMonth();
        currentYear = today3.getFullYear();
        selectYear = document.getElementById("year");
        selectMonth = document.getElementById("month");
        
        
        createYear = generate_year_range(2020, 2050);
        /** or
        * createYear = generate_year_range( 1970, currentYear );
        */
        
        document.getElementById("year").innerHTML = createYear;
        
        var calendar = document.getElementById("calendar");
        var lang = calendar.getAttribute('data-lang');
        
        var months = "";
        var days = "";
        
        var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        var dayDefault = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        
          months = monthDefault;
          days = dayDefault;
        
        var dataHead = "<tr>";
        for (dhead in days) {
          dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
        }
        dataHead += "</tr>";
        
        //alert($dataHead);
        document.getElementById("thead-month").innerHTML = dataHead;
        
        
        monthAndYear = document.getElementById("monthAndYear");
        showCalendar(currentMonth, currentYear);
        
        
        
        function next() {
          currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
          currentMonth = (currentMonth + 1) % 12;
          showCalendar(currentMonth, currentYear);
        }
        
        function previous() {
          currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
          currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
          showCalendar(currentMonth, currentYear);
        }
        
        function jump() {
          currentYear = parseInt(selectYear.value);
          currentMonth = parseInt(selectMonth.value);
          showCalendar(currentMonth, currentYear);
        }
        
        function showCalendar(month2, year2) {
        
          var firstDay = ( new Date( year2, month2 ) ).getDay() - 1;
        
          tbl = document.getElementById("calendar-body");
        
          
          tbl.innerHTML = "";
        
          
          monthAndYear.innerHTML = months[month2] + " " + year2;
          selectYear.value = year2;
          selectMonth.value = month2;
        
          // creating all cells
          var date = 1;
          for ( var i = 0; i < 6; i++ ) {
              
              var row = document.createElement("tr");
        
              
              for ( var j = 0; j < 7; j++ ) {
                  if ( i === 0 && j < firstDay ) {
                      cell = document.createElement( "td" );
                      cellText = document.createTextNode("");
                      cell.appendChild(cellText);
                      row.appendChild(cell);
                  } else if (date > daysInMonth(month2, year2)) {
                      break;
                  } else {
                      cell = document.createElement("td");
                      cell.setAttribute("data-date", date);
                      cell.setAttribute("data-month", month2 + 1);
                      cell.setAttribute("data-year", year2);
                      cell.setAttribute("data-month_name", months[month2]);
                      cell.className = "date-picker";
                      cell.innerHTML = "<span>" + date + "</span>";
        
                      if ( date === today3.getDate() && year2 === today3.getFullYear() && month2 === today3.getMonth() ) {
                          cell.className = "date-picker selected";
                      }
                      row.appendChild(cell);
                      date++;
                  }
        
        
              }
        
              tbl.appendChild(row);
          }
        
        }
        
        function daysInMonth(iMonth, iYear) {
          return 32 - new Date(iYear, iMonth, 32).getDate();
        }
        
        