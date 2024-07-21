let root = document.querySelector(":root");
let rootdeg = getComputedStyle(root);


function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let time = hh + ":" + mm + ":" + ss ;
  
let rotsechand = `${(ss+1)*6}deg`;
let rotminhand =  `${(mm)*6}deg`;
if(hh >= 12){
   rothourhand = `${((hh-12)+(mm/60))*30}deg`;
}
else {
  rothourhand = `${(hh+(mm/60))*30}deg`;
}

  document.getElementById("clock").innerText = time; 
  setTimeout(function(){
     currentTime() 
     root.style.setProperty('--rotsec', rotsechand )
     root.style.setProperty('--rotmin', rotminhand )
     root.style.setProperty('--rothour', rothourhand )
  }, 1000);
 
}
currentTime();


