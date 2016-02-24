var $ = require('../js/jquery-src/jquery-2.2.1.min.js');
//JQuery file that calculates answers and replaces text

var ioArr, iiArr, z, base,
    pK, koArr, pNa, naoArr,
    kiArr, naiArr = null;

$(document).ready(function(){
    console.log(gup('test'));

});


//gets keys and values from url
function gup( name, url ) {
  if (!url) url = location.href;
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
	if (results != null){
		results[1] = results[1].replace(new RegExp("%20", 'g')," ");
	}
  return results == null ? null : results[1];
}