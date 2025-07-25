import { useState } from 'react'
import logoImg from './assets/logo-nlw-esports.svg'
import './styles/main.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='max-w-[1440px] mx-auto flex flex-col items-center mt-20'>
        <img src={logoImg} alt="" />

        <h1 className='mt-20 font-black text-6xl text-white '>Seu <span className=' text-transparent bg-nlwGradient bg-clip-text'>DUO</span> está aqui</h1>

        <div className='grid grid-cols-6 gap-6 mt-16 '>



          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/card-1.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient transition-colors'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
            </div>


          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/card-2.png" alt="" />

            <div className='w-full pt-16 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient transition-colors'>
              <strong className='font-bold text-white block'>Dota 2</strong>
              <span className='text-zinc-300 text-sm block'>3 Anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/card-3.png" alt="" />

            <div className='w-full pt-16 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient transition-colors'>
              <strong className='font-bold text-white block'>CS:GO</strong>
              <span className='text-zinc-300 text-sm block'>30 Anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/card-4.png" alt="" />

            <div className='w-full pt-16 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient transition-colors'>
              <strong className='font-bold text-white block'>Apex</strong>
              <span className='text-zinc-300 text-sm block'>6 Anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/card-5.png" alt="" />

            <div className='w-full pt-16 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient transition-colors'>
              <strong className='font-bold text-white block'>Fortnite</strong>
              <span className='text-zinc-300 text-sm block'>18 Anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/card-6.png" alt="" />

            <div className='w-full pt-16 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient transition-colors'>
              <strong className='font-bold text-white block'>World of Warcraft</strong>
              <span className='text-zinc-300 text-sm block'>10 Anúncios</span>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default App
