const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters']
    },
    petType: {
        type: String,
        required:[true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters"]
    },
    petDesc: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    petSkills: {
        type: String,

    },
    
}, {timestamps: true});




module.exports = mongoose.model("Pet", PetSchema);