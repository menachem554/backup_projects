import express, { json } from "express";
import path from "path";
import getMembersApi  from "./membar.controller";
import members {allMembers,getSingelMember} from "./routes/api/members";

// const members = require ("./Members");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname,'src')));

// Members API routes
app.use('/', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;


// Get All Members
app.get('/',allMembers(req,res) => {
    res.send(getMembersApi());
}); 

// Get Singel Member
app.get('/:id', (req: any,res: any) => {
    // const found = members.some((member: {id: Number; }) => member.id === parseInt(req.params.id));

    // if(found){
    //  res.json(members.filter((member: { id: number; }) => member.id === parseInt(req.params.id)));
    // }
    // else{
    //     res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    // }
})

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});







