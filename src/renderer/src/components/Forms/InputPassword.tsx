import React, { ComponentProps } from 'react'
import Eye from '../icons/Eye'
import EyeSlash from '../icons/EyeSlash'
interface PropsType extends ComponentProps<'input'> {
  label?: string
  error?: string
}
const InputPassword = React.forwardRef(({ label, error, ...props }: PropsType, ref) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          ref={ref}
          {...props}
          type={passwordVisible ? 'text' : 'password'}
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
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-700 focus:outline-none"
        >
          {passwordVisible ? <EyeSlash className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  )
})

export default InputPassword
InputPassword.displayName = 'InputPassword'
