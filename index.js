// require it
const bcrypt = require('bcrypt');

let input = process.argv[2];

let oldInput = process.argv[3];

let newHash = "";

bcrypt.hash(input, 20, (err, hash) => {
  newHash = console.log( hash );

});

bcrypt.compare(newHash, oldInput, function(err, res) {
  if( res === true ){

    console.log("same");
  }else{

    console.log("not same");
  }
});