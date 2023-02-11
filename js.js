let right = document.querySelector(".right")
let left = document.querySelector(".left")
let scrollCards = document.querySelector(".main .main-movie .cards")


right.addEventListener("click", ()=>{
    scrollCards.scrollBy({
        left:400,
        behavior:"smooth"
    })
})

left.addEventListener("click", ()=>{
    scrollCards.scrollBy({
        left:-400,
        behavior:"smooth"
    })
})

let iconMark = document.querySelectorAll(".main .main-movie .cards .imge i")
iconMark.forEach(e => {

    e.addEventListener("click", (e)=>{
        e.target.style.color = "red"
        e.target.className = "fa-solid fa-bookmark"
    })
})

for(let i = 0; i < card.length; i++){
    let imag = document.createElement("div")
    imag.className = "imag"
    let ii = document.createElement("i")
    ii.className = "fa-regular fa-bookmark"
    let img = document.createElement("img")
    img.src = card[i].img
    let text = document.createElement("div")
    text.className = "text"
    let span = document.createElement("span")
    span.innerHTML = card[i].span
    let h4 = document.createElement("h4")
    h4.innerHTML = card[i].h4

    imag.appendChild(ii)
    imag.appendChild(img)
    imag.appendChild(text)
    text.appendChild(span)
    text.appendChild(h4)

    document.querySelector(".main2-movie .cards").appendChild(imag)
    
    console.log(card[i])
}

let search = document.getElementById("search")

function getInSearch(value){
    document.querySelector(".main2-movie .cards").innerHTML = ''
    for(let i = 0; i < card.length; i++){
        if(card[i].h4.includes(value) || card[i].span.includes(value)){
            let imag = document.createElement("div")
            imag.className = "imag"
            let ii = document.createElement("i")
            ii.className = "fa-regular fa-bookmark"
            let img = document.createElement("img")
            img.src = card[i].img
            let text = document.createElement("div")
            text.className = "text"
            let span = document.createElement("span")
            span.innerHTML = card[i].span
            let h4 = document.createElement("h4")
            h4.innerHTML = card[i].h4
        
            imag.appendChild(ii)
            imag.appendChild(img)
            imag.appendChild(text)
            text.appendChild(span)
            text.appendChild(h4)
        
            document.querySelector(".main2-movie .cards").appendChild(imag)
            
        }
    }
}