const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/Users');
const { check , validationResult } = require('express-validator');

// @route GET api/profile/me 
// access Private
router.get('/me', auth , async (req,res) => {
    try {
        const profile = await Profile.findOne({ user : req.user.id }).populate('user' , [ 'name' , 'avatar' ]);

        if(!profile){
            return res.status(400).json( { msg : 'There is no profile of this user' } );
        }

        res.json(profile);

    } catch(err) {
        
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route POST api/profile
// @desc create or update a user profile
// access Private
router.post('/', [ auth , [
    check('status' , 'Status is required ').not().isEmpty(),
    check('skills' , 'skills are required').not().isEmpty()
] ] , 
async ( req , res ) => {
    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    const {
        company, website,location,
        bio,status,gihubusername,
        skills,youtube,facebook,
        twitter,instagram,Linkedin
    } = req.body ;

    // Build profile object 
    const profileFields = {};
    profileFields.user = req.user.id;
    if(company){
        profileFields.company = company;
    }
    if(website){
        profileFields.website = website;
    }
    if(location){
        profileFields.location = location;
    }
    if(bio){
        profileFields.bio = bio;
    }
    profileFields.status = status;
    if(gihubusername){
        profileFields.gihubusername = gihubusername;
    }
    profileFields.skills = skills.split(',').map(skill => skill.trim());

    // Build Social Object
    profileFields.social = {};

    if(youtube){
        profileFields.social.youtube = youtube;
    }
    if(facebook){
        profileFields.social.facebook = facebook;
    }
    if(twitter){
        profileFields.social.twitter = twitter;
    }
    if(instagram){
        profileFields.social.instagram = instagram;
    }
    if(Linkedin){
        profileFields.social.Linkedin = Linkedin;
    }

    try {
        let profile = await Profile.findOne( { user : req.user.id } );
        if(profile) {
            profile = await Profile.findOneAndUpdate( 
                { user : req.user.id }, 
                { $set : profileFields } ,
                { new : true }
            );
            return res.json(profile);
        }
         // Create
        profile = new Profile( profileFields );
        await profile.save();
        return res.json(profile);

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }
    
});

// @route GET api/profile
// @desc get all profile
// access Public
router.get('/', async ( req , res ) => {
    try{
        //const profies = await Profile.f
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router ;