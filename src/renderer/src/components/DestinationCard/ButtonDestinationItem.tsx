import React from 'react'
import OutlineButtonIcon from '../Buttons.tsx/OutlineButtonIcon'
import { useAppStore } from '@renderer/store'

interface PropType {
  label: string
  icon: React.FC<React.ComponentProps<'svg'>>
  name: string
  onSelected?: (name: string) => void
}

const ButtonDestinationItem = ({ label, icon, name, onSelected }: PropType): React.JSX.Element => {
  const type = useAppStore.use.type()

  const CLASS_ICON = ['size-5', 'mx-auto', 'pointer-events-none']
  const CLASS_BUTTON = [
    'text-center',
    'w-[50px]',
    'p-3',
    'border-[rgba(0,0,0,0.5)]',
    'border',
    'shadow',
    'rounded',
    'hover:bg-[#1b1b1f]',
    'hover:text-white',
    'active:bg-slate-100',
    'active:text-[#1b1b1f]'
  ]

  name == type ? CLASS_BUTTON.push('bg-[#1b1b1f] text-white') : CLASS_BUTTON
  const IconRender = icon
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target = e.target as HTMLButtonElement
    const targetName = target.name
    onSelected && onSelected(targetName)
  }
  return (
    <div className="flex flex-col  text-center w-full items-center p-1">
      <OutlineButtonIcon
        name={name}
        type="button"
        onClick={handleClick}
        className={CLASS_BUTTON.join(' ')}
        iconComponent={<IconRender className={CLASS_ICON.join(' ')} />}
      />
      <small className="font-bold mt-1">{label}</small>
    </div>
  )
}

export default ButtonDestinationItem
