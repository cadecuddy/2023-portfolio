import Header from '@/config/seo'
import '@/styles/index.css'
import dynamic from 'next/dynamic'
import { Inconsolata } from '@next/font/google'

const inconsolata = Inconsolata({ weight: '400' })
export const Logo = dynamic(() => import('@/components/canvas/TF2'), { ssr: false })

export default function App({ Component, pageProps = { title: 'Cade Cuddy' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <main className={inconsolata.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
