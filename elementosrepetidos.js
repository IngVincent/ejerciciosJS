function findDuplicates(arr){
var obj = {};
var dup = [];

for(var i = 0; i < arr.length; i ++)
    {
     if(!obj.hasOwnProperty(arr[i]))
        {
         obj[arr[i]] =1;
        }
    else 
        {
        dup.push(arr[i]);
        }
    }
return dup;

}

console.log(findDuplicates("[1234556677888]"));