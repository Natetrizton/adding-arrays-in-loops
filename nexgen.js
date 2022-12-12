const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['x', 'y', 'a'];

function commonElement(arr1, arr2){

    for(let i=0; i< arr1.length; i++){
     for(let j=0; j< arr2.length; j++){
       if(arr1[i] === arr2[j]){
          return true;
      
         
      }
    }

   }
   return false;
}

console.log(commonElement(array1, array2))

