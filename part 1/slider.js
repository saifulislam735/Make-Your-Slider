const img=[
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]

let index=0;
const image=document.getElementById('slideImage');
setInterval(()=>{
    if(index===img.length){
         index=0;
    }
    image.setAttribute('src',img[index]);
    index++;
},1000)