
let player1_name="";
let player2_name="";

window.onbeforeunload=function(){
    window.scrollTo(0,0);
}



 function namelog1() {
    player1_name= document.querySelector("#nboxplayer1").value;
    document.querySelector(".p1name").innerHTML="Welcome "+player1_name +" !";
    
    let arr= document.querySelectorAll(".p1");
    for(let i=0; i<arr.length ;i++){
    arr[i].innerHTML=player1_name;
    };

    return player1_name;
}; 


function namelog2() {
    player2_name= document.querySelector("#nboxplayer2").value;
    document.querySelector(".p2name").innerHTML="Welcome "+player2_name+ " !";
    
    let arr= document.querySelectorAll(".p2");
    for(let i=0; i<arr.length ;i++){
    arr[i].innerHTML=player2_name;
    };

    return player2_name;
};



function showCond(){
document.querySelector("#condition_description").classList.remove("hide");
};

document.querySelector('#condition_check').addEventListener("change", function(){
    if (this.checked) {
      document.querySelector('#stBtn').classList.remove("hide");
    } else {
        document.querySelector('#stBtn').classList.add("hide");
    }
  });
 


function start(){
    document.querySelector("#Game_prep").classList.remove("hide");
    location.href="#Game_prep";
};

var r1;
var r2;
let sel="";

function roll1(){
     r1=Math.floor(Math.random()*6)+1;
    let nsrc1="Images/dc"+r1+".png";
    document.querySelector("#pb1img").src=nsrc1;

    r2=Math.floor(Math.random()*6)+1;
    let nsrc2="Images/dc"+r2+".png";
    document.querySelector("#pb2img").src=nsrc2;

    if(r1 != r2){
        document.querySelector("#roll1").disabled=true;
        document.querySelector("#continue").classList.remove("hide");     } 
        else {alert("Dices are equal! Please click the Roll button again!")}    

    if(r1>r2){
            document.querySelector("#roll1-winner").innerHTML=player1_name+" to start the count towards the Death Number!";
            document.querySelector("#ddn2").disabled=true;
            document.querySelector("#ddn2").classList.add("scale");
            sel="#dimg1";
        }
        if(r2>r1){
            document.querySelector("#roll1-winner").innerHTML=player2_name+" to start the count towards the Death Number!";
            document.querySelector("#ddn1").disabled=true;
            document.querySelector("#ddn1").classList.add("scale");
                sel="#dimg2";
        }

        document.querySelector("#windesc").classList.remove("hide");
        return sel;
};


function Ctnue(){
     document.querySelector("#Ct_page").classList.remove("hide");
     location.href="#Ct_page";
};


var dnb=Math.floor(Math.random()*21);
var ct=0; 
var rp=0;


function rolldc(){
    rp=Math.floor(Math.random()*6)+1;
    let source="Images/dc"+rp+".png";
    if(sel == "#dimg1"){
        document.querySelector("#ddn1").disabled=true;
        
    }else {
        document.querySelector("#ddn2").disabled=true;
        
    }
    document.querySelector(sel).src=source;

    document.querySelector("#incr").classList.remove("hide");
    document.querySelector("#decrs").classList.remove("hide");
};


function hideBtn(){
    document.querySelector("#incr").classList.add("hide");
document.querySelector("#decrs").classList.add("hide");
if(sel == "#dimg1"){
    document.querySelector("#ddn2").disabled=false;
    document.querySelector("#ddn1").disabled=true;
    document.querySelector("#ddn1").classList.add("scale");
    document.querySelector("#ddn2").classList.remove("scale");
    sel="#dimg2";
}else {
    document.querySelector("#ddn1").disabled=false;
    document.querySelector("#ddn2").disabled=true;
    document.querySelector("#ddn2").classList.add("scale");
    document.querySelector("#ddn1").classList.remove("scale");

    sel="#dimg1";
}

}

let loser="";

function checkdn(){
    if(ct===dnb){
            
        if(sel=="#dimg1"){
            loser=player1_name;
           }else{ loser=player2_name;}
           hideBtn();
           document.querySelector("#ddn2").disabled=true;
           document.querySelector("#ddn1").disabled=true;

           document.querySelector("#Result").classList.remove("hide");
           location.href="#Result";

           document.querySelector("#result").innerHTML=loser+" Lost The Game!";

    }
}


function Incr(){
    let checkn=ct+rp;
    ct+=rp;
  if(checkn<=20){
    document.querySelector("#DN").innerHTML=ct;

    checkdn();
    hideBtn();

 }
    else{alert("The MAXIMUM number 20 will be exceeded?! Please select the DECREASE button!");}
};


function Decr(){
    let checkn=ct-rp;
    ct-=rp;
 
    if(checkn>=0){
        document.querySelector("#DN").innerHTML=ct;

        checkdn(ct);
        
        hideBtn();
    
    }
        else{alert("The MINIMUM number 0 is reached?! Please select the INCREASE button!");}
   
}; 

function Rest(){
    ct=0;
    document.querySelector("#DN").innerHTML=ct;

    document.location.reload();
    location.href="#Start-page";

};

function messE(){
   var result=confirm("Are you sure you want to restart the game?!");
   if (result==true){
    Rest();
   }

};

function messL(){
    document.querySelector("#message").classList.remove("message");

};


  