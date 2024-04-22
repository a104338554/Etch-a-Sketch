const container=document.querySelector(".container")

const box=document.createElement("div")
const changeGrid=document.querySelector("#changeGrid")
const reset=document.querySelector("#reset")
// initalize color to black
let color="black"
const black=document.querySelector("#black")
const grey=document.querySelector("#grey")
const rainbow=document.querySelector("#rainbow")
function randomColor(){
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    return `rgb(${a},${b},${c})`
}
let rainbowColor=randomColor()

// hoving effect
function getHoving(){
    const boxs=document.querySelectorAll(".box")
boxs.forEach(box=>box.addEventListener("mouseenter",()=>{

    box.style.backgroundColor=`${color}`
}))}



// add click event to button
black.addEventListener('click',()=>{
    color="black"
    
    box.style.backgroundColor="white"
    getHoving()
})
grey.addEventListener('click',()=>{
    color="grey"
    container.innerHTML=""
    getHoving()
})   
rainbow.addEventListener("click",()=>{

    color=`${rainbowColor}`
    container.innerHTML=""


})
console.log(rainbowColor);
// create grid function
function getSquare(){
const numSquare=+prompt("how many square per side") 
for(let i=1;i<=numSquare**2;i++){
// let row=Math.sqrt(numSquare)
const box=document.createElement("div")

box.style.width=`${500/numSquare}px`
box.style.height=`${500/numSquare}px`

box.classList.add("box")

container.appendChild(box)}

// hoving effect
const boxs=document.querySelectorAll(".box")
boxs.forEach(box=>box.addEventListener("mouseenter",()=>{

    box.style.backgroundColor=`${color}`
}))}

// change grid size
changeGrid.addEventListener('click',getSquare)
// reset all the grid
reset.addEventListener('click',()=>{
    container.innerHTML=""}
)

