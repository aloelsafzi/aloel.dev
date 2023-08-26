const Badge = ({ text, className }) => {
  return <p className={`${className} bg-gray-100 rounded-3xl w-fit p-1 px-3 text-xs shadow-inner h-fit`}>{text}</p>
}

export default Badge