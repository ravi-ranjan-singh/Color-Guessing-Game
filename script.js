var r,g,b,color,colors=[],square,winColor,winnerString,caseColor,level;




square=document.querySelectorAll('.squares');
var colorGenerator=function()
{
r=Math.floor(Math.random()*256)
g=Math.floor(Math.random()*256)
b=Math.floor(Math.random()*256)
  return color=`rgb(${r}, ${g}, ${b})`;
}




var colorAssign = function(len)
{
for(let i=0;i<len;i++)
    {
        colors[i]=colorGenerator()
    }
    
}




var changeW = function(){
    for(let i=0;i<6;i++)
    {   
        square[i].style.backgroundColor=winColor;
        document.querySelector('.main-heading').style.backgroundColor=winColor;
        document.querySelector('.try').textContent='Correct'
    }
    
}


var changeL = function(b){
    b.style.backgroundColor='#2e2e2e'
    document.querySelector('.try').textContent='Try Again'
}


var check = function(){
   let a=this
caseColor=this.style.backgroundColor    
    if(winColor===caseColor)
   { winnerString = 'Correct';
        changeW()            }

    else {winnerString ='Try Again'
        changeL(a)
         }
}




var Dom= function(len){
    document.querySelector('#rgb').textContent='RGB(' + winColor.slice(4,winColor.length-1) +')'
        
    for(let i=0;i<len;i++)
    {
        square[i].style.backgroundColor=colors[i];
    }
    
    for(let i=0;i<len;i++)
    {
        square[i].addEventListener('click',check)
    }
}



var easyLevel = function(){
   document.querySelector('.new-colors').addEventListener('click',easyLevel)
    document.querySelector('.easy').classList.add('active')
    document.querySelector('.hard').classList.remove('active')
    for(let i=3;i<6;i++)
    {
        square[i].style.display='none';
    }
    
    colorAssign(3);
    let index=Math.floor(Math.random()*3)
    winColor = colors[index];
    Dom(3);
}

var hardLevel = function(){
    document.querySelector('.new-colors').addEventListener('click',hardLevel)
    document.querySelector('.hard').classList.add('active')
    document.querySelector('.easy').classList.remove('active')
    for(let i=0;i<6;i++)
    {
        square[i].style.display='block';
    }
    colorAssign(6);
    let index=Math.floor(Math.random()*6)
    winColor = colors[index];
    Dom(6);
}


var newGame = function(){
      easyLevel()
     document.querySelector('.easy').addEventListener('click',easyLevel)
     document.querySelector('.hard').addEventListener('click',hardLevel)   
}

newGame()

