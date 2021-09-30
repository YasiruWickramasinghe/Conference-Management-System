const express = require('express');
const reviewers = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Reviewer = require('../models/reviewers');

reviewers.use(cors());
process.env.SECRET_KEY = 'secret';

reviewers.post('/registerReviewer', (req,res) =>{

    const today = new Date();
    const reviewerData = {
        first_name:req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email,
        password: req.body.password,
        created:today

    }
    Reviewer.findOne({
        email:req.body.email
    })
        .then(reviewer=>{
            if(!reviewer){
                bcrypt.hash(req.body.password,10, (err,hash) =>{
                    reviewerData.password = hash
                    Reviewer.create(reviewerData)
                    .then(reviewer=>{
                        res.json({status:reviewer.email + " registered"})
                    })
                    .catch(err=>{
                        res.send("error is " + err);
                    })
                } )
            }
            else{

                res.json({error:"Reviewer already registered"})
            }


        }).catch(err=>{
            res.send("Error is " + err);
        }) 



 })




 reviewers.post('/loginReviewer', (req,res) => {
    Reviewer.findOne({
         email:req.body.email
     })
     .then(reviewer=>{
         if(reviewer){
            if(bcrypt.compareSync(req.body.password, reviewer.password)){
                const payload = {
                    _id: reviewer._id,
                    first_name:reviewer.first_name,
                    last_name: reviewer.last_name,
                    email:reviewer.email
                }

                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn:14400
                })
                res.send(token)

            }

            else{
                //res.json({error:"Reviewer doesnot exists in the system"})
                console.log("Reviewer doesnot exists in the system");
            }
         }


         else{
            //res.json({error:"Reviewer doesnot exists in the system"});
            console.log("Reviewer doesnot exists in the system")
         }
     })
     .catch(err=>{
         res.send("Error is " + err);
     })
 })




 reviewers.get('/reviewerProfile', (req,res)=>{
     var decode = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

     Reviewer.findOne({
         _id:decode._id
     })
     .then(reviewer=>{
         if(reviewer){
             res.json(reviewer)
         }

         else{
             res.send("Reviewers does not exist");
         }
     })
     .catch(err=>{
         res.send("Error is " + err);
     })
 })

module.exports = reviewers;
