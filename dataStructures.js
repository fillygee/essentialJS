  
  const countTarget = (array, target) => {
    
    let count = 0;

   for (let i = 0 ; i < array.length ; i++ ) {
   
    if (target === array[i]) {
    count++
           }   
      };

      return {
        success: count > 0,
        count: count
     };
     
     }

     

    




 
 console.log(countTarget([1, 1, 1], 1)) //-> { success: true, count: 3 }
console.log(countTarget([1, 1, 1], 3)) //-> { success: false, count: 0 }
console.log(countTarget([1, 1, "1"], 1)) //-> { success: true, count: 2 }
