function add(){
    let input1=document.getElementById("inp").value;
    let input2=document.getElementById("inp2").value;
    let sum 
    sum=Number(input1)+Number(input2)
    document.getElementById("ptag").innerText=sum
        

}
function mult(){
    let input1=document.getElementById("inp").value;
    let input2=document.getElementById("inp2").value;
    let sum
    sum=Number(input1)*Number(input2)
    document.getElementById("ptag").innerText=sum
}
function divi(){
    let input1=document.getElementById("inp").value;
    let input2=document.getElementById("inp2").value;
    let sum
    sum=Number(input1)/Number(input2)
    document.getElementById("ptag").innerText=sum
}
function mod(){
    let input1=document.getElementById("inp").value;
    let input2=document.getElementById("inp2").value;
    let sum
    sum=Number(input1)%Number(input2)
    document.getElementById("ptag").innerText=sum
}