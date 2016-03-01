var d3 = require("d3");
//var $ = require('jquery');

var parameters = fetchValuesFromURL();
var dataArray = createDataArrayWithIncrementSize(1.0, parameters);

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

function createDataArrayWithIncrementSize(increment, dataArray){
    var apEquation = function (x){
        //returns array of x, y
        var y = Math.log(x) / Math.log(10);
        return {
            'x': x,
            'y': y
        }
    }

    var timeFrame = dataArray['stim1Duration'] +
        dataArray['stimDelay'] +
        dataArray['stim2Duration'] +
        (2 * increment); //<-- for buffer

    var dataArray = [];
    for (var i=0; i < timeFrame; i+=increment){
        dataArray.push(apEquation(i));
    }
    return dataArray;
}



// ------ Plotting -------
var data = [{"x":100, "y":0}, {"x":110, "y":10}, {"x":120, "y":20}, {"x":130, "y":30}];

var lineFunction = d3.svg.line()
  .x(data.x)
  .y(data.y);

lineFunction(data);


d3.select('.graphArea')
  .transition()
  .duration(3000)
  .attrTween('d', getSmoothInterpolation);

// ----- Rendering -------
function getSmoothInterpolation() {
  var interpolate = d3.scale.linear()
      .domain([0, 1])
      .range([1, indexSeries.length + 1]);

  return function(t) {
      var flooredX = Math.floor(interpolate(t));
      var interpolatedLine = indexSeries.slice(0, flooredX);

      if(flooredX > 0 && flooredX < indexSeries.length) {
          var weight = interpolate(t) - flooredX;
          var weightedLineAverage = indexSeries[flooredX].y * weight + indexSeries[flooredX-1].y * (1-weight);
          interpolatedLine.push( {"x":interpolate(t)-1, "y":weightedLineAverage} );
          }

      return lineFunction(interpolatedLine);
      }
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