const Errors = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-40 bg-red-100 shadow-inner rounded-3xl p-5">
        <h1>Ups..!! Posts on Development Ya.. :(</h1>
        <a href="/" className="bg-gray-100 rounded-lg shadow-xl hover:shadow-inner p-2 mt-3">Go Home :)</a>
      </div>
    </div>
  )
}

export default Errors