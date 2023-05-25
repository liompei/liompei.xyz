import Link from "next/link";
import ArrowMotion from "@/components/ArrowMotion";

export default function BlogPost({title, summary, slug}) {
  return (
    <Link className='w-full' href={`/blog/${slug}`}>
      <div className='w-full mb-8'>
        <div className='flex justify-between relative items-center'>
          <div className='flex items-center'>
            <h4 className='font-bold'>{title}</h4>
            <ArrowMotion/>
          </div>
        </div>
      </div>
    </Link>
  )
}