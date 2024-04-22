// import connectMongoDb from "../../libs/mongodb";
import { NextResponse } from "next/server";
// import Topic from "../../models/topic";
// export async function POST(request){
//     console.log("API CAALLED");
//     const {title,description} = await request.json();
//     await connectMongoDb();
//     await Topic.create({title,description});
//     return NextResponse.json({message:"topic created"},{status:201});
// }

export function GET(){

    return NextResponse.json({message:"ok teseted"},{status:200});
}