var scale = -1;
function lIlIIllIIlIlIllIIlIlIllI()
{
    alert("[object Object]")
}
function lIlIIlIllIIllIIlIlIIlIIl()
{
    document.getElementById("heaven").innerHTML += `<img src="Harpy.webp" onclick="lIlIIlIllIIllIIlIlIIlIIl();">`;
    var newAudio = new Audio("start_breeding.wav");
    newAudio.play()
}
function IlIIlIIIlIIIlIlIIlIllIlI()
{
    document.getElementById("cool").style.transform = `scaleY(${scale})`
    scale *= -1;
    var newAudio = new Audio("kaboom.mp3");
    newAudio.play()
}
var muza = new Audio('bag.mp3');
muza.loop = true;