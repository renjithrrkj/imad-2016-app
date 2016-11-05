console.log('Loaded!');
//move image
var img=document.getElementById("madi");
var marginleft=0;
function moveRight(){
    marginleft=marginleft+5;
    img.style.marginleft=marginleft+'px';
}
img.oneclick = function(){
    var interval=setinterval(moveRight,100);
};
