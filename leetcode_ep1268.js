let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
let searchWord = "mouse";

var suggestedProducts = function(products, searchWord) { 

  let searchWLen = searchWord.length
  function compereWord(word) {
    var maxLengthW = Math.min(searchWLen, word.length);
    var result = 0;

    for (var point = 0; point < maxLengthW; point++) {
      if (word[point] !== searchWord[point]) {
        return result;
      };
      result++
    };
    return result;
  };

  var productsLen = products.length;
  products.sort().reverse();
  let output = Array.from(Array(searchWord.length), () => new Array());

  for (var i = productsLen-1; i > -1; i--) {
    const commonPreW = compereWord(products[i])
    for (var oo = commonPreW - 1; oo > -1; oo--) {
      if (output[oo].length < 3) {
        output[oo].push(products[i]);
      };
    };
  };
  return output;
};

// <------> // 

var suggestedProducts = function(products, searchWord) {
  
  products.sort().reverse();
  var productsLen = products.length;
  const result = [];
  
  for (var i = 0; i < searchWord.length; i++) {
    var suggest = [];
    var prefix = searchWord.slice(0, i+1);
    
    for (var oo = productsLen -1; oo > -1; oo--) {
      if (suggest.length < 3 && products[oo].startsWith(prefix)) {
        suggest.push(products[oo])
      };
    };
    result.push(suggest);
  };
  return result;
};  
