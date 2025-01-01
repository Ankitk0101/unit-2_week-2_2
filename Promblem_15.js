

function Utraverse(){

arr = [[1,2,3],[4,5,6],[7,8,9]]

 var  m =  arr.length
  var n = arr[0].length

 var arr1 =[]
 

  for( var i=m-1; i>=0; i--)
  {
       arr1.push(arr[i][0])
       
  }

  for( var j=1; j<=m-1; j++)
    {
       
        arr1.push(arr[0][j])
   
    }

    for( var j=1; j<=m-1; j++)
        {
           
            arr1.push(arr[j][m-1])
    
            
        }
    

        for( var j=n-2; j>=1; j--)
            {
               
                arr1.push(arr[m-1][j])
        
                
            }
        





   return arr1.join(' ')
}

console.log(Utraverse())