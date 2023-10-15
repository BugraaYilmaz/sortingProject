const body=document.querySelector('body');
const sortButton=body.querySelector("button");
const rMost=body.querySelector(".rightMostDiv");
const sArea=body.querySelector(".sortingArea");
const arrLenSelector=body.querySelector(".numS");
let arrLen=150;
generateItems();
const barArray=[];




function getArrLen(){
  arrLen=arrLenSelector.value;
}


function deleteAllItems(){
  const itemArr=sArea.querySelectorAll(".eachValue");
  for(const elem of itemArr){
    elem.remove();
  }
}

function generateItems(){
  for(let i=0;i<arrLen;i++){
    const item=document.createElement("div");
    item.style.backgroundColor="blue";
    item.style.height=heightGenerator()+"px";
    item.style.width=(800/arrLen)+"px";
    item.style.padding="0px";
    item.style.margin="2px";
    item.style.display="inline-block"
    item.className="eachValue"
    sArea.appendChild(item);
  }
}
function heightGenerator(){
  const ranNum=Math.random();
  return(ranNum*500);
}

function generateBars(){
  getArrLen();
  deleteAllItems();
  generateItems();
}



arrLenSelector.addEventListener("click",generateBars);