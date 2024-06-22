import React from 'react'
import OutlineButtonIcon from '../Buttons.tsx/OutlineButtonIcon'

interface PropType {
  label: string
  icon: any
}

const ButtonDestinationItem = ({ label, icon }: PropType): React.JSX.Element => {
  const CLASS_BUTTON = `size-5 mx-auto`
  const IconRender = icon
  return (
    <div className="flex flex-col  text-center w-full items-center p-1">
      <OutlineButtonIcon
        type="button"
        className="text-center w-[50px]  p-3 border-[rgba(0,0,0,0.5)] border shadow rounded hover:bg-[#1b1b1f] hover:text-white active:bg-slate-100 active:text-[#1b1b1f]"
        iconComponent={<IconRender className={CLASS_BUTTON} />}
      />
      <small className="font-bold mt-1">{label}</small>
    </div>
  )
}

export default ButtonDestinationItem
