    //listen to shake event
function shImg(iName){
	iObj = document.images[iName].style;
	if (iObj.visibility == "visible") iObj.visibility = "hidden"; else iObj.visibility = "visible";
}

  function move() { var shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
      omikuji();
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}
    }

    function omikuji (){
            var dice = Math.floor(Math.random() * 3);
            var image_name;
            if (dice == 0) {
                image_name = "omikuji-daikichi.png";
            } else if  (dice == 1) {
                image_name = "omikuji-chuukichi.png";
            } else {
                image_name = "omikuji-hei.png";
            }
        
            document.getElementById("saisyo").style["display"] = "none";
            document.getElementById("kekka").src = "images/" + image_name;
            document.getElementById("kekka").style["display"] = "inline";
        }
    