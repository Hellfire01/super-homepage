var degrees = 0;
function rotateAnimation(el){
    var elem = document.getElementById(el);
    if(navigator.userAgent.match("Chrome")){
	elem.style.WebkitTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
	elem.style.MozTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
	elem.style.msTransform = "rotate("+degrees+"deg)";
    } else if(navigator.userAgent.match("Opera")){
	elem.style.OTransform = "rotate("+degrees+"deg)";
    } else {
	elem.style.transform = "rotate("+degrees+"deg)";
    }
    setTimeout('rotateAnimation(\''+el+'\')',1);
    if (el == "cog-people-0") { // cette fonction est appellé deux fois mais la variable ne doit pas être incrémentée deux fois
	degrees += 0.6;
	if(degrees > 359){
	    degrees = 0;
	}
    }
}

var degrees_neg = 0;
function rotateAnimationRev(el){
    var elem = document.getElementById(el);
    if(navigator.userAgent.match("Chrome")){
	elem.style.WebkitTransform = "rotate("+degrees_neg+"deg)";
    } else if(navigator.userAgent.match("Firefox")){
	elem.style.MozTransform = "rotate("+degrees_neg+"deg)";
    } else if(navigator.userAgent.match("MSIE")){
	elem.style.msTransform = "rotate("+degrees_neg+"deg)";
    } else if(navigator.userAgent.match("Opera")){
	elem.style.OTransform = "rotate("+degrees_neg+"deg)";
    } else {
	elem.style.transform = "rotate("+degrees_neg+"deg)";
    }
    setTimeout('rotateAnimationRev(\''+el+'\')',1);
    degrees_neg -= 0.6;
    if(degrees_neg < -359){
	degrees_neg = 0;
    }
}
