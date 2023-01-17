let ham = document.getElementsByClassName("ham")[0];
let cross = document.getElementsByClassName("cross")[0];
let navItem = document.getElementsByClassName("nav-item")[0]
console.log(ham , cross , navItem)

ham.addEventListener("click" , ()=>{
    navItem.classList.toggle("nav-itemGo")
   
})

cross.addEventListener("click" , ()=>{
    navItem.classList.toggle("nav-itemGo")
    
})