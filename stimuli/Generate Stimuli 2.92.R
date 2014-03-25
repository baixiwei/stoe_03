library( Cairo )

getDistributionData = function( func, param1, param2 ) {
    if ( func=="power law" ) {
        x       = seq( 1, 10, 0.1 )
        B       = param1
        a       = param2
        y       = B*(x^((-1)*a))    
    } else if ( func=="binomial" ) {
        if ( param1==20 ) {
            y   = dbinom( seq(0,20,1), 20, param2 )
        } else if ( param1==40 ) {
            y   = dbinom(0,40,param2) + 0.5*dbinom(1,40,param2)
            for ( x in seq(2,38,2) ) {
                y = c( y, dbinom(x,40,param2) + 0.5*(dbinom(x-1,40,param2)+dbinom(x+1,40,param2)) )
            }
            y   = c( y, dbinom(40,40,param2) + 0.5*dbinom(38,40,param2) )
        } else if ( param1==100 ) {
            y   = pbinom( 2, 100, param2 )
            for ( x in seq(5,95,5) ) {
                y = c( y, pbinom( x+2, 100, param2 ) - pbinom( x-3, 100, param2 ) )
            }
            y   = c( y, 1.0 - pbinom( 97, 100, param2 ) )
        }    
        x       = seq( 0.00, 1.00, .05)
    }
    return ( data.frame( x=x, y=y ) )
}

plotSingleGraph = function( type, transparent, idxs=FALSE, first=FALSE, x, y, xlim, ylim, xticks, yticks, xlab, ylab, label=FALSE ) {
    # p = par( no.readonly = TRUE )

    plotBaseGraph = function( xlim, ylim, xticks, yticks, xlab, ylab, size="large", color="black" ) {
        xs = c(2,3.5,2.5) # tick area, tick label area, axis label area
        if ( xlim[2]<=1 ) {
            ys = c(1,6.0,3.5) # tick area, tick label area, axis label area
        } else { 
            ys = c(1,5.0,3.5) # tick area, tick label area, axis label area
        }
        if ( size=="small" ) {
            par( las=1, cex=1/3, mar=c(sum(xs),sum(ys),2.5,1.5), oma=c(0,0,0,0) )        
        } else {
            par( las=1, cex=1, mar=c(5.1,4.1,0.5,0.5), oma=c(0,0,0,0) )
        }
        
        # create plot frame
        plot( 0, 0, col=rgb(0,0,0,0), xlim=xlim, ylim=ylim, axes=FALSE, xlab="", ylab="", frame.plot=TRUE, fg=color )
        
        # add x-axis
        if ( size=="small" ) {
            cex = 3
            cex.axis = 2.5
            # mgp = c(5.5,2.5,0)
            # mgp = c(6,2.5,0)
            mgp = c(xs[1]+xs[2],xs[1],0)
        } else { 
            cex = 1
            cex.axis = 1
            mgp = c(3,1,0)
        }
        # r = pretty( xlim )
        r = xticks
        if ( max(r)<=1 ) { l = paste(r*100,"%",sep="") } else { l = r }
        axis( side=1, cex.axis=cex.axis, mgp=mgp, at=r, lab=l, col=color, col.axis=color )
        title( xlab=xlab, cex.lab=cex, mgp=mgp, col.lab=color )

        # add y-axis
        if ( size=="small" ) {
            # mgp = c(5,2,0)
            # mgp = c(6,1,0)
            mgp = c(ys[1]+ys[2],ys[1],0)
        }
        # r = pretty( ylim )
        r = yticks
        if ( max(r)<=1 ) { l = paste(r*100,"%",sep="") } else { l = paste(r,".0",sep="") }
        axis( side=2, cex.axis=cex.axis, mgp=mgp, at=r, lab=l, col=color, col.axis=color )
        title( ylab=ylab, cex.lab=cex, mgp=mgp, col.lab=color )
    }
    
    if ( type=="superimposed" ) {

        if ( transparent ) {
            a    = 0.333
            glow = FALSE
        } else {
            a    = 1.0
            glow = TRUE
        }
        if ( idxs[1]==0 ) {         # red
            linec = rgb( 1, 0, 0, alpha=a )
            glowc = rgb( 1, 0, 0, alpha=0.333 )
        } else if ( idxs[1]==1 ) {  # purple
            linec = rgb( 160/255, 32/255, 240/255, alpha=a )
            glowc = rgb( 160/255, 32/255, 240/255, alpha=0.333 )
        } else if ( idxs[1]==2 ) {  # blue
            linec = rgb( 0, 0, 1, alpha=a )
            glowc = rgb( 0, 0, 1, alpha=0.333 )
        }
        lty = c( 1, 2, 3 )[ idxs[2] + 1 ]
        if ( first ) {              # plot not called yet
            plotBaseGraph( xlim, ylim, xticks, yticks, xlab, ylab ) 
        }
        lines(spline(x,y, method='n', n=500), lwd=3, col=linec, lty=lty)
        if ( glow ) {
            lines(spline(x,y, method='n', n=500), lwd=12, col=glowc, lty=1)
        }
        if ( label!=FALSE ) {
            # text(5,3,labels=c(label))
            text(0.5*xlim[2],0.9*ylim[2],labels=c(label))
        }
    } else if ( type=="separated_large" ) {
        plotBaseGraph( xlim, ylim, xticks, yticks, xlab, ylab ) 
        lines(spline(x,y, method='n', n=500), lwd=3, col="black")
        if ( label!=FALSE ) {
            # text(5,3,labels=c(label))
            text(0.5*xlim[2],0.9*ylim[2],labels=c(label))
        }
    } else if ( type=="separated_small_solid" | type=="separated_small_transparent" | type=="separated_small_unlabeled" ) {
        if ( transparent ) { c="gray" } else { c="black" }
        plotBaseGraph( xlim, ylim, xticks, yticks, xlab, ylab, "small", c )
        lines(spline(x,y, method='n', n=500), lwd=2, col=c)
        if ( label!=FALSE ) {
            # text(7,3.5,cex=3,labels=c(label))
            text(0.5*xlim[2],0.9*ylim[2],cex=2.5,labels=c(label))
        }
    } else if ( type=="example" ) {
        plotBaseGraph( xlim, ylim, xticks, yticks, xlab, ylab, "small", "black" )
        points( x, y )
        lines(spline(x,y, method='n', n=500), lwd=2 )
    }
    
    # par( p )
}

createGraph = function( func, fn, type, idxs ) {
    # determine width and height of plot and open graphics device
    if ( type=="superimposed" | type=="separated_large" ) {
        w = 800
        h = 510
    } else if ( type=="separated_small_solid" | type=="separated_small_transparent" | type=="separated_small_unlabeled" ) {
        w = 266
        h = 170
    }
    # png( fn, width=w, height=h )
    CairoPNG( fn, width=w, height=h )
    # generate graph params shared by all types
    if ( func == "power law" ) {
        B       = c(1,3,5)[ idxs[1] + 1 ]
        a       = c(0.6,1.0,1.4)[ idxs[2] + 1 ]
        d       = getDistributionData( "power law", B, a )
        xlim    = c(0,10)
        ylim    = c(0,5)
        xticks  = seq(0,10,1)
        yticks  = seq(0,5,1)
        xlab    = "Number of repetitions"
        ylab    = "Response time"
        l       = paste( "Initial time = ", B, "\nLearning rate = ", a, sep="" )
    } else if ( func == "binomial" ) {
        N       = c(20,40,100)[ idxs[1] + 1 ]
        p       = c(.25,.50,.75)[ idxs[2] + 1 ]
        d       = getDistributionData( "binomial", N, p )
        xlim    = c(0,1)
        ylim    = c(0,.6)
        xticks  = seq(0,1,0.2)
        yticks  = seq(0,.6,0.1)
        xlab    = "Proportion of successful outcomes"
        ylab    = "Probability"
        l       = paste( N, " repetitions\n", p*100, "% prob. of success", sep="" )
    }
    x   = d$x
    y   = d$y
    # plot graph according to type
    if ( type=="superimposed" ) {
        first = TRUE
        # first, plot all other graphs besides the one specified
        for ( rowIdx in c(0,1,2) ) {
            for ( colIdx in c(0,1,2) ) {
                if ( (rowIdx!=idxs[1]) | (colIdx!=idxs[2]) ) {
                    if ( func=="power law" ) {
                        y_temp = getDistributionData( "power law", c(1,3,5)[ rowIdx + 1 ], c(0.6,1.0,1.4)[ colIdx + 1 ] )$y
                        idxs_temp = c(rowIdx,colIdx)
                    } else if ( func=="binomial" ) {
                        y_temp = getDistributionData( "binomial", c(20,40,100)[ rowIdx + 1 ], c(.25,.50,.75)[ colIdx + 1 ] )$y
                        idxs_temp = c(colIdx,(2-rowIdx)%%3)
                    }
                    plotSingleGraph( type, TRUE, idxs_temp, first, x=x, y=y_temp, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab )
                    first = FALSE
                }
            }
        }
        # last, plot the specified graph so it will be in the foreground
        if ( func=="power law" ) {
            idxs_temp = c(idxs[1],idxs[2])
        } else if ( func=="binomial" ) {
            idxs_temp = c(idxs[2],(2-idxs[1])%%3)
        }
        plotSingleGraph( type, FALSE, idxs_temp, FALSE, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab, label=l )
    } else {
        if ( type=="separated_small_transparent" ) {
            trans = TRUE
            l     = FALSE
        } else if ( type=="separated_small_unlabeled" ) {
            trans = FALSE
            l     = FALSE
        } else {
            trans = FALSE
        }
        plotSingleGraph( type, transparent=trans, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab, label=l )
    }
    # close graphics device
    dev.off()
}

createPowerGraph = function( fn, type, idxs ) {
    createGraph( "power law", fn, type, idxs )
}

createBinomialGraph = function( fn, type, idxs ) {
    createGraph( "binomial", fn, type, idxs )
}

for ( rowIdx in c(0,1,2) ) {
    for ( colIdx in c(0,1,2) ) {
        idxs = c( rowIdx, colIdx )
        createPowerGraph( paste( "power_together_", rowIdx, colIdx, ".png", sep="" ), "superimposed", idxs )
        createPowerGraph( paste( "power_solid_full_", rowIdx, colIdx, ".png", sep="" ), "separated_large", idxs )
        createPowerGraph( paste( "power_solid_", rowIdx, colIdx, ".png", sep="" ), "separated_small_solid", idxs )
        createPowerGraph( paste( "power_transparent_", rowIdx, colIdx, ".png", sep="" ), "separated_small_transparent", idxs )
        createPowerGraph( paste( "power_unlabeled_", rowIdx, colIdx, ".png", sep="" ), "separated_small_unlabeled", idxs )
        createBinomialGraph( paste( "binomial_together_", rowIdx, colIdx, ".png", sep="" ), "superimposed", idxs )
        createBinomialGraph( paste( "binomial_solid_full_", rowIdx, colIdx, ".png", sep="" ), "separated_large", idxs )
        createBinomialGraph( paste( "binomial_solid_", rowIdx, colIdx, ".png", sep="" ), "separated_small_solid", idxs )
        createBinomialGraph( paste( "binomial_transparent_", rowIdx, colIdx, ".png", sep="" ), "separated_small_transparent", idxs )
        createBinomialGraph( paste( "binomial_unlabeled_", rowIdx, colIdx, ".png", sep="" ), "separated_small_unlabeled", idxs )
    }
}


# training examples for binomial

# ... were done in Excel as of this writing


# training examples for power law

w = 266; h = 170;
xlim = c(0,10); ylim = c(0,5)
xticks = seq(0,10,1); yticks  = seq(0,5,1)
xlab = "Number of whacks"; ylab = "Time in seconds"
pl = Vectorize( function( B, a, x ) { return( B*(x^((-1)*a)) ) }, c( "x" ) )

CairoPNG( "power_example_1.png", width=w, height=h )
x = c(1,2); B = 3; a = 1; y = pl(B=B,a=a,x=x)
plotSingleGraph( "example", transparent=FALSE, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab )
dev.off()

CairoPNG( "power_example_2.png", width=w, height=h )
x = seq(1,8,1); y = pl(B=B,a=a,x=x)
plotSingleGraph( "example", transparent=FALSE, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab )
dev.off()

CairoPNG( "power_example_3.png", width=w, height=h )
B = 5; y = pl(B=B,a=a,x=x)
plotSingleGraph( "example", transparent=FALSE, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab )
dev.off()

CairoPNG( "power_example_4.png", width=w, height=h )
a = 1.4; y = pl(B=B,a=a,x=x)
plotSingleGraph( "example", transparent=FALSE, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab )
dev.off()

CairoPNG( "power_example_5.png", width=w, height=h )
x = seq(1,10,.1); B = 3; a = 1.0; y = pl(B=B,a=a,x=x); xlab = "Number of repetitions"; ylab = "Response time";
plotSingleGraph( "separated_small_unlabeled", transparent=FALSE, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab )
dev.off()

CairoPNG( "power_example_6.png", width=w, height=h )
B = 5; a = 1.4; y = pl(B=B,a=a,x=x)
plotSingleGraph( "separated_small_unlabeled", transparent=FALSE, x=x, y=y, xlim=xlim, ylim=ylim, xticks=xticks, yticks=yticks, xlab=xlab, ylab=ylab )
dev.off()
