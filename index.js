function iterativeLog(array){
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback){
  var array = [0, 2, 4, 6, 8, 10];
  return array.forEach(callback);
}

function doToArray(array, callback){
  array.forEach(callback);
}
