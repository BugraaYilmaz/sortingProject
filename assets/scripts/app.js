const body=document.querySelector('body');
const sortButton=body.querySelector("button");
const rMost=body.querySelector(".rightMostDiv");
const sArea=body.querySelector(".sortingArea");
const arrLenSelector=body.querySelector(".numS");
const dropDownDesc=body.querySelector(".dropDown");
let arrLen=150;
const barDom=[];
generateItems();





function getArrLen(){
  arrLen=arrLenSelector.value;
}


function deleteAllItems(){
  for(const elem of barDom){
    elem.remove();
  }
  barDom.length=0;
}

function generateItems(){
  for(let i=0;i<arrLen;i++){
    const item=document.createElement("div");
    item.style.backgroundColor="#FAF0E6";
    item.style.height=heightGenerator()+"px";
    item.style.width=(900/(arrLen*1.2))+"px";
    item.style.padding="0px";
    item.style.margin=(200/(arrLen*1.2))+"px";
    item.style.display="inline-block";
    item.style.zIndex="1";
    barDom.push(item);
    sArea.appendChild(item);
  }
}
function heightGenerator(){
  const ranNum=Math.random();
  return(ranNum*400);
}

function generateBars(){
  getArrLen();
  deleteAllItems();
  generateItems();
}

function stopThread(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(){
  let tempHeight;
  let sortFlag=1;
  while(sortFlag){
    for(let i=0;i<(arrLen-1);i++){
      if(parseFloat(barDom[i].style.height)>parseFloat(barDom[i+1].style.height)){

        //anomaly found
          barDom[i].style.backgroundColor="red";
          barDom[i+1].style.backgroundColor="red";
          await stopThread(1);
        //Swapping
          tempHeight=barDom[i].style.height;
          barDom[i].style.height=barDom[i+1].style.height;
          barDom[i+1].style.height=tempHeight;
          await stopThread(1);
        //Color change again
          barDom[i].style.backgroundColor="lightblue";
          barDom[i+1].style.backgroundColor="lightblue";
          await stopThread(1);
      }
    }
    sortFlag=0;
    for(let i=(arrLen-1);i>0;i--){
      if(parseFloat(barDom[i].style.height)<parseFloat(barDom[i-1].style.height)){
        sortFlag=1;
        break;
      }
      else{
        barDom[i].style.backgroundColor="green";
        barDom[i-1].style.backgroundColor="green";
        await stopThread(2);
      }
    }
  }
  

}
async function selectionSort(){
  for(let lowerBorder=0; lowerBorder<(barDom.length-1);lowerBorder++){
    let lowerValue=1000;
    let lowerValueIndex;
    let tempValue;
    for(let i=lowerBorder;i<barDom.length;i++){
      if(parseFloat(barDom[i].style.height)<lowerValue){
        lowerValue=parseFloat(barDom[i].style.height);
        await stopThread(20);
        lowerValueIndex=i;
      }
    }
    //swap
    if(lowerBorder!=lowerValueIndex){
      barDom[lowerBorder].style.backgroundColor="blue";
      barDom[lowerValueIndex].style.backgroundColor="blue";
      await stopThread(20);
      tempValue=barDom[lowerBorder].style.height;
      barDom[lowerBorder].style.height=barDom[lowerValueIndex].style.height;
      barDom[lowerValueIndex].style.height=tempValue;
      barDom[lowerValueIndex].style.backgroundColor="#FAF0E6"
      barDom[lowerBorder].style.backgroundColor="lightblue";
      await stopThread(20);
    }
  }
  for(let i=0;i<(barDom.length-1);i++){
    if(parseFloat(barDom[i].style.height)<parseFloat(barDom[i+1].style.height)){
      barDom[i].style.backgroundColor="green";
      barDom[i+1].style.backgroundColor="green";
      await stopThread(10);
    }
  }
  
}

function quickSort(){
  
  
}




function sortDecision(){
  if(dropDownDesc.value==1){
    bubbleSort();
  }
  else if(dropDownDesc.value==2){
    selectionSort();
  }
  else if(dropDownDesc.value==3){
    quickSort();
  }
}


arrLenSelector.addEventListener("click",generateBars);
sortButton.addEventListener("click",sortDecision);