let count=10;
let timer=document.getElementById("sec");
timer.innerHTML= count--;
setTimeout(()=>{
    timer.innerHTML= count--;
    setTimeout(()=>{
        timer.innerHTML= count--;
        setTimeout(()=>{
            timer.innerHTML= count--;
            setTimeout(()=>{
                timer.innerHTML= count--;
                setTimeout(()=>{
                    timer.innerHTML= count--;
                    setTimeout(()=>{
                        timer.innerHTML= count--;
                        setTimeout(()=>{
                            timer.innerHTML= count--;
                            setTimeout(()=>{
                                timer.innerHTML= count--;
                                setTimeout(()=>{
                                    timer.innerHTML= count--;
                                    setTimeout(()=>{
                                        timer.innerHTML= count--;
                                        document.querySelector(".timerdisplay").style.display="none";
                                        document.querySelector(".wishdisplay").style.display="block";
                                    },1000);                          
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);