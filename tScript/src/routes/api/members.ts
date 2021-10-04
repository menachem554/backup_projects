/* eslint-disable radix */
/* eslint-disable prettier/prettier */
import express from 'express';

// eslint-disable-next-line import/no-unresolved

const router = express.Router();

// Get All Members
// eslint-disable-next-line no-undef
router.get('/api/members',allMembers()); 

// Get Singel Member
router.get('/api/members/:id',getSingelMember()); 
    // const found = members.some((member: {id: Number; }) => member.id === parseInt(req.params.id));

    // if(found){
    //  res.json(members.filter((member: { id: number; }) => member.id === parseInt(req.params.id)));
    // }
    // else{
    //     res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    // }

module.exports = router;

