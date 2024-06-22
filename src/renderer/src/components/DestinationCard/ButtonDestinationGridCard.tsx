import React from 'react'
import OutlineButtonIcon from '../Buttons.tsx/OutlineButtonIcon'
import Link from '../icons/Link'
import { ListButtonElements } from './ListButtonElements'
import ButtonDestinationItem from './ButtonDestinationItem'

const ButtonDestinationGridCard = (): React.JSX.Element => {
  return (
    <div className="w-full justify-center justify-items-center items-center  grid grid-cols-[repeat(auto-fill,minmax(50px,80px))] gap-2  mt-9">
      {ListButtonElements.map((element) => (
        <ButtonDestinationItem
          key={element.label}
          label={element.label}
          icon={element.iconElement}
        />
      ))}
    </div>
  )
}

export default ButtonDestinationGridCard
