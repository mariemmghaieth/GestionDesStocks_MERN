const config=require('../config/config');
const mongoose=require('mongoose');
const db={};
mongoose.Promise=global.Promise;
mongoose.set('strictQuery',false);
db.mongoose=mongoose;
db.url=config.DB_URL;
db.posts= require('../api/models/post.model')(mongoose);
module.exports=db;