
let arr = [ [1,2,],[3,4] , [5,6] ]
var str =""
for(let i =0 ; i< arr.length ; i++)
{ 
     str= ""
    for(let j =0 ; j< arr.length-1 ; j++)
        {
             str += arr[i][j] 
        }
        console.log(str)
}