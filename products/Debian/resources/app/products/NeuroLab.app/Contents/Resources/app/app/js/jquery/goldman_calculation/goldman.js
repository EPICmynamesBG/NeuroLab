var $ = require('jquery');
//JQuery file that calculates answers and replaces text

$(document).ready(function(){
    var data = fetchValuesFromURL();
    data = calculateResult1(data);
    data = calculateResult2(data);
    data = calculateResult3(data);
    console.log(data);
    replaceAllValues(data);
});


function fetchValuesFromURL(){
    var valueArray = {};
    valueArray['NG_RT'] = parseFloat(gup('NG_RT'));
    valueArray['z'] = parseFloat(gup('NG_z'));
    valueArray['potassiumOutside'] = parseFloat(gup('KOut'));
    valueArray['potassiumInside'] = parseFloat(gup('KIn'));
    valueArray['sodiumOutside'] = parseFloat(gup('NaOut'));
    valueArray['sodiumInside'] = parseFloat(gup('NaIn'));
    valueArray['potassiumPerm'] = parseFloat(gup('KPerm'));
    valueArray['sodiumPerm'] = parseFloat(gup('NaPerm'));
    return valueArray;
}

function replaceAllValues(valueArray){
    for (var key in valueArray){
        regexReplace(key, valueArray[key].toString());
    }
}

/* ---- Actual calculations ---- */

function calculateResult1(data){
    var temp1 = (data['NG_RT'] / data['z']);
    var temp2 = log10((data['potassiumOutside']/data['potassiumInside']));
    var result = temp1 * temp2;
    data['result1'] = Math.round(result * 10000) / 10000;
    return data;
}

function calculateResult2(data){
    var dataCopy = data;
    var temp1 = (data['NG_RT'] / data['z']);
    var temp2 = log10((data['sodiumOutside']/data['sodiumInside']));
    var result = temp1 * temp2;
    data['result2'] = Math.round(result * 10000) / 10000;
    return data;
}

function calculateResult3(data){
    var top = (data['potassiumPerm']*data['potassiumOutside']) + (data['sodiumPerm']*data['sodiumOutside']);
    var bottom = (data['potassiumPerm']*data['potassiumInside']) + (data['sodiumPerm']*data['sodiumInside']);
    var result = data['NG_RT'] * log10(top/bottom);
    data['result3'] = Math.round(result * 10000) / 10000;
    return data;
}

function log10(val){
    return Math.log(val) / Math.log(10);
}

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

//replace a {{tag}} item with its value
function regexReplace(tag, value){
    var regex = new RegExp('\{\{'+tag+'\}\}', 'g');
    document.body.innerHTML = document.body.innerHTML.replace(regex, value);
}