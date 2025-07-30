const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('Get Method is Trigered');
})
app.post('/',(req,res)=>{
    res.status(200).send('Data is created Sucessfully');
})
app.put('/',(req,res)=>{
    res.status(200).send('Data is Updated');
})
app.delete('/',(req,res)=>{
    res.status(404).send('User not found to delete');
})
app.listen(5000,()=>{
    console.log('Server is running on port 4000');
}) 