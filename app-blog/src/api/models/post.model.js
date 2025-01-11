module.exports = mongoose => {
    const Schema = mongoose.Schema;
    
    const PostSchema = new Schema({
        reference: { type: String, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: true },
        originalPrice: { type: Number, required: true },
        sellingPrice: { type: Number, required: true },
        quantityAvailable: { type: Number, required: true },
        availableSizes: [{ type: String }],
        entryDate: { type: Date, default: Date.now },
        photoURL: { type: String } },
        {
            timestamps: true
    });
    PostSchema.method('toJSON', function(){
        const{__v,_id, ...object}=this.toObject();
        object.id= _id;
        return object;
    })
    const Post =  mongoose.model('Post', PostSchema);
    return Post;


};
