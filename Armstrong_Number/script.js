function armstrong(){
    let a=Number(document.getElementById("input").value)
    console.log(a)
    let b=a,sum=0,c
    while(a>0){
        c=a%10;
        sum=sum+c*c*c;
        a=Math.floor(a/10);
        console.log(sum)
    }
    let answer=document.getElementById("answer")
    if(sum==b){
        answer.innerHTML="The given Number "+b+" is an Armstrong Number"
    }
    else{
        answer.innerHTML="The given Number "+b+" is NOT an Armstrong Number"   
    }
}