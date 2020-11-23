// JavaScript Document
var a,b,c,d;
a=prompt('Введіть відомий катет',9);
c=prompt('Введіть гіпотенузу',15);

if (a<=0){
	alert("a<=0")}
else if (c<=0){
	alert("c<=0")
}
else {
b=(c*c-a*a);
d=Math.sqrt(b);
document.write("невідомий катет дорівнює <br/>");
document.write(d);}