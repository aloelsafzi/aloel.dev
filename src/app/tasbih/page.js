"use client"

import {
  Main,
  Navbar
} from "@/app/components"
import { useState, useEffect } from "react"

const useAudio = url => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
      setAudio(new Audio(url))
    }, 
    [url]
  )

  useEffect(() => {
      if(audio){
        playing ? audio.play() : audio.pause()
      }
    },
    [audio, playing]
  )

  useEffect(() => {
      if(audio) {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false))
        }
      } 
    }, 
    [audio]
  )

  return [playing, toggle]
};


const Tasbih = () => {
  const [playing, toggle] = useAudio('ping.mp3')

  let [count, setCount] = useState(0)
  let [target, setTarget] = useState(0)
  

  const onClickTasbih = () => {
    count++

    if(target && count === Number(target)) {
      setCount(count)
      return toggle()
    }

    if(target && count >= Number(target)) return toggle()
    setCount(count)
  }

  const onClickreset = () => {
    setCount(0)
  }

  return (
    <>
      <Navbar />
      <Main className={'mt-20'}>
        <h1 className="font-semibold text-1xl text-center">Tasbih</h1>
        <div className="flex justify-center">
          <div className="fixed bottom-5 left-3 right-3 flex flex-col justify-center items-center gap-y-6 mt-10 bg-white shadow-lg rounded-2xl border-t-8 border-t-blue-100 p-11">
            <div className="bg-gray-50 text-blue-500 font-extrabold rounded-full w-fit p-6 text-6xl">{count}</div>
            <div className="flex justify-center items-center gap-x-2">
              <input type="number" onChange={(e) => setTarget(e.target.value)}  placeholder="Target" className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-20 p-2.5" />
              <button onClick={() => onClickTasbih()} className="bg-gray-50 border-blue-300 border-4 text-blue-500 hover:ring-4 hover:ring-blue-300 shadow-2xl shadow-blue-300 font-extrabold rounded-full max-w-60 max-h-60 w-32 h-32 flex justify-center items-center text-6xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
              </svg>
              </button>
              <button onClick={onClickreset} className="bg-blue-100 border-blue-300 shadow-md border p-2.5 w-20 rounded-3xl text-sm focus:ring-1 focus:ring-blue-200">Reset</button>
            </div>
          </div>
        </div>
        
      </Main>  
    </>
  )
}

export default Tasbih