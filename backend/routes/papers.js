const express = require('express');
const Papers = require('../models/papers');

const router = express.Router();

//save reasearch paper

router.post('/rev/researchpaper/save',(req,res)=>{

    let newResPaper = new Papers(req.body);

    newResPaper.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Research Paper saved successsfully"
        });
    });
});



/*get All Reserach paper

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

*/

//get Reviewed reserched papers

router.get('/rev/researchpaper/reviewed',(req,res)=>{

    Papers.find({status:{$ne : "Under Review"}}).exec((err,Reviewedpapers) =>{
        if(err){
            return res.status(400).json({
                success:false, err})
        }
        return res.status(200).json({
            success:true,
            ReviewedPapers:Reviewedpapers
        })
    });
});


//get Under Review reserched papers

router.get('/rev/researchpaper/underreview',(req,res)=>{

    Papers.find({status:"Under Review"}).exec((err,Underpapers) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            Underpapers:Underpapers
        })
    });
});


//get specific research paper

router.get("/rev/researchpaper/:id",(req,res) =>{
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


//update research paper

router.put('/rev/researchpaper/update/:id',(req,res)=>{
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

//delete research paper

router.delete('/rev/researchpaper/delete/:id',(req,res)=>{

    Papers.findByIdAndRemove(req.params.id).exec((err,deletedPaper)=>{
        if(err) return res.status(400).json({
                message:"delete unsuccessful",err
            });``
        return res.json({
            message:"Deleted Successfully",deletedPaper
        });
    });

});

//get last research paper
router.get('/rev/researchpaper/last/:id',(req,res)=>{
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

module.exports = router;
