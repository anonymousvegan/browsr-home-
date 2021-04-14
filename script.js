let n = 17;
let t=100000;
const kontejner= document.getElementById("kontejner")
function podesi(){
    let r = parseInt(Math.random()*n+1);
    let s ="slike/" +r+".jpg";
    kontejner.style.backgroundImage="url("+s+")";
}
podesi()
setInterval(() => {
    podesi()
}, t);