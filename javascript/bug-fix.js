// function createArray(number){
//     var newArray = [];
    
//     for(var counter = 1; counter <= number;){
//       newArray.push(counter);
//     }
    
//     return newArray;
//   }
    function createArray(number) {
        let newArray = [];
        for (let counter = 1; counter <= number; counter++) {
            newArray.push(counter);
            
          } 
          return newArray   
    }
  
 const array = createArray(12);  
 console.log(array); 


