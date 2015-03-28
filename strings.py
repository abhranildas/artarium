def togglegalart(column,key):
    f=open('gallery-artist.txt','r')
    bothkeylist=[i.split(':') for i in f.read().split(',')]
    for i in range(len(bothkeylist)):
        if key == bothkeylist[i][column]:
            return bothkeylist[i][column-1]

def stringlist_gallery(gallerykey,artistkey):   #reads the galart file
    f=open('gallery-info/'+gallerykey+'.txt','r')
    list = [i.strip() for i in f.readlines()]
    f.close()
    photo_count=len(list)-2
    gallery_name=list.pop(0)
    artist_name=list.pop(0)
    images=[i.split('~') for i in list]
    img_filenames=[i[0] for i in images]
    captions=[i[1] for i in images]
    buylinks=[i[2] for i in images]
    f=open('artist-info/'+artistkey+'.txt','r')
    list = f.read().split('\n')
    f.close()
    artist_name=list[0]
    bio='<p>'+'</p><p>'.join(list[1:])+'</p>'
    return {
'gallerykey':gallerykey,
'artistkey':artistkey,
'gallery_name':gallery_name,
'artist_name':artist_name,
'photo_count':photo_count,
'img_filenames':img_filenames,
'captions':captions,
'buylinks':buylinks,
'bio':bio,
'images':images,
'galleries':galleries(gallerykey), #to construct the galleries menu
'artists':artists(artistkey) #to construct the artists menu
}

def galleries(gallerykey=0): #list of gallery objects to construct gallery menu. Argument is the gallery whose page this menu is for. If unsupplied, all are links.
    f=open('gallery-artist.txt','r')
    keylist=list(set([i.split(':')[0] for i in f.read().split(',')]))   #non-repeating gallery list from gallery-artist.txt. Will work for 1 gallery by multiple artists (rare). Shouldn't work the other way round.
    f.close()
    galleries=[]
    for key in keylist:
        gallery={}
        gallery['key']=key
        #open file and get name of gallery:
        f=open('gallery-info/'+key+'.txt','r')
        gallery['name']=[i.strip() for i in f.readlines()].pop(0)
        if key==gallerykey:
            gallery['this']=True
        galleries.append(gallery)
    return galleries

def artists(artistkey=0): #list of artist objects to construct gallery menu. Argument is the artist whose page this menu is for. If unsupplied, all are links.
    f=open('gallery-artist.txt','r')
    keylist=list(set([i.split(':')[1] for i in f.read().split(',')]))   #non-repeating artist list from gallery-artist.txt. Will work for multiple galleries by 1 artist. Shouldn't work the other way round.
    f.close()
    artists=[]
    for key in keylist:
        artist={}
        artist['key']=key
        #open file and get name of artist:
        f=open('artist-info/'+key+'.txt','r')
        artist['name']=[i.strip() for i in f.readlines()].pop(0)
        if key==artistkey:
            artist['this']=True
        artists.append(artist)
    return artists

def gallery_previews():
    f=open('gallery-info/gallery-keys.txt','r')
    keylist=f.read().split(',')
    f.close()
    s=''
    for i in range(len(keylist)):
        gallerykey=keylist[i].split(':')[0]
        dict=stringlist_gallery(gallerykey,togglegalart(0,gallerykey))
        dict['i']=i
        s+=  '''                                    <a href="/%(gallerykey)s">
                                        <div class="gallery-preview" onmouseover="raise(%(i)d)" onmouseout="lower(%(i)d)" id="gal%(i)d">
                                            <div class="gallery-preview-img" id="gal-img%(i)d">
                                                <img onload="galappear('gal%(i)d', '140px')" src="galleries/thumbnails/%(gallerykey)s.jpg" alt='%(gallery_name)s'>
                                            </div>
                                            <div class="gallery-preview-text" id="gal-text%(i)d">
                                                <span class="gallery-name">%(gallery_name)s</span><br/>
                                                <span class="artist-name">%(artist_name)s</span>
                                            </div>
                                        </div>
                                    </a>
'''%dict
    return s

faqpage=''' <div id="gallery-main-title">
                                    <div id="gallery-main-name">Frequently Asked Questions</div>
                                </div>
                               
<p><b>How do I sell my photographs online through Artarium?</b></p><p><i>Please send us a link with your portfolio at contact@artarium.in. We will review your photographs and get back to you!</i></p>
<br><p><b>Does Artarium take care of printing and other logistics?</b></p><p><i>Yes, Artarium takes care of printing and delivering your photographs to buyers. </i></p>
'''

stringlist_homepage={
'gallery_previews':gallery_previews(),
'galleries':galleries(), #to construct the galleries menu
'artists':artists() #to construct the artists menu
}

def stringlist_artist(artistkey):
    f=open('artist-info/'+artistkey+'.txt','r')   
    list = f.read().split('\n')
    f.close()
    artist_name=list[0]
    bio='<p>'+'</p><p>'.join(list[1:])+'</p>'
    gallerykey=togglegalart(1,artistkey)    
    #open file to read gallery name:
    f=open('gallery-info/'+gallerykey+'.txt','r')
    gallery_name=[i.strip() for i in f.readlines()].pop(0)
    return {
'artistkey':artistkey,
'artist_name':artist_name,
'gallerykey':gallerykey,
'gallery_name':gallery_name,
'bio':bio,
'galleries':galleries(), #construct the galleries menu
'artists':artists(artistkey) #to construct the artists menu
}

stringlist_about={
'galleries':galleries(), #construct the galleries menu
'artists':artists() #to construct the artists menu
}

stringlist_basic={
'galleries':galleries(), #construct the galleries menu
'artists':artists() #to construct the artists menu
}