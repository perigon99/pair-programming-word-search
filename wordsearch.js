const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const horizontalWord = [];
    const verticalWord = [];
    const newArray = [];
    
    for (let word of horizontalJoin) {
        horizontalWord.push(word)
    }
    for(let i = 0; i < letters[0].length; i++){
        let output = [];
          for(let j = 0; j < letters.length; j++){
            output.push(letters[j][i]);
          };
          newArray.push(output);
    }
    const newStringArray = newArray.map(a => a.join(''))      

    for (let word of newStringArray) {
        verticalWord.push(word)
    }  

    if (horizontalWord.includes(word) || verticalWord.includes(word)){
        return true;
    } else { return false}

}

module.exports = wordSearch











//function to check if the string contain the word
//var str = "Hello world, welcome to the universe.";
//var n = str.includes("world");

/*const transpose = function(matrix) {
  const newMatrix = [];
for(let i = 0; i < matrix[0].length; i++){
  let output = [];
    for(let j = 0; j < matrix.length; j++){
      output.push(matrix[j][i]);
    };
    newMatrix.push(output);
};
return newMatrix;
};*/