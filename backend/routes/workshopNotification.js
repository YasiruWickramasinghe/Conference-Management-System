const express = require('express');
const WorkshopNotify = require('../models/workshopNotification');

const router = express.Router();

//send workshop nitification

router.post('/rev/workshopnotify/save',(req,res)=>{

    let notifyWorkshop = new WorkshopNotify(req.body);

    notifyWorkshop.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Workshop Proposal notification send successsfully!"
        });
    });
});

//get Workshop notification

router.get('/rev/workshopnotify',(req,res)=>{
    
    WorkshopNotify.find().exec((err,workshopnotify)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingNotifyWorkshops:workshopnotify
        });
    });
});

/*
//get user

router.get('/researchpaper',(req,res)=>{
    Papers.find().exec((err,papers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPapers:papers
        });
    });
});

//get specific user

router.get("/researchpaper/:id",(req,res) =>{
    let paperId =req.params.id

    Papers.findById(paperId,(err,paper) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            paper
        })
    });
})


//update user

router.put('/researchpaper/update/:id',(req,res)=>{
    Papers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,paper)=>{
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

//delete user

router.delete('/researchpaper/delete/:id',(req,res)=>{

    Papers.findByIdAndRemove(req.params.id).exec((err,deletedPaper)=>{
        if(err) return res.status(400).json({
                message:"delete unsuccessful",err
            });``
        return res.json({
            message:"Deleted Successfully",deletedPaper
        });
    });

});

//get last user

router.get('/researchpaper/last/:id',(req,res)=>{
    Papers.find().sort({ _id: -1 }).limit(1).exec((err,papers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPapers:papers
        });
    });
});

*/
module.exports = router;
