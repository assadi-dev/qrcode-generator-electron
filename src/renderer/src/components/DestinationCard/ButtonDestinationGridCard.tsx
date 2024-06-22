import React from 'react'
import { ListButtonElements } from './ListButtonElements'
import ButtonDestinationItem from './ButtonDestinationItem'
import { setType } from '@renderer/store'

const ButtonDestinationGridCard = (): React.JSX.Element => {
  const handleClickType = (name: string): void => {
    setType(name)
  }

  return (
    <div className="w-full justify-center justify-items-center items-center  grid grid-cols-[repeat(auto-fill,minmax(50px,80px))] gap-2  mt-9">
      {ListButtonElements.map((element) => (
        <ButtonDestinationItem
          key={element.label}
          label={element.label}
          icon={element.iconElement}
          name={element.value}
          onSelected={handleClickType}
        />
      ))}
    </div>
  )
}

export default ButtonDestinationGridCard
