const Icon = ({ name, className = '' }) => {
  return (
    <span className={`material-symbols-outlined text-[20px] leading-none select-none ${className}`}>{name}</span>
  )
}

export default Icon