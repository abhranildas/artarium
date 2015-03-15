f=open('light-on-the-land.txt','r')
list = [i.strip() for i in f.readlines()]
f.close()
photo_count=len(list)-2
gallery_name=list.pop(0)
artist_name=list.pop(0)
images=[i.split('~') for i in list]
img_filenames=[i[0] for i in images]
captions=[i[1] for i in images]
buylinks=[i[2] for i in images]
print buylinks