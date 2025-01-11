const slugify = require('slugify');
const db = require('../../database/db.config');
const Post = db.posts;

exports.create=(req, res) =>{
    const {reference,brand,description,originalPrice,sellingPrice,quantityAvailable,availableSizes,entryDate,photoURL} = req.body;
    if(!reference || !brand || !originalPrice || !sellingPrice || !quantityAvailable || !availableSizes || !entryDate){
        return res.status(400).send({
            message : 'content can not be empty'
        })
    }
    const newPost = new Post({
        reference: reference,
        brand: brand,
        description:description,
        originalPrice:originalPrice,
        sellingPrice:sellingPrice,
        quantityAvailable:quantityAvailable,
        availableSizes:availableSizes,
        entryDate:entryDate,
        photoURL:photoURL

    });
    newPost.save(newPost).then((data) =>{
        res.status(200).send({
            message: 'successufully created post'
        })
    }).catch(err =>{
        console.log(err);
    });
}
exports.findAll =(req, res)=>{
    Post.find({}).then((data) => {
        res.send(data);}).catch((err) =>{
            console.log(err);
        });
}
exports.delete =(req,res)=> {
    const id = req.params.id;
    if(!id) {
        res.status(400).send({ message : "content is required "});
    }
    Post.findByIdAndDelete(id).then((data) =>{
        if(!data){
            res.status(404).send({message:"Post not found"});
        }
        res.status(200).send({message:"Post was successfull deleted"});
    });
}
exports.findOne =(req,res) =>{
    const id= req.params.id;
    if(!id){
        res.status(400).send({ message :"content is required"});
    }
    Post.findById(id).then((data)=>{
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
}
exports.update = (req, res) => {
    const id = req.params.id;
    const { reference, brand, description, originalPrice, sellingPrice, quantityAvailable, availableSizes, entryDate, photoURL } = req.body;
  
    if (!id || !reference || !brand || !description || !originalPrice || !sellingPrice || !quantityAvailable || !availableSizes || !entryDate || !photoURL) {
      return res.status(400).send({ message: "All fields must be provided" });
    }
  
    Post.findByIdAndUpdate(id, req.body, { new: true })
      .then(updatedPost => {
        if (!updatedPost) {
          return res.status(404).send({ message: `Cannot update Post wit     id=${id}. Post not found.` });
        }
        res.send({ message: "Post was successfully updated", updatedPost });
      })
      .catch(err => {
        res.status(500).send({ message: "Error updating article with id=" + id });
      });
  };