



class Worm{
   
   
   createTable(object){
      const value = object
      if (typeof value === "object"){
          for (const [k, v] of Object.entries(value)){
             
             if (typeof va === "function"){
                   console.log(typeof v, v.name, "typeof va", k)
             }
           
              if (typeof v === "object"){
               for (const [key, value] of Object.entries(v)){
                const  {
                     type, validate, required,
                     unique, maxValue, minValue,
                     include
                  } = key 
                  console.log(k, key, Object.values(k))
               }
                 
                  
              }
          }

          }
      }
   }



const ne = new Worm();
ne.createTable({name: String , age: Number, 
another:{
   type: Number,
    maximumNumber:5,
    minimum: 6,
}});

