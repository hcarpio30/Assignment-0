function frequencyCounter(word) {
  let obj = {};
  
  for (i in word)
  {
    obj[word[i]] = (obj[word[i]] || 0) + 1
  }
   
return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;