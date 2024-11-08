import connectMongo from "@/utils/connectMongo";
import postModel from "@/models/postModel";
export async function GET(req,{params}) {
    console.log(params);
    try {
        await connectMongo();
        const post = await postModel.findOne({_id:params.id});
        return Response.json({
            'success':true,
            'post' :post
        });
    } catch(error) {
        return Response.json({'success':false, msg: error.message})
    }
}