import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import PgModel from "./models/postMessage.js"

const app=express();


// app.use('/posts',postRoutes);
app.use(express.json());

app.use(bodyParser.json({limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true }));
app.use(cors());

const CONNECTION_URL='mongodb+srv://vinayak:226Kanoon@cluster0.zwercw7.mongodb.net/pg?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
//     .then(()=>app.listen(PORT,()=>console.log('Server running on port : ${PORT}')))
//     .catch((error)=>console.log(error.message));
mongoose.connect(CONNECTION_URL).then(()=>app.listen(PORT,()=>console.log('Server running on port : 5000'))).catch((error)=>console.log(error.message));
// mongoose.set('useFindAndModify', false);
app.post("/insert",async (req,res)=>{
    const pname=req.body.pname;
    const paddress=req.body.paddress;
    const pfacilities=req.body.pfacilities;
    const oname=req.body.oname;
    const oemail=req.body.oemail;
    const ocontact=req.body.ocontact;
    const pg=new PgModel({pname: pname,
        paddress: paddress,
        pfacilities: pfacilities,
        oname: oname,
        oemail: oemail,
        ocontact: ocontact,
       })
        try{
            await pg.save();
        }catch{
            console.log(err);
        }
});
app.get("/read",async (req,res)=>{
    PgModel.find({},(err,result)=>{
        if(err)
        {
            res.send(err);
        }
        res.send(result);
    });
});