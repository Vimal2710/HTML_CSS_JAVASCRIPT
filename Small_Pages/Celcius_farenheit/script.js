function conversion()
{
    let inp = Number(document.getElementById("input").value)
    let out = inp * (9/5) +32
    let answer = document.getElementById("answer")
    answer.innerHTML="answer is "+out
}
