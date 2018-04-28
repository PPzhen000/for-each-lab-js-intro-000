function iterativeLog(array, index){
  array.forEach(element => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback){
  var array = [0, 2, 4, 6, 8, 10];
  array.forEach(callback);
}

function doToArray(array, callback){
  
}
