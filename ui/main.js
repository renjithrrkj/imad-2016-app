console.log('Loaded!');
//move image
var img=document.getElementById("madi");
function moveRight(){
    marginleft = marginleft + 5;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function(){
    img.style.marginLeft = '1000px';
};
