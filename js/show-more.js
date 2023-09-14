function ReadMore(){
    var dots=document.getElementById("dots");
    var dots=document.getElementById("more");
    var dots=document.getElementById("btn");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML="Подробнее";
        more.style.display="none"
    }
    else{
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline"
    }
    }
