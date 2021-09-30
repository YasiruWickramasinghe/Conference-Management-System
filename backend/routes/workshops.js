const express = require('express');
const Workshops = require('../models/workshops');

const router = express.Router();

//save Workshops

router.post('/rev/workshopproposal/save',(req,res)=>{

    let newWorkshop = new Workshops(req.body);

    newWorkshop.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Workshop Proposal Sebd successsfully!"
        });
    });
});


//get Old Workshops

router.get('/rev/workshopproposal/reviewed',(req,res)=>{

    Workshops.find({status:{$ne : "Under Review"}}).exec((err,Reviewedworkshops) =>{
        if(err){
            return res.status(400).json({
                success:false, err})
        }
        return res.status(200).json({
            success:true,
            Reviewedworkshops:Reviewedworkshops
        })
    });
});


//get New Workshops

router.get('/rev/workshopproposal/underreview',(req,res)=>{

    Workshops.find({status:"Under Review"}).exec((err,Underworkshops) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            Underworkshops:Underworkshops
        })
    });
});



/*
//get All Workshops

router.get('/workshop',(req,res)=>{
    Workshops.find().exec((err,workshops)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingWorkshops:workshops
        });
    });
});
*/

//get specific Workshops

router.get("/rev/workshopproposal/:id",(req,res) =>{
    let WorkshopsId =req.params.id

    Workshops.findById(WorkshopsId,(err,workshop) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            workshop
        })
    });
})


//update Workshops

router.put('/rev/workshopproposal/update/:id',(req,res)=>{
    Workshops.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,workshop)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Update Successfully"
            })
        }
    );
});

//delete Workshops

router.delete('/rev/workshopproposal/delete/:id',(req,res)=>{

    Workshops.findByIdAndRemove(req.params.id).exec((err,deletedWorkshop)=>{
        if(err) return res.status(400).json({
                message:"delete unsuccessful",err
            });``
        return res.json({
            message:"Deleted Successfully",deletedWorkshop
        });
    });
});

//get last Workshops

router.get('/rev/workshopproposal/last/:id',(req,res)=>{
    Workshops.find().sort({ _id: -1 }).limit(1).exec((err,Workshops)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingWorkshops:Workshops
        });
    });
});
module.exports = router;
