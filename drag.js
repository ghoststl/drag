// JavaScript Document

function drag(id){
	var obj = document.getElementById(id);

	obj.onmousedown = function(ev){
		var ev = ev || event;
		var disX = ev.clientX;
		var disY = ev.clientY;
	}
	document.onmousemove = function(){
		var x = 70;
		var y = 80;
	}
}