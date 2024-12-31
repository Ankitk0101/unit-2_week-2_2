
let arr = [ [1,2,],[3,4] , [5,6] ]
var string =""
for(let i =0 ; i< arr.length ; i++)
{ 
     string= ""
    for(let j =0 ; j< arr.length-1 ; j++)
        {
             string += i+j 
        }
        console.log(string)
}