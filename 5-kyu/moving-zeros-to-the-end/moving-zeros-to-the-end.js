function moveZeros(arr) {
  const zeros = [];
  const others = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      others.push(arr[i]);
    } else{
      zeros.push(arr[i]);
    }
  }
  return [...others, ...zeros];
}