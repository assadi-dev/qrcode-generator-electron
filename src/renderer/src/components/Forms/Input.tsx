import React, { ComponentProps } from 'react'
interface PropsType extends ComponentProps<'input'> {
  label?: string
  error?: string
}
const Input = React.forwardRef(({ label, error, ...props }: PropsType, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        aria-describedby={`${props.id}-error`}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm  sm:text-sm ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && (
        <p id={`${props.id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
})

export default Input
Input.displayName = 'Input'
