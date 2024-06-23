import React from 'react'
import uniqid from 'uniqid'

interface PropsType extends React.ComponentProps<'select'> {
  label?: string
  options?: Array<{
    label: string
    value: string | number
  }>
  error?: string
}
const Select = React.forwardRef<HTMLSelectElement, PropsType>(
  ({ label, options, ...props }, ref) => {
    return (
      <div>
        <div className="w-full">
          <label htmlFor="countries" className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <div className="relative">
            <select
              ref={ref}
              className="mt-1 block appearance-none w-full bg-white border border-gray-300 text-gray-700 px-3 py-2 pr-8 rounded leading-tight focus:outline-none focus:ring-2 "
              {...props}
            >
              {options?.map((option) => (
                <option key={uniqid()} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3H7zm0 6l3 3 3-3H7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

export default Select
Select.displayName = 'Select'
