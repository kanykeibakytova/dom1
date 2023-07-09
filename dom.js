// const text =document.getElementsByTagName("h1")
// const text1=document.getElementsByClassName("text")
// const text2=document.getElementById("text-id")

// const text2 =document.querySelector(".text")
// const text3=document.querySelector("#text-id")
// const  text=document.querySelector("h1")
// text.style.width="800px"
// text.style.height="60px"
// text.style.background="red"
//
// const btn=document.querySelector(".btn")
// const btn1=document.querySelector(".btn1")

// text.style.display="none"
// text.style.display="block"


// btn.addEventListener("click",() =>{
//     text.style.display="none"
// })
// btn1.addEventListener("click", () =>{
//     text.style.display="block"
// })
// btn1.addEventListener("click",()=>{
//     text.style.color="red"
// })


// text.style.color="green"
//
// btn.addEventListener("mouseover", ()=>{
//     text.style.color ="red"
// })
//
// btn.addEventListener("mouseleave", ()=>{
//     text.style.color=""
// })




const btn=document.querySelector(".btn")
btn.style.width="150px"
btn.style.height="50px"
btn.style.background="violet"
btn.style.borderRadius="10px 10px 0 10px"
btn.addEventListener("click", ()=>{
    line.style.display="block"
})

const line=document.querySelector(".block")
line.style.background="green"
line.style.width="650px"
line.style.height="400px"
line.style.display="none"
line.style.borderRadius="125px"
line.style.cursor="pointer"
line.style.margin="128px"
line.addEventListener("click",()=>{
    text.style.color="white"
})
line.addEventListener("click",()=>{
    text2.style.display="block"
    text2.style.color="white"
    // text2.style.textAlign="center"
    text.style.display="none"
})

const text=document.querySelector(".text")
text.style.color="black"
text.style.textAlign="center"
text.addEventListener("click",()=>{
    text.style.display="block"
})
const text2=document.querySelector(".text2")
text2.style.display="none"


const div =document.querySelector(".block")
div.addEventListener("mouseleave",()=>{
    div.style.display="none"
})























