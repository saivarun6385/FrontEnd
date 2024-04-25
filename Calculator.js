let num1=2
let num2=8
document.getElementById("n1").textContent=num1
document.getElementById("n2").textContent=num2

let player=[{
    username:"varun",
    password:"sai"

}];

let s=document.getElementById("sum")
document.getElementById("add").onclick=function(){
    let res=num1+num2
    s.textContent="Sum:"+ res
}
document.getElementById("sub").onclick=function(){
    let res=num1-num2
    s.textContent="sum:"+res
}
document.getElementById("div").onclick=function(){
    let res=num1/num2
    s.textContent="sum:"+res
}
document.getElementById("mul").onclick=function(){
    let res=num1*num2
    s.textContent="sum:"+res
}