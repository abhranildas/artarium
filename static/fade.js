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

function raise(i)
{
	$('#gal-img'+i).css('box-shadow', '0px 5px 15px 2px #777');
	$('#gallery-main-caption').html(captions[i]); /*when opacity transitions to 0, change caption */
	$('#gallery-main-caption').css('opacity',1);
}

function lower(i)
{
	$('#gal-img'+i).css('box-shadow', '0px 0px 10px #888');
	if (currentmode=='gallery-grid')
	$('#gallery-main-caption').css('opacity',0);
}

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