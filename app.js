const body=document.querySelector('body');
const sortButton=body.querySelector("button");
const rMost=body.querySelector(".rightMostDiv");
const sArea=body.querySelector(".sortingArea");



function createItems(){
  const item=document.createElement("div");
  item.style.backgroundColor="blue";
  item.style.height="100px";
  item.style.width="3px";
  item.style.padding="0px";
  item.style.margin="2px";
  item.style.display="inline-block"
  sArea.appendChild(item);
  
}



function sortItems(){

}

function generateItems(){
  for(let i=0;i<100;i++){
    createItems();
  }
}



sortButton.addEventListener("click",sortItems);