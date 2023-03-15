let imgList = Array.from(document.querySelectorAll(".item img"))
let boxcontainer = document.getElementById("boxcontainer")
let closebox = document.getElementById("closebox")
let back = document.getElementById("back")
let next = document.getElementById("next")
let innerbox = document.getElementById("innerbox")
let NumberOfImg = 0
for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", function () {
        boxcontainer.style.display = "flex"
        let imgSur = this.getAttribute("src")
        innerbox.style.backgroundImage = "url(" + imgSur + ")"
        NumberOfImg = imgList.indexOf(this)
    })
}
closebox.addEventListener("click", closeEL)
next.addEventListener("click", nextEL)
back.addEventListener("click", backEL)


function nextEL(){
    NumberOfImg++
    if(NumberOfImg==imgList.length){
        NumberOfImg=0
    }
    var nextImg = imgList[NumberOfImg].getAttribute("src")
    innerbox.style.backgroundImage = "url(" + nextImg + ")"
}
function backEL(){
    NumberOfImg--
    if(NumberOfImg<0){
        NumberOfImg=imgList.length-1
    }
    var nextImg = imgList[NumberOfImg].getAttribute("src")
    innerbox.style.backgroundImage = "url(" + nextImg + ")"
}

function closeEL() {
    boxcontainer.style.display = "none"
}
document.addEventListener("keyup", function(e){
 var keybord=e.key
 if(keybord=="ArrowRight"){
    nextEL()
 }
 else if(keybord=="ArrowLeft"){
    backEL()
 }
 if(keybord=="Escape"){
    closeEL()
 }
})
boxcontainer.addEventListener("click", function(e){
   if(e.target.getAttribute("id") == "boxcontainer"){
    closeEL()
   }
})