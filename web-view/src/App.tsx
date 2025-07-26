import logoImg from './assets/logo-nlw-esports.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'


function App() {


  return (

    <div className='max-w-[1440px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='mt-20 font-black text-5xl text-white '>
        Encontre seu <span className=' text-transparent bg-nlwGradient bg-clip-text'>DUO</span> agora mesmo!
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16 '>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/card-1.png" alt="" />
          <div className='w-full pt-44 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient opacity-0 hover:opacity-100 transition delay-50 duration-300 ease-in-out '>
            <strong className='font-bold text-white block '>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anúncios</span>
          </div>

        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/card-2.png" alt="" />

          <div className='w-full pt-44 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient opacity-0 hover:opacity-100 transition delay-50 duration-300 ease-in-out '>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>3 Anúncios</span>
          </div>

        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/card-3.png" alt="" />

          <div className='w-full pt-44 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient opacity-0 hover:opacity-100 transition delay-50 duration-300 ease-in-out '>
            <strong className='font-bold text-white block'>CS:GO</strong>
            <span className='text-zinc-300 text-sm block'>30 Anúncios</span>
          </div>

        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/card-4.png" alt="" />



          <div className='w-full pt-44 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient opacity-0 hover:opacity-100 transition delay-50 duration-300 ease-in-out '>
            <strong className='font-bold text-white block '>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>6 Anúncios</span>
          </div>

        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/card-5.png" alt="" />

          <div className='w-full pt-44 pb-4 px-4 absolute z-40 left-0 right-0 bottom-0 bg-gameGradient opacity-0 hover:opacity-100 transition delay-50 duration-300 ease-in-out '>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>18 Anúncios</span>
          </div>

        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/card-6.png" alt="" />

          <div className='w-full pt-44 pb-4 px-4 absolute left-0 right-0 bottom-0 bg-gameGradient opacity-0 hover:opacity-100 transition delay-50 duration-300 ease-in-out '>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>10 Anúncios</span>
          </div>

        </a>

      </div>

      <div className='mt-16 pt-1 bg-nlwGradient w-full max-w-[1340px] rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors rounded text-white font-bold  flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />  Publicar anúncio</button>
        </div>
      </div>
    </div>

  )
}

export default App
