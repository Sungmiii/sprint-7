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

   //3rd solution
   // Your code here.
function countBs(str) {
    let count = 0, len=str.length;
    for(let i=0; i<len; i++){
     if(/[B]/.test(str.charAt(i))) 
       count++;
    }
    return count;
  }
  function countChar(mystr, char) {
    let mycount =0, len=mystr.length;
    let letter = char.toString();
    for(let j=0; j<len; j++){
    if(mystr[j]===letter)
      mycount++;
    }
    return mycount;
  }
  console.log(countBs("BBBC"));
  // → 3
  console.log(countChar("kakkkkerlak", "k"));
  // → 6