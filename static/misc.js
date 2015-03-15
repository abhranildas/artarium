function togglemenu(menuid)
{
	var menu=document.getElementById(menuid)
	if (menu.style.display=='none')
	{
		menu.style.display='block';
		menu.style.opacity=1;
	}
	else
	{
		menu.style.opacity=0;
		menu.style.display='none';
	}
	return false;
}

function headerappear()
{
	document.getElementById('header').style.opacity=1;
}

function changegallerymode(tomode,imgnum)
{
	if (currentmode=='gallery-grid')
	{
		document.getElementById(currentmode).style.display='none';
		if (!imgnum) imgnum=1
		currentimg=imgnum;	//changing the global variable currentimg of the page that called this script
		document.getElementById('cart-link').style.visibility='visible';
		document.getElementById('navigation').style.display='inline';
		document.photo.src="galleries/"+gallerykey+"/"+img_filenames[imgnum-1]+".jpg";
		document.photo.alt=captions[imgnum];
		document.getElementById('gallery-main-caption').innerHTML=captions[imgnum-1];
		document.getElementById('cart-link').href=buylinks[imgnum-1];
        document.getElementById('navigation-count').innerHTML=(imgnum)+" of "+(imax);
		document.getElementById('gallery-filmstrip').style.display='block';
	}
	else if (currentmode=='gallery-lightbox')
	{
		document.getElementById('lightbox').style.opacity=0;
		setTimeout(function () {document.getElementById('lightbox').style.visibility='hidden';}, 200);
		document.getElementById('gallery-main-caption').className='';
		document.getElementById('gallery-footer-right').className='';
	}
	if (tomode=='gallery-grid')
	{
		document.getElementById('gallery-filmstrip').style.display='none';
		document.getElementById('navigation').style.display='none';
		document.getElementById('cart-link').style.visibility='hidden';
		document.getElementById(tomode).style.display='block';
	}
	else if (tomode=='gallery-lightbox')
	{
		document.getElementById('lightbox').style.visibility='visible';
		document.getElementById('lightbox').style.opacity=1;
		//document.getElementById('currpage').style.overflow='visible';		
		document.getElementById('gallery-main-caption').className='gallery-main-caption-lightbox';
		document.getElementById('gallery-footer-right').className='gallery-footer-right-lightbox';
		//document.photo.style.height='550px';
		//document.photo.style.marginTop='-10%';
	}
	document.getElementById(currentmode+'-button').style.opacity=0.5;
	document.getElementById(tomode+'-button').style.opacity=1;
	currentmode=tomode;
}