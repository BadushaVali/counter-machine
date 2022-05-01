

let countele = document.getElementById('counter');

function increment(){
    let currentvalue = countele.textContent;
      let updatevalue = parseInt(currentvalue)+1;
        countele.textContent = updatevalue;
    console.log(updatevalue);
    
    
    console.log('click button');
}
function decrement(){
    
    let currentvalue = countele.textContent;
      let updatevalue = currentvalue >0 ? parseInt(currentvalue)-1: 0;
     countele.textContent = updatevalue;
    console.log(updatevalue);
}
function reset(){
    countele.textContent = 0;
}
