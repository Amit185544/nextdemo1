import {HiPencilAlt} from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
export default function TopicList(){
   
    return(
        <>
        <div className="p-4 border border-slate-300 my-3 items-start flex justify-between gap-5">
            <div>
                <h2 className="font-bold text-2xl">Topic Title</h2>
                <div>Topic Description</div>
            </div>
       
        <div className="flex gap-2">
            <RemoveBtn/>
            <Link href={"/editTopic"}>
            <HiPencilAlt size = {24}/>
            </Link>
         </div>
        </div>
        
        </>
    )
}