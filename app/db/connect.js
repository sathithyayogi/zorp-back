const mongoose = require("mongoose");

const connect =  async () =>{
    mongoose.connect(process.env.DBURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } 
  );

}

module.exports = connect;
