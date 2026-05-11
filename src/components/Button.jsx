export default function Button({ children, variant = 'primary', ...props }) {
  // const className = `btn btn--${variant}`
  const className = `btn btn--${variant} ${
    props.disabled ? 'btn--disabled' : ''
  }`

  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
