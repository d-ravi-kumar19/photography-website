import Form from "@/components/Form"

const Contact = () => {
  return (
    <section className='mb-6 lg:mb-12 mt-6'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 mb-6 lg:mb-12'>
          {/* Left section */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[20px] h-[2px] bg-primary'></span>
              Hello
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's work together</h1>
            <p className='subtitle max-w-[400px]'>
              Thank you so much for considering us to photograph you, its really such an honour. Interested
              in learning more or just want to say hello? Kindly fill out the contact form below and we will 
              contact you as soon as possible! We can't wait to hear from you and capture your beautiful stories.
            </p>
          </div>

          <div className='lg:mt-24'>
            <Form/> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact