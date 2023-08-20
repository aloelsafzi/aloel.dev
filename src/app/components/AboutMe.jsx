const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-3 lg:w-3/5 lg:ml-12 lg:items-start">
        <h1 className="mb-5 antialiased font-mono text-md md:text-lg font-semibold">[Samsul Fauzi] ~ <span className="italic">Software Engineer</span></h1>
        <p className="text-center lg:text-left lg:indent-10 antialiased tracking-wide font-light">I am a <strong className="bg-orange-100 rounded-lg">Software Engineer</strong> with experience in developing and developing web and mobile applications. I have skills in developing software using various technologies such as <span className="italic bg-red-100 rounded-lg">HTML</span>, <span className="italic bg-blue-100 rounded-lg">CSS</span>, <span className="italic bg-yellow-100 rounded-lg">Javascript</span>, and JavaScript frameworks such as <span className="italic bg-blue-100 rounded-lg">React</span> and <span className="italic bg-green-100 rounded-lg">Vue</span>. I also have the ability to build and manage databases using programming languages such as SQL and NoSQL. I have skills in developing and maintaining operating systems, servers, and networks. I also have skills in working in teams consisting of various professionals and having the ability to communicate with customers and stakeholders.
        </p>
        <a href={process.env.linkCv} className="bg-blue-400 p-2 rounded-md shadow-inner w-full md:w-fit my-6 font-semibold text-center text-white">Get Resume</a>
      </div>
    </>
  )
}

export default AboutMe
