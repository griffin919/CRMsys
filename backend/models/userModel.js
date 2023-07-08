import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fname: {type: String,required: true},
    lname: {type: String,required: true},
    username: {type: String,required: true, unique: true},
    gender: {type: String, required: true},
    email: {type: String,required: true, unique: true,},
    password: {type: String,required: true},
    role:{type: String,required: true},
    department: {type: String,required: true},
    jurisdiction: {type: String,required: true},
}, {timestamps: true}
);

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    this.password = await bcrypt.hashSync(this.password, salt);
})

const User = mongoose.model('User', userSchema);
export default User;