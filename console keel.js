document.getElementById("aare").onclick=function(){
	let number1=parseInt(document.getElementsByTagName("input")[0].value);
	let number2=parseInt(document.getElementsByTagName("input")[1].value);
	let number3=parseInt(number1+number2);(number3);
	document.getElementsByTagName("span")[0].innerHTML=number3;	
}
document.getElementById("karl").onclick=function(){
	let number1=parseInt(document.getElementsByTagName("input")[1].value);
	let number2=parseInt(document.getElementsByTagName("input")[0].value);
	let number3=parseInt(number1*number2);(number3);
	document.getElementsByTagName("span")[0].innerHTML=number3;	
}
