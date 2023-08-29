import { Toaster } from 'react-hot-toast';
import Providers from "@/views/Provider"
import Header from '@/components/Header'
import '@/styles/globals.css'
import Footer from '@/components/Footer'
import Wrapper from '@/views/Wrapper'

export const metadata= {
  title: 'Shadcn UI Next App',
  description: 'Generated by create next app - shadcn ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
        <Providers>
        <Header/>
        {
        children
        }
         <Toaster position="top-right" reverseOrder={false}/>
        <Footer/>
        </Providers>
       
       
        </Wrapper>
       
        </body>
    </html>
  )
}
