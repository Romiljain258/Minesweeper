'use strict'

function startGame(){
let score=0;
let stop=0;
let visited=[];
let gameOver = false;
let a=[];
let count=0;

let mainB=document.getElementById("block");
let points=document.getElementById("points");
let startGame=document.getElementById("start");
let congo=document.getElementById("congo");

// for random array 
let bombIndex =  Array.from({
    length : 10
     }, 
     () => 
    Math.floor(Math.random() * 80)
     );

//console.log(bombIndex);

for(let i=0;i<9;i++)
{
    let row=document.createElement("div");
    row.style.height="40px";
   
     for(let j=0;j<9;j++)
       {
        let currentIndex = i*9+j;//this will give me all block(1-81).     
        let coloum=document.createElement("div");
             
        coloum.style.height="40px";
        coloum.style.width="40px";
        coloum.style.background="gray";
        coloum.style.display="vertical-center"
        coloum.style.display="inline-block "; // this means how much height & width require they will show. 
        coloum.style.border="1.5px solid black";
        coloum.className="foo";
        coloum.setAttribute("id",currentIndex);
        coloum.addEventListener("click",()=>{
             if(score==71)
             {
                 //congo.style.display="block";
                 startGame.style.display="block"; 
                 window.alert("Congratulations! You won the match,Restart new match?");
                 location.reload();                
             }
             
            if(!bombIndex.includes(currentIndex) && !gameOver)
            {
                console.log("val",!bombIndex.includes(currentIndex));
                console.log("val1",(currentIndex));
                console.log(bombIndex[currentIndex]);
                if(!visited.includes(currentIndex)){
                visited.push(currentIndex);

                
                let val=currentIndex;
                a[0]=val-1;
                a[1]=val+1;
                let up=val-10+1;
                let down=val+10-1;
                a[2]=up;
                a[3]=down;
                a[4]=up-1;
                a[5]=up+1;
                a[6]=down-1;
                a[7]=down+1;

                for(let c=0;c<a.length;c++)
                {
                  let d = a[c];
                    if(bombIndex.includes(d)){
                     count++;
                    }
                }
                coloum.innerHTML=count;
                count=0;
                score++;              
                points.innerHTML = "<span style=\"color:black; font-size:30px;\">" + score + "</span>";
                coloum.style.background = "white";
                 }
                }
            else{
                 for(let k=0;k<10;k++)
                 {
                     gameOver=true;
                     let bomb=bombIndex[k];
                     let bombNode= document.getElementById(bomb);
                     bombNode.style.background = "red";
                    bombNode.innerHTML="\uD83D\uDE00";
                 }
                    startGame.style.display="block";                 
                 }       
                   
    })
    
        row.appendChild(coloum);
    }
    mainB.appendChild(row);
}
    startGame.addEventListener("click",()=>{
    location.reload();
})
}
startGame();
/** 
  THis for random array 
function randomArray(){
    let set = new Set();
    for(let i=0;set.size!=10;i++){
        set.add(Math.ceil(81 * Math.random()));
    }
    return set;
}
*/