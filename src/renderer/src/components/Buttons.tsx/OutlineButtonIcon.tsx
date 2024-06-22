import React from 'react'

type IconComponentType = React.JSX.Element
interface PropsInterface extends React.ComponentProps<'button'> {
  iconComponent: IconComponentType
  name: string
}

const OutlineButtonIcon: React.FC<PropsInterface> = (props) => {
  return (
    <button {...props}>
      {props.iconComponent}
      {props.children}
    </button>
  )
}

export default OutlineButtonIcon
