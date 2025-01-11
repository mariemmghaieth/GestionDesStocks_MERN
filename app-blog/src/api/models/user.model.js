module.exports = mongoose => {
    const Schema = mongoose.Schema;
    
    const userSchema = new Schema({
        name: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    });

    userSchema.statics.findOneByName = async function(name) {
        return this.findOne({ name });
    };

    userSchema.method('toJSON', function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model('User', userSchema);
    return User;
};