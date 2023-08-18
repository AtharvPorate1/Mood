import Link from "next/link"

export default function Home() {
  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center text-white'>
      <div className='w-full max-w-[600px] mx-auto'>

      
      <h1 className='text-6xl mb-4' >The Best Journal App</h1>
      <p className='text-2xl text-white/60 mb-4'>The best app to track your mood</p>

      <div>
        <Link href="/journal">
        <button className='bg-blue-600 rounded text-white text-xl px-4 py-2'>Get Started</button>
        </Link>
      </div>
      </div>
    </div>
  )
}
