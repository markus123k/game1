document.getElementById("mark").onclick=function() {
	let number1=parseFloat(document.getElementsByTagName("input")[0].value);
	let number2=parseFloat(document.getElementsByTagName("input")[1].value);
	let number3=parseFloat(number1 + number2);
	(number3);
	document.getElementsByTagName("span")[0].innerHTML=number3;
}

document.getElementById("piip").onclick=function(){
	let number1=parseFloat(document.getElementsByTagName("input")[0].value);
	let number2=parseFloat(document.getElementsByTagName("input")[1].value);
	let number3=parseFloat(number1*number2);
	(number3);
	document.getElementsByTagName("span")[0].innerHTML=number3;
}

document.getElementById("toot").onclick=function() {
	let number1=parseFloat(document.getElementsByTagName("input")[0].value);
	let number2=parseFloat(document.getElementsByTagName("input")[1].value);
	let number3=parseFloat(number1/number2);
	(number3);
	document.getElementsByTagName("span")[0].innerHTML=number3;
}