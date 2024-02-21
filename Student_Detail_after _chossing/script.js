const button = document.querySelector('button')

let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('detail').appendChild(resultdiv)

button.addEventListener('click',stddetail)

function stddetail()
{
    // console.log('clicked')
    const s1 = document.getElementById('s1')
    const name = s1.options[s1.selectedIndex].value
    // console.log(name)
    let age=0, place='', current=''
    switch(name)
    {
        case 'vihaan':
            age=2
            place='tirunelveli'
            current='student'
            break
        case 'raja':
            age=29
            place='tirunelveli'
            current='plastic surgeon'
            break
            case 'seetha':
            age=2
            place='tirunelveli'
            current='surgeon'
            break
        case 'varshini':
            age=2
            place='tirunelveli'
            current='engineer'
            break
    }
    let displaydetail=`My name is ${name} , I am ${age} old person and lived in ${place} then I am a ${current} 😉`
    console.log(displaydetail)
    document.getElementById('result').innerHTML = displaydetail
    let ret
}


/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/

// const button = document.querySelector('button')
// let resultdiv = document.createElement('div')
// resultdiv.id = 'result'
// document.getElementById('wrapper').appendChild(resultdiv)

// //event listener
// button.addEventListener('click',displayStats)
// function displayStats(){
    
//     const input = document.getElementById("input")
//     const city = input.options[input.selectedIndex].value
//     let population = 0, literacyRate = 0, language =''
//     switch(city){
//         case 'Bengaluru':
//             population = 8443675
//             literacyRate = 88.71
//             language = 'Kannada'
//             break
//         case 'Chennai':
//             population = 4646732
//             literacyRate = 90.20
//             language = 'Tamil'
//             break
//         case 'Mumbai':
//             population = 12442373
//             literacyRate = 89.73
//             language = 'Marathi'
//             break
//         case 'Delhi':
//             population = 16787941
//             literacyRate = 86.20
//             language = 'Hindi'
//             break

//     }
//     let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
//     console.log(text)
    
//     document.getElementById('result').innerHTML = text

// }