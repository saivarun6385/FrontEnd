
let cards=[]
let s=0;
let message=""
isAlive=false
let mel=document.getElementById("msg")

let so=document.getElementById("sm")

let cd=document.getElementById("car")

let playerEl=document.getElementById("player-el")

let player={
    name:"varun",
    chips:200

};
playerEl.innerText=player.name+": $"+player.chips
function getRandomCard(){
    let randomnum= Math.floor(Math.random()*13)+1
    if(randomnum>10){
        return 10
    }
    else if(randomnum===1){
        return 11
    }
    else{
        return randomnum
    }
}
document.getElementById("srt").onclick=function(){
    isAlive=true
    hasBlackJack=false
    let fc=getRandomCard()
    let sc=getRandomCard()
    cards=[fc,sc]
    s=fc+sc
    render()
}
function render(){
    so.innerText="Sum: "+ s;
    cd.innerText="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cd.textContent+=cards[i] + " "
    }
    if(s<=20){
    message="Do you want to draw a new card?"
}
else if(s===21){
    message="Wohoo! You've got Blackjack!"
    hasBlackJack=true
}
else{
    message="You're out of the game!"
    isAlive=false
}
mel.innerText=message

}
document.getElementById("nc").onclick=function(){
    if(isAlive===true && hasBlackJack===false)
    {
    let card=getRandomCard()
    s+=card
    cards.push(card)
render()
    }
}
const user = [{username:"sai"},
{pass:"varun"}]