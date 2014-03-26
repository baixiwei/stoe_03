//////////////////////////////////
// function presenter class
//////////////////////////////////

/*
Function presenter provides an interface for presenting a graphical display whose contents are controlled by two sliders.  The graphical display shows one of two functions - binomial distribution or power law distribution.  Each has two parameters, for each of which 3 parameter settings are possible.  The sliders are used to control the parameter settings and thereby change the graphical display.  spatialOrg and temporalOrg specify different versions of the graphical display, as described below:
    spatialOrg = "Superimposed", temporalOrg = "Superimposed": all the graphs corresponding to different param settings are shown in a single graph. That corresponding to current param vals is highlighted and the others backgrounded.
    spatialOrg = "Superimposed", temporalOrg = "Separated": all the graphs corresponding to different param settings are shown in the same space, but only that corresponding to current param vals is displayed.
    spatialOrg = "Separated", temporalOrg = "Superimposed": the graphs corresponding to different param settings are laid out in a grid. All graphs are displayed at once, but that corresponding to current param vals is highlighted and the others backgrounded.
    spatialOrg = "Separated", temporalOrg = "Separated": the graphs corresponding to different param settings are laid out in a grid. Only the graph corresponding to current param vals is displayed.
mask is a new argument added for experiment 3 in this series. If set to false, it does nothing; if set to true, the presenter inserts a visual pattern mask for a brief period between the time a slider setting is changed and the time the new display is shown.
onClick will run each time the sliders are used. This argument can be used to make the function presenter pass usage data back to whoever created it.
Function presenter provides the following methods:
    drawSelf: writes HTML for the graphical display and sliders to location (presumably a div or table cell) of given height and width
    setVals: set the sliders according to given parameter values and adjust image accordingly. Note that "parameter values" are not the same as actual slider values. The range of possible param values depends on which functionType was used to create the functionPresenter object.
    getVals: get the parameter values corresponding to the current slider settings.
    disableSliders: freeze the sliders in their current position.
    enableSliders: undo the effect of disableSliders.
*/

function functionPresenter( functionType, spatialOrg, temporalOrg, mask, onClick ) {
    // store params as properties
    // functionType must be either "Binomial" or "Power Law"
    // spatialOrg and temporalOrg must be either "Separated" or "Superimposed"
    this.functionType   = functionType;
    this.spatialOrg     = spatialOrg;
    this.temporalOrg    = temporalOrg;
    this.mask           = mask;
    // methods
    this.drawSelf       = drawSelf;
    this.updateImage    = updateImage;
    this.displayMask    = displayMask;
    this.setVals        = setVals;
    this.getVals        = getVals;
    this.slidersDisabled = slidersDisabled;
    this.disableSliders = disableSliders;
    this.enableSliders  = enableSliders;
    this.onClick        = (onClick!=undefined) ? onClick : function() {console.log("functionPresenter onClick not defined");};
}

// createGraphsHTML
// returns a [3][3] array containing the HTML which should be displayed for the various parameter settings
function createGraphsHTML( functionType, spatialOrg, temporalOrg ) {
    var functionName = { "Binomial": "binomial", "Power Law": "power" }[ functionType ];
    var imageArray   = new Array( 3 );
    if ( spatialOrg=="Superimposed" ) {
        if ( temporalOrg=="Superimposed" ) {
            for ( var row=0; row<3; row++ ) {
                imageArray[row] = new Array( 3 );
                for ( var col=0; col<3; col++ ) {
                    imageArray[row][col] = "<img src='stimuli/"+functionName+"_together_" + row.toString() + col.toString() + ".png' class='lggraph'>";
                }
            }
        } else if ( temporalOrg=="Separated" ) {
            for ( var row=0; row<3; row++ ) {
                imageArray[row] = new Array( 3 );
                for ( var col=0; col<3; col++ ) {
                    imageArray[row][col] = "<img src='stimuli/"+functionName+"_solid_full_" + row.toString() + col.toString() + ".png' class='lggraph'>";
                }
            }
        }
    } else if ( spatialOrg=="Separated" ) {
        if ( temporalOrg=="Superimposed" ) {
            for ( var row=0; row<3; row++ ) {
                imageArray[row] = new Array( 3 );
                for ( var col=0; col<3; col++ ) {
                    imageArray[row][col] = "";
                    for ( var i=2; i>-1; i-- ) {
                        for ( var j=0; j<3; j++ ) {
                            imageArray[row][col] += "<img src='stimuli/"+functionName+"_";
                            imageArray[row][col] += ((i==row)&&(j==col)) ? "solid_" : "transparent_";
                            imageArray[row][col] += i.toString() + j.toString() + ".png' class='smgraph'>";
                        }
                    }
                }
            }
        } else if ( temporalOrg=="Separated" ) {
            for ( var row=0; row<3; row++ ) {
                imageArray[row] = new Array( 3 );
                for ( var col=0; col<3; col++ ) {
                    imageArray[row][col] = "";
                    for ( var i=2; i>-1; i-- ) {
                        for ( var j=0; j<3; j++ ) {
                            imageArray[row][col] += "<img src='stimuli/";
                            imageArray[row][col] += ((i==row)&&(j==col)) ? ( functionName + "_" + "solid_" + i.toString() + j.toString() ) : "small_blank";
                            imageArray[row][col] += ".png' class='smgraph'>";
                        }
                    }
                }
            }
        }
    }
    // temporally separated is not done yet, so I treat everything as temporally superimposed
    var graphsHTML = "";
    for ( var rowIdx=0; rowIdx<3; rowIdx++ ) {
        for ( var colIdx=0; colIdx<3; colIdx++ ) {
            graphsHTML += '<div id="graph_' + rowIdx.toString() + colIdx.toString() + '" class="graph_display">';
            graphsHTML += imageArray[rowIdx][colIdx] + '</div>';
        }
    }
    return graphsHTML;
}

// createMasksHTML
// returns a [3][3][10] array containing pattern masks to be displayed in between presentations of graphs
function createMasksHTML( functionType, spatialOrg, temporalOrg ) {
    var functionName = { "Binomial": "binomial", "Power Law": "power" }[ functionType ];
    var imageArray   = new Array( 3 );
    var num_masks    = 10;
    if ( spatialOrg=="Superimposed" ) {
        if ( temporalOrg=="Superimposed" ) {
            for ( var row=0; row<3; row++ ) {
                imageArray[row] = new Array( 3 );
                for ( var col=0; col<3; col++ ) {
                    imageArray[row][col] = new Array( num_masks );
                    for ( var i=0; i<num_masks; i++ ) {
                        imageArray[row][col][i] = "<img src='stimuli/scrambled_"+i+"_"+functionName+"_together_" + row.toString() + col.toString() + ".png' class='lggraph'>";
                    }
                }
            }
        } else if ( temporalOrg=="Separated" ) {
            for ( var row=0; row<3; row++ ) {
                imageArray[row] = new Array( 3 );
                for ( var col=0; col<3; col++ ) {
                    imageArray[row][col] = new Array( num_masks );
                    for ( var i=0; i<num_masks; i++ ) {
                        imageArray[row][col][i] = "<img src='stimuli/scrambled_"+i+"_"+functionName+"_solid_full_" + row.toString() + col.toString() + ".png' class='lggraph'>";
                    }
                }
            }
        }
    } else if ( spatialOrg=="Separated" ) {
        // not implemented because this experiment was only intended to run with superimposed spatial organization
    }
    var masksHTML = "";
    for ( var rowIdx=0; rowIdx<3; rowIdx++ ) {
        for ( var colIdx=0; colIdx<3; colIdx++ ) {
            for ( var i=0; i<num_masks; i++ ) {
                masksHTML += '<div id="mask_' + rowIdx.toString() + colIdx.toString() + i.toString() + '" class="graph_display">';
                masksHTML += imageArray[rowIdx][colIdx][i] + '</div>';
            }
        }
    }
    return masksHTML;
}

// drawSelf
// adds sliders, slider labels, and graph (for slider settings 0 0) to location
function drawSelf( location, heightPx, widthPx ) {
    var self    = this;
    // create table for sliders and graphs
    var col1Wd  = 100;
    var col2Wd  = 25;
    var graphWd = ( widthPx - col1Wd - col2Wd );
    var graphHt = graphWd * 512 / 800;
    var row2Ht  = col2Wd;
    var row1Ht  = ( heightPx - graphHt - row2Ht );
    var table   = $( '\
        <table style="background-color:#666666">\
            <col style="width:'+col1Wd+'px"><col style="width:'+col2Wd+'px"><col style="width:'+graphWd+'px">\
            <tr style="height:'+row1Ht+'px"><td></td><td></td><td id="col_slider_val"></td></tr>\
            <tr style="height:'+row2Ht+'px"><td></td><td></td><td id="col_slider_cell"></td></tr>\
            <tr style="height:'+graphHt+'px"><td id="row_slider_val"></td><td id="row_slider_cell"></td><td id="graph_cell"></td></tr>\
        </table>' );
    location.append( table );
    // find / create and save key DOM elements for future reference
    self.rowSliderVal   = table.find( "#row_slider_val" );
    self.colSliderVal   = table.find( "#col_slider_val" );
    self.rowSlider      = $('<div id="row_slider" class="graph_slider"></div>');
    self.colSlider      = $('<div id="col_slider" class="graph_slider"></div>');
    self.graphSpace     = $('<div id="graph" style="width:'+graphWd+'px;height:'+graphHt+'px"></div>' );
    // add newly created DOM elements to the table
    table.find( "#row_slider_cell" ).append( self.rowSlider );
    table.find( "#col_slider_cell" ).append( self.colSlider );
    table.find( "#graph_cell" ).append( self.graphSpace );
    // change slider elements into sliders, add images, set slider to update images
    self.rowSlider.slider( { min: 0, max: 2, value: 0, orientation: "vertical" } );
    self.colSlider.slider( { min: 0, max: 2, value: 0 } );
    self.graphSpace.html( createGraphsHTML( this.functionType, this.spatialOrg, this.temporalOrg ) );
    if ( this.mask ) {
        self.graphSpace.append( createMasksHTML( this.functionType, this.spatialOrg, this.temporalOrg ) );
    }
    table.find( ".graph_slider" ).on( "slidechange", function () {
        self.onClick();
        if ( self.mask ) {
            self.displayMask();
            if ( !self.slidersDisabled() ) {
                self.disableSliders();
                setTimeout( function () { self.updateImage(); self.enableSliders(); }, 750 );
            } else {
                setTimeout( function () { self.updateImage(); }, 750 );
            }
        } else {
            self.updateImage();
        }
        } );
    // format the elements
    self.colSliderVal.css( { "vertical-align": "middle", "text-align": "center", "color": "white" } );
    self.rowSliderVal.css( { "vertical-align": "middle", "text-align": "center", "color": "white", "padding-left": "10px", "padding-right": "10px" } );
    self.rowSlider.css( { 'height': Math.floor(graphHt*2/3)+'px', 'margin-bottom': Math.floor(graphHt/6)+'px' } );
    self.colSlider.css( { 'width': Math.floor(graphWd*2/3)+'px', 'margin-left': Math.floor(graphWd/6)+'px' } );
    table.find( 'img.lggraph' ).css( { 'width': (Math.floor(graphWd)-3)+'px','display': 'block', 'float': 'left', 'vertical-align': 'top' } );
    // yes, the above with graphWd is a hack
    table.find( 'img.smgraph' ).css( { 'width': Math.floor(graphWd/3)+'px','display': 'block', 'float': 'left', 'vertical-align': 'top' } );
    // run updateImage, which will hide all of the graphs or graph sets except that for the current slider vals
    self.updateImage();
}

// var x = 0;
function updateImage() {
    // show the currently selected graph and hide all others
    this.graphSpace.children( '.graph_display' ).hide();
    var rowIdx  = this.rowSlider.slider( "value" );
    var colIdx  = this.colSlider.slider( "value" );
    this.graphSpace.children( '#graph_' + rowIdx.toString() + colIdx.toString() ).show();
    // display the slider labels
    var rowStr, colStr;
    if ( this.functionType=="Binomial" ) {
        rowStr  = ( [ 20, 40, 100 ][ rowIdx ] ) + "<br>repetitions";
        colStr  = ( [ "25%", "50%", "75%" ][ colIdx ] ) + " probability of success";
    } else if ( this.functionType=="Power Law" ) {
        rowStr  = "Initial time<br>= " + ( [ 1, 3, 5 ][ rowIdx ] );
        colStr  = "Learning rate = " + ( [ "0.6", "1.0", "1.4" ][ colIdx ] );
    }
    this.rowSliderVal.html( rowStr );
    this.colSliderVal.html( colStr );
    // record the current positions of the sliders. these are used by displayMask, below
    this.lastSliderValueRow = rowIdx;
    this.lastSliderValueCol = colIdx;
    // console.log( "row index: " + rowIdx + "; col index: " + colIdx + "; row value: " + rowStr + "; col value: " + colStr );
}

function displayMask() {
    // show a randomly selected mask and hide everything else in the graph space
    this.graphSpace.children( '.graph_display' ).hide();
    var rowIdx  = this.lastSliderValueRow;
    var colIdx  = this.lastSliderValueCol;
    var maskIdx = Math.floor( Math.random()*10 );   // adjust according to actual number of masks
    this.graphSpace.children( '#mask_' + rowIdx.toString() + colIdx.toString() + maskIdx.toString() ).show();
    console.log( "Displaying pattern mask: " + this.graphSpace.children( '#mask_' + rowIdx.toString() + colIdx.toString() + maskIdx.toString() ).html() );
}

function setVals( rowVal, colVal ) {
    var rowVals, colVals;
    if ( this.functionType=="Binomial" ) {
        rowVals = [ 20, 40, 100 ];
        colVals = [ .25, .5, .75 ];
    } else if ( this.functionType=="Power Law" ) {
        rowVals = [ 1, 3, 5 ];
        colVals = [ 0.6, 1.0, 1.4 ];
    }
    this.rowSlider.slider( "option", "value", rowVals.indexOf(rowVal) );
    this.colSlider.slider( "option", "value", colVals.indexOf(colVal) );
}

function getVals() {
    var rowVals, colVals;
    if ( this.functionType=="Binomial" ) {
        rowVals = [ 20, 40, 100 ];
        colVals = [ .25, .5, .75 ];
    } else if ( this.functionType=="Power Law" ) {
        rowVals = [ 1, 3, 5 ];
        colVals = [ 0.6, 1.0, 1.4 ];
    }
    var rowIdx  = this.rowSlider.slider( "value" );
    var colIdx  = this.colSlider.slider( "value" );
    return [ rowVals[rowIdx], colVals[colIdx] ];
}

function slidersDisabled() {
    return( this.rowSlider.slider( "option", "disabled" ) && this.colSlider.slider( "option", "disabled" ) );
}

function disableSliders() {
    this.rowSlider.slider( "option", "disabled", true );
    this.colSlider.slider( "option", "disabled", true );
}

function enableSliders() {
    this.rowSlider.slider( "option", "disabled", false );
    this.colSlider.slider( "option", "disabled", false );
}
