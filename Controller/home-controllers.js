const posting  = require('../models/postings');


    async function getPosting(req,res){
        try{
            const postData = await posting.find();
            res.json(postData)
            // res.render("homepage",{postData})
   
         
        }catch(err){
            console.log(err)
        }

    }





module.exports = getPosting