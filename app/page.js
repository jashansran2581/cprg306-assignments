import Link from "next/link" 
export default function HomePage() {
  return (<main className="bg-black text-white min-h-screen">
    <div className="">
            <h1 className="">CPRG 306: Web Development 2 - Assignments</h1>
            <Link href="/week_2">Week-2</Link>
    </div> 
    </main>
  );
}