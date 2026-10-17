require ('datejs') 

module.exports = {combineUsers};

 // Creating a function 

 function combineUsers(...args) {

  // Initializing return object 

   const combinedObject = {
    users : []
   };

   // Looping through args and merge the arrays

   for (const userArray of args ) {
     combinedObject.users= [
      ...combinedObject.users, ...userArray
     ];
   }

   // Get today's date 

   combinedObject.merge_date = 
   Date.today().toString('M/d/yyyy');

   return combinedObject;
 }