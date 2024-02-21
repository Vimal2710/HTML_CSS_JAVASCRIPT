function sumofnnumbers(){
    let num=Number(document.getElementById("input").value)
    let sum=0
    for(let i=1;i<=num;i++)
    {
        sum=sum+i
    }
    console.log(sum)
    let answer=document.getElementById("answer")
    answer.innerHTML=sum
    let s="barathi"
console.log(s)
}
