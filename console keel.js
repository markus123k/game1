document.getElementById("aare").onclick=function(){
	let number1=parseInt(document.getElementsByTagName("input")[0].value);
	let number2=parseInt(document.getElementsByTagName("input")[1].value);
	let number3=parseInt(number1+number2);(number3);
	document.getElementsByTagName("span")[0].innerHTML=number3;	
}
document.getElementById("karl").onclick=function(){
	let number1=parseInt(document.getElementsByTagName("input")[2].value);
	let number2=parseInt(document.getElementsByTagName("input")[3].value);
	let number3=parseInt(number1*number2);(number3);
	document.getElementsByTagName("span")[1].innerHTML=number3;	
}
document.getElementById("toomas").onclick=function(){
	let number1=parseInt(document.getElementsByTagName("input")[4].value);
	let number2=parseInt(document.getElementsByTagName("input")[5].value);
	let number3=parseInt(number1/number2);(number3);
	document.getElementsByTagName("span")[2].innerHTML=number3;
}