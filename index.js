
// Open And Exit SideBar

let Bars = document.querySelector(".Bars")
let Exit = document.querySelector(".Exit")
let SideBar = document.querySelector(".SideBar")

Bars.addEventListener("click",()=>{
    SideBar.classList.remove("hide")
})
Exit.addEventListener("click",()=>{
    SideBar.classList.add("hide")
})


// Testimonial Banner

const TestimonialOne=[
    {
        imges:"images/banner1.jpg",
    },
    {
        imges:"images/banner2.jpg",
    },
]

let BannerImg = document.querySelector(".Banner-Img")
let indx=0

Testimonial_One()
function Testimonial_One(){

    let TestimonialOneImg = TestimonialOne[indx]
    BannerImg.src = TestimonialOneImg.imges
    indx++
    if(indx == TestimonialOne.length){
        indx=0 
    }
    setTimeout( ()=>{
        Testimonial_One()
    } ,4000)
}


// Scroll X And Y Phone


let leftPhone = document.querySelector(".left-Phone")
let rightPhone = document.querySelector(".right-Phone")
let PhoneList = document.querySelector(".Phone-List")



rightPhone.onclick = function(){
    PhoneList.scrollBy({
        left:400,
        behavior:'smooth',
    })
}

leftPhone.onclick = function(){
    PhoneList.scrollBy({
        left:-400,
        behavior:'smooth',
    })
}


// Scroll X And Y PC

let leftPC = document.querySelector(".left-PC")
let rightPC = document.querySelector(".right-PC")
let PCList = document.querySelector(".PC-List")


rightPC.onclick = function(){
    PCList.scrollBy({
        left:400,
        behavior:'smooth',
    })
}

leftPC.onclick = function(){
    PCList.scrollBy({
        left:-400,
        behavior:'smooth',
    })
}


// Scroll X And Y Cream


let leftcream = document.querySelector(".left-cream")
let rightcream = document.querySelector(".right-cream")
let CreamList = document.querySelector(".Cream-List")


rightcream.onclick = function(){
    CreamList.scrollBy({
        left:400,
        behavior:'smooth',
    })
}

leftcream.onclick = function(){
    CreamList.scrollBy({
        left:-400,
        behavior:'smooth',
    })
}



// Scroll X And Y Book


let leftBook = document.querySelector(".left-Book")
let rightBook = document.querySelector(".right-Book")
let BookList = document.querySelector(".Book-List")


rightBook.onclick = function(){
    BookList.scrollBy({
        left:400,
        behavior:'smooth',
    })
}

leftBook.onclick = function(){
    BookList.scrollBy({
        left:-400,
        behavior:'smooth',
    })
}



// 

let footerbtn = document.getElementById("footer-btn")

footerbtn.addEventListener("click",()=>{
    scroll({
        top:0,
        behavior:'smooth',
    })
})
