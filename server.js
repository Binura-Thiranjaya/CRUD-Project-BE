const express =require("express");
const mongoose =require('mongoose');


const app = express();

const   PORT =8000;
const DB_URL ='mongodb+srv://binura:binura12345@ms.vf1uu.mongodb.net/mscrudproject?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(()=>{
    console.log("DB conected") ;
})
.catch((err)=>console.log('DB error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
}); 