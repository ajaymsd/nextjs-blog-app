import { Schema,model,models } from "mongoose";

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image : {
        type : String
    }
}, {toJSON: {virtuals:true}});

//adding virtual data or appending extradata
postSchema.virtual('short_description').get(function(){
   return this.description.substr(0,50)+'....'
});

const postModel = models.post || model('post',postSchema);
export default postModel;

