import React from 'react'

type IconComponentType = React.JSX.Element
interface PropsInterface extends React.ComponentProps<'button'> {
  iconComponent: IconComponentType
}

const OutlineButtonIcon = (props: PropsInterface): React.JSX.Element => {
  return (
    <button {...props}>
      {props.iconComponent}
      {props.children}
    </button>
  )
}

export default OutlineButtonIcon
