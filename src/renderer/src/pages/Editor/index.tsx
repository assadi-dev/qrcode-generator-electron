import DestinationCard from '@renderer/components/DestinationCard'
import EditorSectionCard from '@renderer/components/EditorSectionCard'
import PreviewQrCodeCard from '@renderer/components/PreviewQrCodeCard'
import React from 'react'

const Editor = (): React.JSX.Element => {
  return (
    <>
      <div className="h-[100px] pt-10 text-center">
        <h1 className="text-3xl font-bold">QR GENERATOR</h1>
      </div>
      <div className="flex  gap-4 min-h-48">
        <DestinationCard />
        <EditorSectionCard />
        <PreviewQrCodeCard />
      </div>
    </>
  )
}

export default Editor
