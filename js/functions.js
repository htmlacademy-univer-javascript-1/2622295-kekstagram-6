function maxStringLength(str, maxLength) {
  if (str.length <= maxLength){
    return true;
  } else {
    return false;
  }
}

function isPalindrome(str){
  for (let i = 0; i<=str.length/2; i++){
    if (str.charAt(i) !== str.charAt(-1-i)){
      return false;
    }
  }
  return true;
}

