function factorial(){
    let n=Number(document.getElementById("input").value)
    let answer=1;
    for(let i=1;i<=n;i++){
        answer=answer*i;
    }
    let fact=document.getElementById("answer")
    fact.innerHTML="Factorial of the given number is: "+answer
}