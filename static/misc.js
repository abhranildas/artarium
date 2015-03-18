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
		document.getElementById('fadetop').style.display='none';
		document.getElementById('fadebottom').style.display='none';
		if (!imgnum) imgnum=1
		currentimg=imgnum;	//changing the global variable currentimg of the page that called this script
		document.getElementById('gallery-footer-left').style.opacity=1;
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
		if (tomode=='gallery-lightbox')
		{
			if (!document.getElementById('lightbox-dark'))
			{
			    var head  = document.getElementsByTagName('head')[0];
			    var link  = document.createElement('link');
			    link.id   = 'lightbox-dark';
			    link.rel  = 'stylesheet';
			    link.type = 'text/css';
			    link.href = 'lightbox-dark.css';
			    link.media = 'all';
			    head.appendChild(link);
			}
			else
			{
				sheet = document.getElementById('lightbox-dark')
				sheet.parentNode.removeChild(sheet)
			}
		}
		else
		{
			document.getElementById('lightbox').style.opacity=0;
			setTimeout(function () {document.getElementById('lightbox').style.visibility='hidden';}, 200);
			document.getElementById('gallery-main-photo-photo').className='';
			document.getElementById('gallery-main-caption').className='';
			document.getElementById('gallery-footer-right').className='';
			document.getElementById('gallery-lightbox-button-img').src='img/gallery-lightbox.svg'
			sheet = document.getElementById('lightbox-dark')
			if (sheet)
			sheet.parentNode.removeChild(sheet)
			document.getElementById('gallery-lightbox-button').title='Lightbox'
		}
	}
	if (tomode=='gallery-grid')
	{
		document.getElementById('gallery-filmstrip').style.display='none';
		document.getElementById('navigation').style.display='none';
		document.getElementById('cart-link').style.visibility='hidden';
		document.getElementById(tomode).style.display='block';
		document.getElementById('gallery-footer-left').style.opacity=0;
		document.getElementById('fadetop').style.display='block';
		document.getElementById('fadebottom').style.display='block';
	}
	else if (tomode=='gallery-lightbox')
	{
		document.getElementById('lightbox').style.visibility='visible';
		document.getElementById('lightbox').style.opacity=1;
		document.getElementById('gallery-main-caption').className='gallery-main-caption-lightbox';
		document.getElementById('gallery-footer-right').className='gallery-footer-right-lightbox';
		document.getElementById('gallery-main-photo-photo').className='lightbox-image';
		document.getElementById('gallery-lightbox-button-img').src='img/gallery-lightbox-toggle.svg'
		document.getElementById('gallery-lightbox-button').title='Toggle lightbox colour'
	}
	document.getElementById(currentmode+'-button').style.opacity=0.5;
	document.getElementById(tomode+'-button').style.opacity=1;
	currentmode=tomode;
}