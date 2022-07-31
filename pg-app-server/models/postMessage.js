import mongoose from 'mongoose';
const pgSchema=mongoose.Schema({
    pname: String,
    paddress: String,
    pfacilities: String,
    oname: String,
    oemail: String,
    ocontact: String,
    selectedfile: String,
}
);
const Pg=mongoose.model('Pg',pgSchema);
export default Pg;
