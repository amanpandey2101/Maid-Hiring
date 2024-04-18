const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    phone:{
        type:String,
        
        unique:true,
     
    },
    password: { 
        type: String,
        required: true,
    },
    address:{
        type: String,
       
    },
    city:{
        type: String,
      
    },
    state:{
        type: String,
        
    },
    pincode:{
        type: Number,
       
    },
    job:{
        type: String,
        
    },
    gender:{
        type: String,
       
    },
    message:{
        type: String,
       
    },
    role:{ 
        type:String,
        enum:['admin', 'user'],
        default:'user'
    },
    status:{
        type:String,
        default:'Pending'
    },
 
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpires:{
        type:String
    }
},{
    timestamps:true
});

userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}` 
});


userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds); 
    }
  
    next();
});

userSchema.methods.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
