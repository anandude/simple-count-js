const incButton=document.getElementById(`IncButton`);
const decButton=document.getElementById(`DecButton`);
const resetButton=document.getElementById(`ResetButton`);
const countLabel=document.getElementById(`CountLabel`);
let count=0;


incButton.onclick=function(){
    count++;
    countLabel.textContent=count;
    
}

decButton.onclick=function(){
    count--;
    countLabel.textContent=count;
    
}

resetButton.onclick=function(){
    count=0;
    countLabel.textContent=count;
    
}

