import connectMongo from "@/utils/connectMongo";
import postModel from "@/models/postModel";
import enquiryModel from "@/models/enquiryModel";
export async function GET(req) {
    try {
        let posts;
        await connectMongo();
        const searchQuery = req.nextUrl.searchParams.get('search');
        console.log(searchQuery);
        
        if (searchQuery) {
         posts = await postModel.find({
            $or: [
              {title : new RegExp(searchQuery, 'i')},
              {description : new RegExp(searchQuery, 'i')}
            ]
         })
        } else{
             posts = await postModel.find({});
        }
        return Response.json({
            'success':true,
            'posts' :posts
        });
    } catch(error) {
        return Response.json({'success':false, msg: error.message})
    }
}

