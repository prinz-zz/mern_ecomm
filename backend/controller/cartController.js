import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    

}, {timestamps: true});

export default mongoose.model('Cart', cartSchema);