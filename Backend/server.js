const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const cors = require('cors')
const app = express()

//routes

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from A Noble Science Backend')
})

app.get('/user', async(req, res) => {
    try{
        const user = await User.find({})
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/user/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/user', async(req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)

    }catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a user
app.put('/user/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message: 'Cannot find any user with Id ${id}'})
        }
        const updatedUser = await User.findById(id)
        res.status(200).json(updatedUser);
    }catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//delete a user

app.delete('/user/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete();
        if(!user){
            return res.status(404).json({message: 'Unable to locate user by Id ${id}'})
        }
        res.status(200).json(product)
    }catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://anoblescience:8pickles@anoblesciencecluster.jgwfihu.mongodb.net/aNobleScienceDB?retryWrites=true&w=majority&appName=aNobleScienceCluster')
.then(() => {
    console.log('Connect to aNobleScienceDB')
    app.listen(3000, () => {
        console.log('A Noble Science Backend is running on port 3000')
    })
}).catch((error) => {
    console.log(error);
})