"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const membar_controller_1 = __importDefault(require("./membar.controller"));
{
    allMembers, getSingelMember;
}
from;
"./routes/api/members";
// const members = require ("./Members");
const app = express_1.default();
// Set static folder
app.use(express_1.default.static(path_1.default.join(__dirname, 'src')));
// Members API routes
app.use('/', require('./routes/api/members'));
const PORT = process.env.PORT || 5000;
// Get All Members
app.get('/', allMembers(req, res), {
    res, : .send(membar_controller_1.default())
});
// Get Singel Member
app.get('/:id', (req, res) => {
    // const found = members.some((member: {id: Number; }) => member.id === parseInt(req.params.id));
    // if(found){
    //  res.json(members.filter((member: { id: number; }) => member.id === parseInt(req.params.id)));
    // }
    // else{
    //     res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    // }
});
app.listen(PORT, () => {
    console.log("Server running on port 5000");
});
//# sourceMappingURL=server.js.map