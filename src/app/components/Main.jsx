const Main = ({ children, className = '' }) => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-14 focus:outline-none ${className}`}
    >
      {children}
    </main>
  )
}

export default Main
