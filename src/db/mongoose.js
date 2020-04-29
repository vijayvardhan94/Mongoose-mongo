const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User  = mongoose.model('User', {
    name:{
        type: String,
        required: true,
        trim: true
        
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                       throw new Error('Email is invalid')
              }
             }
    },
    age: {
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain password')
            }
        }
        // validate(value){
        //     if(value.length < 7){
        //         throw new Error('Password should be more than 6 characters')
        //     }
        //     else if(value === 'password'){
        //         throw new Error('Password cannot be password')
        //     }
        // }
    }
})

// const me = new User({
//     name: '      Andrew',
//     email: 'mike@mail.com    ',
//     password: 'vijaylalbag'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) =>{
//     console.log('error!', error) 
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        

    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'FirstOne          ',
    

})

task.save().then((task1) =>{
    console.log(task1)
}).catch((error) =>{
    console.log('task error', error)
})