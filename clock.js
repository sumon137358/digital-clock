
function displayTime(){
    const message1 = document.getElementById('para1');
    let message3 = document.getElementById('para3');

   let message5 = document.getElementById('para5');
   let date = new Date()
   let hours = date.getHours()
   let minutes = date.getMinutes()
   let seconds = date.getSeconds()
   seconds =0;
   minutes =0;
   hours =0;
   message5.innerText = seconds;

   setInterval(() => {
       if(seconds  >=5){
         seconds =0;
      
       }
     else{
      seconds++;
      message5.innerText ="0" +seconds;
     }
   
       if(seconds===5){
         minutes++;
         message3.innerText ="0" +minutes;
       }
       if(minutes>=5 ){
         minutes =0;
         hours++;
         message1.innerText =hours;

       }
   }, 1000);

}
displayTime()
  
