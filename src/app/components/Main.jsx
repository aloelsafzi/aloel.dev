const Main = ({children, className}) => {
  return (
    <>
    <main className={`${className} mx-3`}>
      {children}
    </main>
    </>
  )
}

export default Main