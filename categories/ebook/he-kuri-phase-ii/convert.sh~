# ogv - OGG Theora
# THIS ONE WORKS (for Firefox)
ffmpeg -i anim-1.mp4 -acodec vorbis -vcodec libtheora -f ogg anim-1.ogv # THIS ONE WORKS!
# NOT SURE ABOUT THESE ONES
ffmpeg2theora -o anim-1.ogv anim-1.mp4
ffmpeg -i "INPUTFILE" -b 1500k -vcodec libtheora -acodec libvorbis -ab 160000 -g 30 "OUTPUTFILE.ogv"



# webm
ffmpeg -i "INPUTFILE"  -b 1500k -vcodec libvpx -acodec libvorbis -ab 160000 -f webm -g 30 "OUTPUTFILE.webm"
