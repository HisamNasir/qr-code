import Image from 'next/image'
import { Inter } from 'next/font/google'
import QRCode from 'qrcode.react'
import QRCodeComp from '@/components/QRCodeComp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='bg-gray-500 flex flex-col justify-center space-y-9 h-screen'>
      <h1 className="text-3xl font-bold text-center text-white">My QR Code</h1>
      <QRCodeComp/>
      </div>
    </main>
  )
}
