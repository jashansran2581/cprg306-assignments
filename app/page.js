import Link from "next/link" 
export default function HomePage() {
  return (<main className="bg-black text-white min-h-screen">
    <div className="">
            <h1 className="">CPRG 306: Web Development 2 - Assignments</h1>
            <div><Link href="/week_2">Week-2</Link></div>
            <div><Link href="/week-3">Week-3</Link></div>
            <div><Link href="/week-4">Week-4</Link></div>
            <div><Link href="/week-5">Week-5</Link></div>
            <div><Link href="/week-6">Week-6</Link></div>
            <div><Link href="/week-7">Week-7</Link></div>
            <div><Link href="/week-8">Week-8</Link></div>
    </div> 
    </main>
  );
}