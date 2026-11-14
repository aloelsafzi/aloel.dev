import { Footer, Main, Navbar, Errors } from '@/app/components'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Main className="flex-1">
        <Errors />
      </Main>
      <Footer />
    </>
  )
}
