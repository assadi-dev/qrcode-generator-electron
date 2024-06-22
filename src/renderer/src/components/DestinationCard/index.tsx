import React from 'react'
import ButtonDestinationGridCard from './ButtonDestinationGridCard'

const DestinationCard = (): React.JSX.Element => {
  return (
    <div className="w-1/3 bg-slate-100 rounded shadow-lg p-3">
      <div>
        <p className="text-center font-bold">Destinations</p>
      </div>
      <ButtonDestinationGridCard />
    </div>
  )
}

export default DestinationCard
