function addition()
{
    let num1=Number(document.getElementById("input1").value)
    let num2=Number(document.getElementById("input2").value)
    let sum=num1+num2
    let answer=document.getElementById("answer")
    answer.innerHTML="Sum is "+sum
}