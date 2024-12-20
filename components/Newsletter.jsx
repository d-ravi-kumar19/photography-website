'use client'

import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { RiMenFill } from 'react-icons/ri'
import { CalendarDaysIcon, HandIcon } from 'lucide-react'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

const Newsletter = () => {
  return (
    <section>
      <div className='relative bg-tertiary dark:bg-transparent overflow-hidden py-12 sm:py-24 lg:py-12'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 py-4'>
            {/* Left Section */}
            <div className='max-w-xl lg:max-w-lg'>
            <Fade direction="left" delay={400} cascade damping={1e-1} triggerOnce={true}>
              <h2 className="text-4xl text-primary font-bold relative w-full gap-x-3 text-left mb-8">Need a Photographer?</h2>
            </Fade>


              <Fade direction="left" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <p className='mt-4 text-lg leading-8 subtitle'>
                  Whether it's your big day, a family reunion, or a corporate event, capturing the perfect moments is essential. Let us help you preserve memories that last a lifetime with professional photography tailored to your needs.
                </p>
              </Fade>

              <Fade direction="left" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <div className='mt-6 max-w-md flex gap-x-4'>
                  <label className='sr-only' htmlFor='email-address'>Email</label>
                  <Input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                  />
                  <Link href="/">
                    <Button className="text-white">
                      Subscribe <RiMenFill size={18} />
                    </Button>
                  </Link>
                </div>
              </Fade>


            </div>

            {/* Right Section */}
            <dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
              <Fade direction="right" delay={400} cascade damping={1e-1} triggerOnce={true}>  
                <div className='flex flex-col items-start'>
                  <div className='bg-primary p-2 ring-1 ring-white/10 rounded-full'>
                    <CalendarDaysIcon className='h-6 text-white' />
                  </div>
                  <dt className='mt-4 font-semibold text-muted-foreground'>Weekly Articles</dt>
                  <dd className='mt-2 leading-7'>
                    Stay updated with weekly photography tips, behind-the-scenes stories, and helpful articles to make your next photo session even better. Sign up to get the latest insights directly in your inbox.
                  </dd>
                </div>
              </Fade>

              <Fade direction="right" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <div className='flex flex-col items-start'>
                  <div className='bg-primary p-2 ring-1 ring-white/10 rounded-full'>
                    <HandIcon className='h-6 text-white' />
                  </div>
                  <dt className='mt-4 font-semibold text-muted-foreground'>Full Security</dt>
                  <dd className='mt-2 leading-7'>
                    Your privacy and security are our top priorities. We ensure that your photos and personal data are safely stored and accessible only to you, providing peace of mind every step of the way.
                  </dd>
                </div>
              </Fade>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
