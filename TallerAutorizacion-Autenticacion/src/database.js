import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://ups:ups2021@cluster0.8cey7.mongodb.net/companydb?retryWrites=true&w=majority",{
useNewUrlParser: true,
useUnifiedTopology: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))