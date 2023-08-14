import {
  AboutMe,
  Main,
  Navbar,
  ProfileImage,
  SocialMedia
} from "@/app/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          <div className="my-20">
            <ProfileImage />
            <SocialMedia />
          </div>        
          <AboutMe />
        </div>
      </Main>
    </>
  )
}
