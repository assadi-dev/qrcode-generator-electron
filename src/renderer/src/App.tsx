import Editor from './pages/Editor'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-slate-300 to-slate-400 px-9">
        <Editor />
      </div>
    </>
  )
}

export default App
