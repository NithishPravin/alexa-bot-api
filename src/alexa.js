const cleverbot = require('./ai.js');

class Alexa {
  
   constructor(access) {

    if (access !== "aw2plm") {
      throw new TypeError("unknown access key!");
    }
  }
  
  getReply(key) {

    
    if (typeof key === undefined || key == "") {
      throw new TypeError("question is empty / undefined");
    }
    
    let response = cleverbot(key)
     return response;
   }
}

module.exports = Alexa;
