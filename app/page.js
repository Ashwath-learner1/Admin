import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/Layout'
export default function Home() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col  justify-between p-6">
    <div className='flex justify-start gap-6 flex-col text-black dark:text-white'>
      <p className='text-[40px] font-semibold tracking-wide'>ARE YOU <br/><br/>READY?</p>
      <p className='text-[20px] tracking-wide'>To win the most Prestigious Award!</p>
      <p className='text-[20px] tracking-wide mb-8'>WV AWARDS <span className='font-semibold'>SEASON 3, 2024</span> </p>
      <p className='font-semibold tracking-widest text-[25px]'>APRIL 6TH , 2024</p>

      <div className="mb-7.5 flex mt-13 flex-wrap gap-5 xl:gap-10">
      <Link
              href="#"
              className="inline-flex items-center justify-center  rounded-md bg-meta-6 py-2 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              NOMINATIONS
            </Link>
      <Link
              href="#"
              className="inline-flex items-center justify-center  rounded-md bg-meta-6 py-2 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
             EXHIBITORS
            </Link>
      <Link
              href="#"
              className="inline-flex items-center justify-center  rounded-md bg-meta-6 py-2 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              BUY TICKETS
            </Link>
      </div>
    </div>
    </main>
    </Layout>
  )
}
