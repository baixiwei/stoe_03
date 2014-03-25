//////////////////////////////////
// String Utilities
//////////////////////////////////

// from http://www.codeproject.com/Tips/201899/String-Format-in-JavaScript
String.prototype.format = function (args) {
    var str = this;
    return str.replace(String.prototype.format.regex, function(item) {
        var intVal = parseInt(item.substring(1, item.length - 1));
        var replace;
        if (intVal >= 0) {
            replace = args[intVal];
        } else if (intVal === -1) {
            replace = "{";
        } else if (intVal === -2) {
            replace = "}";
        } else {
            replace = "";
        }
        return replace;
    });
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

/* Sample usage.
var str = "She {1} {0}{2} by the {0}{3}. {-1}^_^{-2}";
str = str.format(["sea", "sells", "shells", "shore"]);
alert(str); */

var dateToString = function( d ) {
    var h = d.getHours();
    if ( h<10 ) {
        h = "0"+h;
    }
    var m = d.getMinutes();
    if ( m<10 ) {
        m = "0"+m;
    }
    return d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate() + " " + d.getDay() + " " + h + ":" + m;
}

var stripTags = function( str ) {
    return str.replace(/<(?:.|\n)*?>/gm, '');
}

//////////////////////////////////
// Array Utilities
//////////////////////////////////

function indexInArray( el, arr ) {
    var idx = -1;
    for ( var i=0; i<arr.length; i++ ) {
        if ( arr[i]==el ) {
            idx = i;
            break;
        }
    }
    return idx;
}

function compareArrays( R, S ) {
    if ( R.length==0 ) {
        return true;
    } else if ( S.length==0 ) {
        return true;
    } else {
        return ( (R[0]==S[0]) && compareArrays( R.slice(1,R.length), S.slice(1,S.length) ) );
    }
}

var range = function(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++)
        foo.push(i);
    return foo;
}

var subset = function( L, I ) {
    var foo = [];
    for (var i=0; i<I.length; i++) {
        foo.push( L[I[i]] );
    }
    return foo;
}

var repeat = function(x,n) {
    var foo = new Array( n );
    for (var i = 0; i < n; i++) {
        foo[i] = x;
    }
    return foo;
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

function shuffle(o) { //v1.0
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function sum( arr ) {
    var result=0;
    for ( var i=0; i<arr.length; i++ ) {
        result += arr[i];
    }
    return result;
}

//////////////////////////////////
// Other Utilities
//////////////////////////////////

var random_choice = function( N ) {
    return Math.floor( Math.random()*N );
}

//
// This method Gets URL Parameters (GUP)
// (from Amazon's MTurk command line tools pack)
function gup( name )
{
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var tmpURL = window.location.href;
  var results = regex.exec( tmpURL );
  if( results == null )
    return "";
  else
    return results[1];
}

function preload(sources)
{
  var images = [];
  for (i = 0, length = sources.length; i < length; ++i) {
    images[i] = new Image();
    images[i].src = sources[i];
  }
}