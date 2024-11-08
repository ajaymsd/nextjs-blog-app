import {Schema,model, models} from 'mongoose';

const enquirySchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    contact: {
        type:String,
        required:true
    },
})

const enquiryModel = models.enquiry || model('enquiry',enquirySchema);
export default enquiryModel;