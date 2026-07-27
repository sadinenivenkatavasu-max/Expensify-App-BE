const mongoose=require('mongoose')
const express = require('express')
async function configureDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to db');
   } catch (err) {
       console.log('error connecting db', err.message)
   }
}
 configureDB();