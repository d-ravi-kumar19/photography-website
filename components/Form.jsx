'use client'

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { UserCheck, MailIcon, MessageCircle, ArrowRightIcon } from 'lucide-react'; 
import { Fade } from "react-awesome-reveal";

// importing toaster hook
import { ToastAction } from '@/components/ui/toast'
import { useToast } from "@/hooks/use-toast"

const Form = () => {
  const { toast } = useToast();

  return (
    <form className="flex flex-col gap-y-4">
      <Fade direction="right" delay={400} cascade damping={1e-1} triggerOnce={true}>
        {/* First name */}
        <div className="relative">
          <Input type="text" id="first-name" placeholder="First Name" />
          <UserCheck className="absolute right-4 top-1/2 transform -translate-y-1/2" size={20} />
        </div>
      </Fade>

      <Fade direction="right" delay={600} cascade damping={1e-1} triggerOnce={true}>
        {/* Last name */}
        <div className="relative">
          <Input type="text" id="last-name" placeholder="Last Name" />
          <UserCheck className="absolute right-4 top-1/2 transform -translate-y-1/2" size={20} />
        </div>
      </Fade>
      <Fade direction="right" delay={800} cascade damping={1e-1} triggerOnce={true}>
        {/* Email */}
        <div className="relative">
          <Input type="email" id="email" placeholder="Email" />
          <MailIcon className="absolute right-4 top-1/2 transform -translate-y-1/2" size={20} />
        </div>
      </Fade>
        
      <Fade direction="right" delay={1000} cascade damping={1e-1} triggerOnce={true}>
        {/* Text Area */}
        <div className="relative">
          <Textarea placeholder="Type your message here..." />
          <MessageCircle className="absolute right-4 top-8 transform -translate-y-1/2" size={20} />
        </div>
      </Fade>

      <Fade direction="right" delay={1200} cascade damping={1e-1} triggerOnce={true}>

        {/* Submit Button */}
        <Button className="mt-4 flex items-center gap-x-1 max-w-[165px]"
          onClick={() => {
                  toast({
                      title: "Submitted Successfully",
                      description: `Purchase made at ${getCurrentTime()}`, // Dynamic time
                      action: (
                      <ToastAction className="hover:bg-black text-white" altText="Close">Close</ToastAction>
                      ),
                  });
          }}
        >Let's talk
          <ArrowRightIcon/>
        </Button>
      </Fade>
    </form>
  );
}

export default Form;
