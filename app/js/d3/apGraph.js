require("d3");
//var $ = require('jquery');

var parameters = fetchValuesFromURL();

//$(document).ready(function(){
//    var data = fetchValuesFromURL();
//    data = calculateResult1(data);
//    data = calculateResult2(data);
//    data = calculateResult3(data);
//    replaceAllValues(data);
//});

function fetchValuesFromURL(){
    var valueArray = {};
    valueArray['memPotential'] = parseFloat(gup('memPot'));
    valueArray['stim1Current'] = parseFloat(gup('stim1Cur'));
    valueArray['stim1Duration'] = parseFloat(gup('stim1Dur'));
    valueArray['stimDelay'] = parseFloat(gup('stimDelay'));
    valueArray['stim2Current'] = parseFloat(gup('stim2Cur'));
    valueArray['stim2Duration'] = parseFloat(gup('stim2Dur'));
    return valueArray;
}