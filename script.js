const container=document.querySelector(".container")

const box=document.createElement("div")

const changeGrid=document.querySelector("#changeGrid")
const reset=document.querySelector("#reset")
// initialize color to black
let color="black"
const black=document.querySelector("#black")
const getGrey=document.querySelector("#grey")
const rainbow=document.querySelector("#rainbow")
function randomColor(){
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    return `rgb(${a},${b},${c})`
}


//clear the color
function clearBoard(){
    let boxs = document.querySelectorAll(".container .box")
    for(let i=0;i<boxs.length;i++){
        boxs[i].style.backgroundColor='white'
    }
}


// hover effect
function getHover(color) {
    let boxs = document.querySelectorAll(".container .box")
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener('mouseenter', function () {
            boxs[i].style.backgroundColor = `${color}`

        })
    }
}





// add click event to button
black.addEventListener('click',()=>{
    clearBoard()
    color="black"
    getHover()
})
getGrey.addEventListener('click',()=>{
    clearBoard()
    // color="grey"



    getHover("grey")
})   
rainbow.addEventListener("click",()=>{

    clearBoard()
    let boxs = document.querySelectorAll(".container .box")
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener('mouseenter', function () {
            let rainbowColor=randomColor()
            boxs[i].style.backgroundColor = `${rainbowColor}`

        })
    }




})

// create grid function
function getSquare(){
    container.innerHTML=""
const numSquare=+prompt("how many square per side") 
for(let i=1;i<=numSquare**2;i++){
// let row=Math.sqrt(numSquare)
const box=document.createElement("div")

box.style.width=`${500/numSquare}px`
box.style.height=`${500/numSquare}px`

box.classList.add("box")

container.appendChild(box)}

// hover effect
    getHover(color)
}

// change grid size
changeGrid.addEventListener('click',getSquare)
// reset all the grid
reset.addEventListener('click',()=>{
    container.innerHTML=""}
)

// default 40*40 grid and black color
for(let i=1;i<=1600;i++){
// let row=Math.sqrt(numSquare)
    const box=document.createElement("div")
    box.style.width=`12.5px`
    box.style.height=`12.5px`
    box.classList.add("box")
    container.appendChild(box)}
getHover('black')