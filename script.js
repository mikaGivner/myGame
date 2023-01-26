

let arr = [
  '<img src="./assets/img/dice-1.png" alt="">',
  '<img src="./assets/img/dice-2.png" alt="">',
  '<img src="./assets/img/dice-3.png" alt="">',
  '<img src="./assets/img/dice-4.png" alt="">',
  '<img src="./assets/img/dice-5.png" alt="">',
  '<img src="./assets/img/dice-6.png" alt="">',
];
let  topModal=document.querySelector(".topModal")
let st2=document.querySelector(".s1");
st2.style.display="none";
let st1=document.querySelector(".s2");
st1.style.display="none";
let game = document.querySelector(".game");
let imgUp = document.querySelector(".imgUp");
let imgDown = document.querySelector(".imgDown");
let nG = document.querySelector(".btn1");
let hold = document.querySelector(".btn3");
hold.disabled = false;
let littleNumLeft = document.querySelector(".leftSide");
let littleNumRight = document.querySelector(".rightSide");
let numLeft = document.querySelector(".leftNum");
numLeft.innerText="0";
let numRight = document.querySelector(".rightNum");
numRight.innerText="0";
let leftScore=0;
let rightScore=0;
let breakPoint=document.querySelector(".number");
let mySide=document.querySelector(".mySide");
mySide.style.background="linear-gradient(180deg,#a72470 30%, #b47299 70%)";
let hisSide=document.querySelector(".hisSide");
hisSide.style.background="linear-gradient(180deg,#b47299 30%, #a72470 70%)";
let firstSide = true; // משתנה שמחשב באיזה צד אניץ לחצינה על אולד מחלפה את הערך שלו
let p1=document.querySelector("#playerName1");
let p2=document.querySelector("#playerName2");
let roll = document.querySelector(".btn2");
roll.disabled = false;
imgUp.innerHTML = '<img src="./assets/img/dice-1.png" alt="">';
imgDown.innerHTML = '<img src="./assets/img/dice-3.png" alt="">';
let counterMySide = 0;

hold.addEventListener("click", ()=>{
    if(firstSide) {
        leftScore+=counterMySide;
        numLeft.innerText=`${leftScore.toString()}`;
        littleNumLeft.textContent="0";
        firstSide=false;
        hisSide.style.background="linear-gradient(180deg,#a72470  30%, #b47299 70%)";
    
        mySide.style.background="linear-gradient(180deg, #b47299  30%, #a72470 70%)";

    }
    else if(!firstSide) {
        rightScore+=counterMySide;
        numRight.innerText=`${rightScore.toString()}`;
        littleNumRight.textContent="0";
        firstSide=true;
        mySide.style.background="linear-gradient(180deg,#a72470  30%, #b47299 70%)";
    
        hisSide.style.background="linear-gradient(180deg, #b47299  30%, #a72470 70%)";
    }
    
    counterMySide=0;
    
    console.log(counterMySide);
})
roll.addEventListener("click", () => {
 // בדיקת המנצח


  let randomUp = Math.floor(Math.random() * 6);
  let randomDown = Math.floor(Math.random() * 6);
  imgUp.innerHTML = `${arr[randomUp]}`;
  imgDown.innerHTML = `${arr[randomDown]}`;

  counterMySide += randomUp + randomDown + 2;
  
  if (firstSide) {
    if(randomUp===0 && randomDown===0){

        counterMySide=0;
    }
    if(randomUp===5 && randomDown===5){

        counterMySide=0;
        firstSide=false;
    }
    littleNumLeft.textContent = `${counterMySide}`;
    
    if(leftScore+counterMySide>Number(breakPoint.value)){
    hisSide.style.background="#2f2e30";
    p2.style.color="rgb(160, 28, 52)";
    st1.style.display="block";
    st2.style.display="block";
    st1.innerText='YOU WIN!'
    st2.innerText='YOU LOSE!'
    roll.disabled = true;
    hold.disabled = true;
    counterMySide=0;
    littleNumLeft.textContent = `${counterMySide}`;
    // rightScore=0;
    // leftScore=0;
    // numRight.innerText=`${rightScore.toString()}`;
    // numLeft.innerText=`${rightScore.toString()}`;
}
if(leftScore+counterMySide===Number(breakPoint.value)){
    mySide.style.background="#2f2e30";
        p1.style.color="rgb(160, 28, 52)";
        st1.style.display="block";
        st2.style.display="block";
        st2.innerText='YOU WIN!'
        st1.innerText='YOU LOSE!'
        roll.disabled = true;
        hold.disabled = true;
        counterMySide=0;
        littleNumRight.textContent = `${counterMySide}`;
}

} 
else {
    if(randomUp===0 && randomDown===0){

        counterMySide=0;
    }
    if(randomUp===5 && randomDown===5){

        counterMySide=0;
        firstSide=true;
    }
    littleNumRight.textContent = `${counterMySide}`;
    if(rightScore+counterMySide>Number(breakPoint.value)){
        mySide.style.background="#2f2e30";
        p1.style.color="rgb(160, 28, 52)";
        st1.style.display="block";
        st2.style.display="block";
        st2.innerText='YOU WIN!'
        st1.innerText='YOU LOSE!'
        roll.disabled = true;
        hold.disabled = true;
        counterMySide=0;
        littleNumLeft.textContent = `${counterMySide}`;
        //צריך את ז ברגע שמתחיל משחק חדש-איפוס הנקודות
        // rightScore=0;
        // leftScore=0;
        // numRight.innerText=`${rightScore.toString()}`;
        // numLeft.innerText=`${rightScore.toString()}`;
        
    }
    if(rightScore+counterMySide===Number(breakPoint.value)){
        hisSide.style.background="#2f2e30";
        p2.style.color="rgb(160, 28, 52)";
        st1.style.display="block";
        st2.style.display="block";
        st1.innerText='YOU WIN!'
        st2.innerText='YOU LOSE!'
        roll.disabled = true;
        hold.disabled = true;
        counterMySide=0;
        littleNumRight.textContent = `${counterMySide}`;
    }
  }
 


  console.log(counterMySide);

});
console.log(counterMySide);


/*מודללל */
// Get the modal
var modal = document.querySelector("#myModal");
modal.style.display = "block";
// Get the button that opens the modal


// Get the <span> element that closes the modal
let button=document.querySelector(".close");



// When the user clicks on <span> (x), close the modal
button.addEventListener("click",()=>{
    if(breakPoint.value.length===0 ||breakPoint.value<=0){
        alert("please for continue select a target score! it has to be bigger than zero");
    }
    else modal.style.display = "none";
});

nG.addEventListener("click",()=>{
    modal.style.display = "block";
    breakPoint.value="";
    topModal.style.display="none";
    mySide.style.background="linear-gradient(180deg,#a72470 30%, #b47299 70%)";
    hisSide.style.background="linear-gradient(180deg,#b47299 30%, #a72470 70%)";
     rightScore=0;
     leftScore=0;
     numRight.innerText=`${rightScore.toString()}`;
     numLeft.innerText=`${rightScore.toString()}`;
     p1.style.color="rgb(66, 64, 64)";
     p2.style.color="rgb(66, 64, 64)";
     hold.disabled = false;
     roll.disabled = false;

});


