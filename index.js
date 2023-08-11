var a=document.querySelectorAll(".drum");
for(var i=0;i<a.length;i++){
a[i].addEventListener("click",function()
{
    makesound(this.innerText);
    anime(this.innerText);
});
}
document.addEventListener("keypress",function(event)
{
   makesound(event.key);
   anime(event.key);
}
);
function makesound(a)
{
    var aud;
    switch(a)
    {
        case 'w':
            aud="sounds/crash.mp3";
            break;
        case 'a':
            aud="sounds/kick-bass.mp3";
            break;
        case 's':
            aud="sounds/snare.mp3";
            break;
        case 'd':
            aud="sounds/tom-1.mp3";
            break;
        case 'j':
            aud="sounds/tom-2.mp3";
            break;
        case 'k':
            aud="sounds/tom-3.mp3";
            break;
        case 'l':
            aud="sounds/tom-4.mp3";
            break;
        default:
            break;
    }
    var audio=new Audio(aud);
    audio.play();
}

function anime(a)
{
    document.querySelector("."+a).classList.add("pressed");
    setTimeout(function()
    {
        document.querySelector("."+a).classList.remove("pressed");
    },150);
    
}