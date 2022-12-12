const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['x', 'y', 'z', 'c'];

function commonelement(arr1, arr2){

  let map = {};

   for(let i = 0; i< arr1.length; i++){
        if(!map[arr1[i]]){
        const item = arr1[i];
          map[item] = true;
       }

    }   
    for(let j=0; j < arr2.length; j++){

      if(map[arr2[j]]){
        return true;
      }
    }

    return false;
}


  

function checkfactor2(arr1, arr2){

  let checkpoint = arr1.some(function (item){

  return arr2.includes(item)
})
  console.log(checkpoint);
};   

checkfactor2(array1, array2);

