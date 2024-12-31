
 var arr = [ [1,2,3,4,5,], [6,7,8,9,1], [3,2,5,4,6], [7,8,9,1,2]]

 var value = true
 var  str =""
for(var i = 0 ;i<arr.length; i++)
{  
     
     if(value === true)
     {
       

            for(var j= arr[i].length-1 ;j>=0 ;j--)
                {
                //    console.log(arr[i][j]) 
                    str +=" "+arr[i][j]
                   
                }
                value =false
               
               
     }
     
     else
        {
            for(var j=0 ;j<arr[i].length ;j++)
                {
                    // console.log(arr[i][j]) 
                    str +=" "+arr[i][j]
                   
                }
                value = true
                
        }

   
}

console.log(str+".")




// var arr = [ [1,2,3,4,5,], [6,7,8,9,1], [3,2,5,4,6], [7,8,9,1,2]]

// var value = true

// for(var i = 0 ;i<arr.length; i++)
// {  
//    console.log("this is i" , i)
    

//            for(var j=arr[i].length-1 ;j>=0 ;j--)
//                {
//                   console.log(arr[i][j]) 
                  
//                }
    //            value =false 
              
    //   for(var j=0 ;j<arr[i].length ;j++)
    //            {
    //                console.log(arr[i][j]) 
                  
    //            }
            //    value = true
            
// }

  
