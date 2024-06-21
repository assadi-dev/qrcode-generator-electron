import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import React, { FormEvent } from 'react'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const submit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    console.log('hello')
  }

  const prevQrcodeRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-slate-300 to-slate-400 px-9">
        <div className="h-[100px] pt-10 text-center">
          <h1 className="text-3xl font-bold">MY QR-STYLE</h1>
        </div>
        <div className="flex  gap-4 min-h-48">
          <div className="w-1/3 bg-slate-100 rounded shadow-lg p-3">
            <div>
              <p className="text-center font-bold">Destinations</p>
            </div>
          </div>
          <div className="w-1/2 bg-slate-100 rounded shadow-lg">
            <div className="p-3">
              <div>
                <p className="text-center font-bold">Personnalisation</p>
              </div>
              <div className="my-6">
                <input type="text" placeholder="Entrer votre text" className="w-full p-2" />
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-slate-100 rounded shadow-lg  p-3">
            <div>
              <p className="text-center font-bold"> Aperçu QR Code</p>
            </div>

            <div
              id="preview-qrqode"
              ref={prevQrcodeRef}
              className="my-8 mx-auto w-[280px] h-[250px] bg-white border-slate-300 border-2 rounded "
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
