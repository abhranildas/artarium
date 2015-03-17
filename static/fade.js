//Written by Abhranil Das (abhranildas@hotmail.com) based on code from http://www.switchonthecode.com/tutorials/javascript-tutorial-simple-fade-animation
function fade(eid, initOp, finalOp, TimeToFade, time)
{
	if (initOp==0)
	{
		document.getElementById(eid).style.visibility="visible";
	}
	var curTick = new Date().getTime();
	var elapsedTicks = curTick - time;
	var newOp = initOp+(finalOp-initOp)*elapsedTicks/TimeToFade;
	if (Math.abs(newOp-initOp)>Math.abs(finalOp-initOp))
	{
		document.getElementById(eid).style.opacity=finalOp;
		if (finalOp==0)
		{
			document.getElementById(eid).style.visibility="hidden"
		}
		return;
	}
	document.getElementById(eid).style.opacity=newOp;
	setTimeout("fade( '" + eid + "'," + initOp + "," + finalOp + "," + TimeToFade + "," + time + ")", TimeToFade/100);
}

/*function fadegallery(i) //not being used; abandoned for galappear
{
	gal=document.getElementById('gal'+i);
	if (gal==null)
		return;
	img=gal.getElementsByTagName("img")[0];
	if (img.width < img.height)
		img.style.width="140px"; //remove absolute pixel height
	else
		img.style.height="140px";
	gal.style.opacity=1;
	i++;
	setTimeout("fadegallery("+i+")",1000);
}*/

function galappear(id,size)
{
	gal=document.getElementById(id);
	img=gal.getElementsByTagName("img")[0];
	if (img.width < img.height)
	{
		img.style.width=size;
	}
	else
	{
		img.style.height=size;
	}
	gal.style.opacity=1;
}

function fadeshadow(eid, initOp, finalOp, TimeToFade, time)
{
	var curTick = new Date().getTime();
	var elapsedTicks = curTick - time;
	var newOp = initOp+(finalOp-initOp)*elapsedTicks/TimeToFade;
	if (Math.abs(newOp-initOp)>Math.abs(finalOp-initOp))
	{
		document.getElementById(eid).style.boxShadow=('0px 0px 10px '+finalOp+'px #888');
		return;
	}
	document.getElementById(eid).style.boxShadow=('0px 0px 10px '+newOp+'px #888');
	setTimeout("fadeshadow( '" + eid + "'," + initOp + "," + finalOp + "," + TimeToFade + "," + time + ")", TimeToFade/100);
}