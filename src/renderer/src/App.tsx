import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import React, { FormEvent } from 'react'
import DestinationCard from './components/DestinationCard'
import PreviewQrCodeCard from './components/PreviewQrCodeCard'
import EditorSectionCard from './components/EditorSectionCard'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-slate-300 to-slate-400 px-9">
        <div className="h-[100px] pt-10 text-center">
          <h1 className="text-3xl font-bold">MY QR-STYLE</h1>
        </div>
        <div className="flex  gap-4 min-h-48">
          <DestinationCard />
          <EditorSectionCard />
          <PreviewQrCodeCard />
        </div>
      </div>
    </>
  )
}

export default App
