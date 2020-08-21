var dicList = [1,2,3,4,5,6,7,8,9];


window.onload = function () {
    this.arrangeList();
};


function arrangeList() { 
   this.dicList.forEach((value,index) => {       
        document.getElementById("dvContent").children[index].innerHTML=value;
    });
}


function onShuffleClick(){    
    for(var i = dicList.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = dicList[i]
        dicList[i] = dicList[j]
        dicList[j] = temp;
      }   
      this.arrangeList();
}

function onSortClick(){
    dicList.sort();
    this.arrangeList();
}
