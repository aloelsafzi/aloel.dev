const Main = ({ children, className = '' }) => {
  return (
    <main className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${className}`}>
      {children}
    </main>
  )
}

export default Main