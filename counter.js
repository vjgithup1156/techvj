// counting code start//

function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor(duration / range)),
     timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
       clearInterval(timer);
      }
     }, step);
   }

   var flag = 0;

   window.onscroll = function(){

    var count1 = document.getElementById("count1");
    var data = getOffset(count1);

    var result = data.top - window.scrollY;

    if (result < 600 && flag == 0){
      flag = 1;
      counter("count1", 0, 400, 5000,);
      counter("count2", 100, 350, 5000);
      counter("count3", 0, 140, 5000);
      counter("count4", 0, 84, 5000);
    }
    console.log(data);
    console.log(window.scrollY);

   };