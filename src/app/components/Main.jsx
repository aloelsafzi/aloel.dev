const Main = ({ children, className }) => {
  return (
    <>
      <main className={`${className} mx-3 my-4`}>
        {children}
      </main>
    </>
  )
}

export default Main