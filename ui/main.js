console.log('Loaded!');
//move image
var img=document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function(){
    var interval =setInterval(moveRight,50);
};
var main = function() 
  /* Push the body and the nav over by 285px over */
  $('.options').click(function() {
    $('.onetwothree').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });