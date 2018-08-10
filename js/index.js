window.onload=function(){
    let left=document.querySelector(".img .left")
    let right=document.querySelector(".img .right")
    let img=document.querySelectorAll(".img img")
    let btn=document.querySelectorAll(".img .btn .son")
    console.log(left,right,img,btn)
    let num=0;
    left.onclick=function(){
        if(num<0){
            num=2;
        }
       
        for(let i=0;i<img.length;i++){
            img[i].style.zIndex=0;
            btn[i].style.background="#cccccc"
        }
        img[num].style.zIndex=5;
        btn[num].style.background="white";
        num--;
    }
    right.onclick=function(){
        if(num==3 ||num<0){
            num=0;
        }
       
        for(let i=0;i<img.length;i++){
            img[i].style.zIndex=0;
            btn[i].style.background="#cccccc"
        }
        img[num].style.zIndex=5;
        btn[num].style.background="white";
        num++;
    }
}