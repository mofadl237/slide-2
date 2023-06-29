let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let img=document.querySelector(".slide img")
let index = 0;
let Image =[
    {
        id:0,
        source:"./asset/images/service_01.jpg",
        alt:"IMAGE ONE"
    },
    {
        id:1,
        source:"./asset/images/service_02.jpg",
        alt:"IMAGE Two"
    },
    {
        id:2,
        source:"./asset/images/service_03.jpg",
        alt:"IMAGE three"
    },
]
//let Iad = ["./asset/images/service_01.jpg","./asset/images/service_02.jpg","./asset/images/service_03.jpg"]
previous.addEventListener("click" , function (){
    if (index == 0){
        index = Image.length-1 
        img.src=Image[index].source
    }else{
        index --;
        img.src=Image[index].source
    }
});
next.addEventListener("click" , function(){
    if(index === Image.length - 1){
        index=0;
        img.src=Image[index].source;
        img.alt=Image[index].alt
    }else{
        index++;
        img.src=Image[index].source;
        img.alt=Image[index].alt;
    }
});


/*////////////////////////////////////////////////////////////////////text//////////*/
let previous_text = document.querySelector("#previous_text");
let next_text = document.querySelector("#next_text");
let img_text=document.querySelector(".slide_text img")
let index_text = 0;
let Text=document.querySelector(".slide_text h2")
let Image_text =[
    {
        id:0,
        source:"./asset/images/service_01.jpg",
        alt:"IMAGE ONE",
        text:"First Image"
    },
    {
        id:1,
        source:"./asset/images/service_02.jpg",
        alt:"IMAGE Two",
        text:"Second Image"
    },
    {
        id:2,
        source:"./asset/images/service_03.jpg",
        alt:"IMAGE three",
        text:"Third Image"
    },
]
//let Iad = ["./asset/images/service_01.jpg","./asset/images/service_02.jpg","./asset/images/service_03.jpg"]

previous_text.addEventListener("click" , function (){
    if (index_text == 0){
        index_text = Image_text.length-1 
        img_text.src=Image_text[index_text].source
        Text.innerHTML = Image_text[index_text].text
    }else{
        index_text --;
        Text.innerHTML = Image_text[index_text].text
        img_text.src=Image_text[index_text].source
    }
});
next_text.addEventListener("click" , function(){
    if (index_text == Image_text.length-1){
        index_text = 0 ;
        img_text.src=Image_text[index_text].source
        Text.innerHTML = Image_text[index_text].text
    }else{
        index_text++;
        img_text.src=Image_text[index_text].source
        Text.innerHTML = Image_text[index_text].text
    }
});
/*******************************boool//////////////////// */

let prev = document.querySelector("#previous_text_boll");
let nex = document.querySelector("#next_text_boll");
let imageBoll = document.querySelector(".slide_text_boll img");
let current = 0 ;
let textH2=document.querySelector(".slide_text_boll h2");
let boll = document.querySelector(".slide_text_boll .boll");
let imageArray = [
    {
        id:0,
        source:"asset/images/service_01.jpg",
        tex:"First Image"
    },
    {
        id:1,
        source:"asset/images/service_02.jpg",
        tex:"second Image"
    },
    {
        id:2,
        source:"asset/images/service_03.jpg",
        tex:"Third Image"
    },
];
function draw_boll(){
    for(let i = 0 ; i<imageArray.length ; i++){
        let bollI = document.createElement("i")
        bollI.className="fas fa-circle";
        boll.appendChild(bollI);
    }
};
draw_boll();
let allBollI = document.querySelectorAll(".fa-circle");
allBollI[current].classList.add("active")
function remove(){
   let all = [...allBollI];
   all.map((ele)=>{
    ele.classList.remove("active")
   });
   allBollI[current].classList.add("active")
}
prev.addEventListener("click" , function(){
    if(current == 0){
        current = imageArray.length-1;
        textH2.textContent=imageArray[current].tex
        imageBoll.src=imageArray[current].source;
    }else{
        current--;
        imageBoll.src=imageArray[current].source;
        textH2.textContent=imageArray[current].tex
    }
    remove();
});
nex.addEventListener("click" , function(){
    if (current == imageArray.length-1){
        current = 0 ;
        textH2.textContent=imageArray[current].tex
        imageBoll.src=imageArray[current].source;
    }else{
        current++;
        imageBoll.src=imageArray[current].source;
        textH2.textContent=imageArray[current].tex
    }
    remove();
})