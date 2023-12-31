import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='padding-container max-container w-full pb-24'>
        <SignUp />
      </div>
    </section>
  )
}

export default SignUpPage
