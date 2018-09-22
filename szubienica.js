var zbiorHaslo= new Array(10);
var nrHasla= random();
var haslo;
function random()
{
	return Math.floor(Math.random()*10);
}
zbiorHaslo[0]="drzwi"
zbiorHaslo[1]="klamka";
zbiorHaslo[2]="miecz";
zbiorHaslo[3]="kto mieczem wojuje od miecza ginie";
zbiorHaslo[4]="kinga";
zbiorHaslo[5]="anakonda";
zbiorHaslo[6]="meduza";
zbiorHaslo[7]="sila";
zbiorHaslo[8]="nieustraszony";
zbiorHaslo[9]="mysz";
haslo = zbiorHaslo[nrHasla];
haslo = haslo.toUpperCase();


var dlugosc= haslo.length;
var haslo1 ="";
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var pomylka = 0;
	for(i=0;i<dlugosc;i++)
	{
	if(haslo.charAt(i)==" ") haslo1 +=" ";
		else haslo1+="-"
	}
function wypisz()
{
	document.getElementById("zdanie").innerHTML = haslo1 ;
}
window.onload = start;
 var litery =new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
	var tresc="";
	for(i=0;i<35;i++)
	{
		var element= "lit"+i;
		tresc+='<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>'
		if((i+1)%7==0) tresc+='<div style="clear:both;"></div>'
	}
	document.getElementById("alfabet").innerHTML = tresc;
	document.getElementById("obraz").innerHTML ='<img src="img/s0.jpg" alt="" />';
	
	wypisz();
}
String.prototype.ustawZnak=function (miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}
function sprawdz(nr)
{
	var trafiona = false;
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			haslo1=  haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
			
		}	
	}
	if(trafiona==true)
	{ 
		yes.play();
		var element= "lit"+nr;
		document.getElementById(element).style.background = "green";
		document.getElementById(element).style.border = "3px solid #00C000";
	}
	else 
	{
		pomylka++
		var obraz= "img/s"+pomylka + ".jpg";
		document.getElementById("obraz").innerHTML ='<img src="'+obraz+'" alt="" />';
		no.play();
		var element= "lit"+nr;
		document.getElementById(element).style.background = "red"
		document.getElementById(element).style.border = "3px solid #C00000"
			document.getElementById(element).setAttribute("onclick",";");	
	}
	//wygrana
		if(haslo1==haslo)
	{
		document.getElementById("alfabet").innerHTML='<h2>Udało się! Gratulacje!</h2> </br></br><span id="reset" onclick="location.reload()">Sprobuj ponownie!</span>'
	}
	//przegrana
	else if(pomylka>=9)
	{
		document.getElementById("alfabet").innerHTML='<h2>Nie udało się! Hasło to: '+haslo+'</h2> </br></br><span id="reset" onclick="location.reload()">Sprobuj ponownie!</span>'
	}
	wypisz();
}

