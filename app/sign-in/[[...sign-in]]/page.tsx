import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <section className='max-container padding-container flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='w-full pb-24'>
        <SignIn />
      </div>
    </section>
  )
}

export default SignInPage
