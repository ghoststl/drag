// JavaScript Document

function drag(id){
	var obj = document.getElementById(id);

	obj.onmousedown = function(ev){
		var ev = ev || event;
		var disX = ev.clientX;
		var disY = ev.clientY;
		document.onmousemove = function(){
			var x = 10;
			var y = 20;
		}
	}
	document.onmousemove = function(){
		var x = 70;
		var y = 80;
	}
	var arr = 55;
}