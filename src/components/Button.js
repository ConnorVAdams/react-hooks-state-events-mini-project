const Button = ({ cat, currentFilter }) => {
  
  const className = (cat === currentFilter) ? 'selected' : ''

  return (
    <button className={className}>{cat}</button>
  )
}

export default Button