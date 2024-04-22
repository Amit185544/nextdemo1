// import { NextResponse } from "next/server";

// export function GET(){

//    return  NextResponse.json({message:"executed successfully"},{status:201});
// }

// import connectMongoDb from "../../libs/mongodb";

// import Topic from "../../models/topic";
// export async function POST(request){
//     console.log("API CAALLED");
//     const {title,description} = await request.json();
//     await connectMongoDb();
//     await Topic.create({title,description});
//     return NextResponse.json({message:"topic created"},{status:201});
// }