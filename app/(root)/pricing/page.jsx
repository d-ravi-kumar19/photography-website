'use client'

import { Button } from '@/components/ui/button';
import { CheckIcon } from '@heroicons/react/20/solid'; // Fixed incorrect import
import React from 'react';

// importing toaster hook
import { ToastAction } from '@/components/ui/toast'
import { useToast } from "@/hooks/use-toast"


const includedFeatures = [
  'Private forum access',
  'Membership resources',
  'Entry to annual conference',
  'Official member equipment',
];

const Pricing = () => {
  const { toast } = useToast();

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleString(); // Get current time in a readable format
  }

  return (
    <section className="min-h-screen mt-12 mb-12 lg:mb-32">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Pricing
        </h2>

        {/* Intro Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Memories Worth Cherishing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Create memories & celebrate the magic with Naveen - offering beautiful and timeless wedding photography services designed to capture it all.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mx-auto mt-16 max-w-screen-xl ring-1 ring-gray-200 dark:ring-gray-700 rounded-3xl overflow-hidden sm:mx-4 lg:flex lg:items-center lg:justify-center">
          {/* Left Section */}
          <div className="p-8 lg:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Lifetime Membership
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Capture every moment and celebrate the magic with Naveen. Offering a lifetime membership designed to preserve your most precious memories through beautiful photography.
            </p>

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                What's included
              </h4>
              <div className="h-px flex-auto bg-gray-400"></div>
            </div>

            {/* Included Features */}
            <ul role="list" className="mt-6 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <CheckIcon className="h-6 w-6 flex-none text-primary" aria-hidden="true" />
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="p-2 lg:mt-0 lg:flex-shrink-0 ">
            <div className="bg-tertiary py-6 px-4 rounded-2xl text-center dark:bg-transparent dark:border ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
              <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6">
                <p className="text-base font-semibold text-gray-600 dark:text-gray-400">
                  Pay Once, Own It Forever
                </p>

                {/* Centering the price */}
                <p className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">₹30,000</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide">INR</span>
                </p>

                <Button className="gap-x-2 mt-3 text-base"
                   onClick={() => {
                    toast({
                      title: "Purchase Successfully",
                      description: `Purchase made at ${getCurrentTime()}`, // Dynamic time
                      action: (
                        <ToastAction className="hover:bg-black text-white" altText="Close">Close</ToastAction>
                      ),
                    });
                  }}
                >
                  Purchase
                </Button>
                <p className="mt-6 leading-5 text-sm">
                  Invoices are available for easy company reimbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
