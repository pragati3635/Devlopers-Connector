const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check , validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

router.get('/', auth , async (req,res) => {
   try{
      const user = await User.findById(req.user.id).select('-password');
      res.json(user); 
   } catch(err){
      console.error(err.message);
      res.status(500).send('server error');
   }
});
//@route POST api/auth
// description authenticate and get token
//access public
router.post('/',[
   check('email','Please give a vaild email').isEmail(),
   check('password','password is required').exists()
],
async (req,res) => {
   const errors =validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({ errors : errors.array() });
   }

   const { email , password } = req.body ;

   try{
      let user = await User.findOne({ email });
      if(!user){
         return res.status(400).json({ errors : [ { msg : 'invalid credential '}]});
      }

      const isMatch = await bcrypt.compare(password , user.password);
      if(!isMatch){
         return res.status(400).json({ errors : [ { msg : 'invalid credential '}]});
      }

      const playload = {
         user: {
            id : user.id 
         }
      };
      jwt.sign(
         playload,
         config.get('jwtSecret'),
         { expiresIn : 360000 },
         (err,token) => {
            if(err){
               throw err;
            }
            res.json({ token });
         }
      );
   } catch(err){
      console.error(err.message);
      res.status(500).send('server error');
   }
}
)


module.exports = router ;