module.exports = function check(str, bracketsConfig) {
    let string = str;
    let pass = 0;
    let key = false;
    for (let i = 0; i < bracketsConfig.length; i++){
      for ( let j = 0; j < (str.length/2); j++){
        let openIndex = string.indexOf(bracketsConfig[i][0]);
        let closeIndex = string.lastIndexOf(bracketsConfig[i][1]);
        if ((openIndex < closeIndex) && ((string.substring(openIndex, (closeIndex+1)).length % 2) == 0)){
          string = string.slice(0, openIndex) + string.slice(openIndex+1, closeIndex) + string.slice(closeIndex+1);
          pass++;
        }
      }  
    }
    if (pass == (str.length/2)){
      key = true;
    }
    return(key);
}