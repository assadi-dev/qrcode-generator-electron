import React from 'react'

const PreviewQrCodeCard = () => {
  const prevQrcodeRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <div className="w-1/3 bg-slate-100 rounded shadow-lg  p-3 text-center flex flex-col items-center">
      <div>
        <p className="text-center font-bold"> Aperçu QR Code</p>
      </div>

      <div
        id="preview-qrqode"
        ref={prevQrcodeRef}
        className="my-8  w-[280px] h-[250px] bg-white border-slate-300 border-2 rounded"
      ></div>
    </div>
  )
}

export default PreviewQrCodeCard
