//the Chapter 3 exercise

//1st solution:
// Your code here.
function min(a,b){
    return a<b ?a:b;
   }
   console.log(min(0, 10));
   // → 0
   console.log(min(0, -10));
   // → -10

//2nd solution
// Your code here.
function isEven(target){
    if(target%2 ===0){
    return true;
    }else if(target%2 ===1){
    return false;
    }else {
      return isEven(-target);
    }
   }
   console.log(isEven(62));
   // → true
   console.log(isEven(89));
   // → false
   console.log(isEven(-2));
   // → true