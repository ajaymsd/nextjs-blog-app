import connectMongo from "@/utils/connectMongo";
import enquiryModel from "@/models/enquiryModel";
export async function POST(req) {
    // try {
        await connectMongo();
        const post = await req.json();
        console.log(post);
        const newPost = new enquiryModel(post);
        await newPost.save();
        console.log(post);
        return Response.json(newPost);
    // } catch(err) {
    //   return Response.json({msg:'error'})
    // }
}