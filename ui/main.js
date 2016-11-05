console.log('Loaded!');
//move image
var img=document.getElementById("madi");
var marginLeft = 0 ;
function moveRight(){
    marginLeft=marginLeft + 5;
    img.style.marginLeft=marginLeft + 'px';
}
img.oneclick = function(){
    var interval = setinterval(moveRight,100);
};
