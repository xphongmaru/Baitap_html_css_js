window.onload=function(){
    document.getElementById("slideShow").addEventListener('mouseover', function(){
        document.getElementById("prev").style.display="block";
        document.getElementById("next").style.display="block";

    });
    document.getElementById("slideShow").addEventListener('mouseout', function(){
        document.getElementById("prev").style.display="none";
        document.getElementById("next").style.display="none";

    });
    
    // bien
    imgSlide=document.getElementsByClassName('imgSlide');
    prev=document.getElementById('prev');
    next=document.getElementById('next');
    btn=document.getElementsByClassName('btn');
    numSlide=0;

    animationSlide();
    prev.addEventListener('click',function(){
        numSlide--;
        showSlide();
    })

    next.addEventListener('click',function(){
        numSlide++;
        showSlide();
    })


    function animationSlide(){
        for(i=0; i<imgSlide.length; i++)
        {
            imgSlide[i].style.display='none';
            btn[i].style.background='#ffffffe2'
        }
        numSlide++;
        if(numSlide<0)
        {
            numSlide=imgSlide.length;
        } 
        
        if(numSlide>imgSlide.length)
        {
            numSlide=1
        } ;


        imgSlide[numSlide-1].style.display='block';
        btn[numSlide-1].style.background='green'

        setTimeout(animationSlide, 1000);
    }
    function showSlide(){
        for(i=0;i<imgSlide.length; i++){
            imgSlide[i].style.display='none';
            btn[i].style.background='#ffffffe2';
        }
        if(numSlide<1) numSlide=imgSlide.length;
        if(numSlide>imgSlide.length) numSlide=1;


        imgSlide[numSlide-1].style.display='block'
        btn[numSlide-1].style.background='green'
    }


}
function btnElement(n){
    for(i=0;i<imgSlide.length;i++)
    {
        imgSlide[i].style.display='none'
        btn[i].style.background='#ffffffe2'
    }
    imgSlide[n].style.display='block'
    btn[n].style.background='green'

}
