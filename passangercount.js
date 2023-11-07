//document.getElementById("count").innerText=5;
let cou=document.getElementById("count")
console.log(cou)
let sa=document.getElementById("sav-p")
console.log(sa)
let c=0
document.getElementById("inc-btm").onclick=function(){
    c+=1
    cou.textContent=c
}
document.getElementById("rec-btm").onclick=function(){
    c=0
    cou.textContent=c
}
document.getElementById("sav-btm").onclick=function(){
    let pre=c
    sa.textContent+= pre+" - "
    //we can keep .innerText or Textcontent if we keep textcontent then spaces will look good
    c=0
    cou.innerText=c
    console.log(c)
}
