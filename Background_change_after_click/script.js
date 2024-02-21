let colour = document.getElementById("colour")
let button = document.getElementById("button")
let bodys = document.getElementById("bodys")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
// for(let i=0;i<hex.length;i++) console.log(`${i} is ${hex[i]}`)
button.addEventListener('click',bgcolour)

function bgcolour()
{
    let col = '#'
    for(let i=1;i<=6;i++)
    {
        col = col + random()
    }
    console.log(`${col}`)
    bodys.style.backgroundColor = col
}
// console.log(random())
function random(){
    let ran = Math.floor(Math.random()*16)
    return hex[ran]
}
