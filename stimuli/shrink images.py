import os, Image, random

def scrambleImage( im ) :
    image_width = im.size[0]
    image_height = im.size[1]
    tile_width  = 10
    tile_height = 10
    currentx    = 0
    currenty    = 0
    tile_list   = []
    while currenty < image_height :
        while currentx < image_width :
            tile = im.crop( (currentx,currenty,currentx+tile_width,currenty+tile_height) )
            tile_list.append( tile )
            currentx += tile_width
        currenty += tile_height
        currentx = 0
    random.shuffle( tile_list )
    blank = Image.new( "RGB", ( image_width, image_height ) )
    currentx = 0
    currenty = 0
    while currenty + tile_height <= image_height :
        while currentx + tile_width <= image_width :
            blank.paste( tile_list.pop(), (currentx,currenty) )
            currentx += tile_width
        currenty += tile_height
        currentx = 0
    return blank        

for fn in [ 'binomial_solid_full_00.png', 'binomial_solid_full_01.png', 'binomial_solid_full_02.png', 'binomial_solid_full_10.png', 'binomial_solid_full_11.png', 'binomial_solid_full_12.png', 'binomial_solid_full_20.png', 'binomial_solid_full_21.png', 'binomial_solid_full_22.png', 'binomial_together_00.png', 'binomial_together_01.png', 'binomial_together_02.png', 'binomial_together_10.png', 'binomial_together_11.png', 'binomial_together_12.png', 'binomial_together_20.png', 'binomial_together_21.png', 'binomial_together_22.png', 'power_solid_full_00.png', 'power_solid_full_01.png', 'power_solid_full_02.png', 'power_solid_full_10.png', 'power_solid_full_11.png', 'power_solid_full_12.png', 'power_solid_full_20.png', 'power_solid_full_21.png', 'power_solid_full_22.png', 'power_together_00.png', 'power_together_01.png', 'power_together_02.png', 'power_together_10.png', 'power_together_11.png', 'power_together_12.png', 'power_together_20.png', 'power_together_21.png', 'power_together_22.png' ]:
    im = Image.open( fn )
    for i in range(0,10,1) :
        scrambled_im = scrambleImage( im )
        scrambled_im.save( "scrambled_"+str(i)+"_"+fn )

