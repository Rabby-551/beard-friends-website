
// "use client";

// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";

// interface FormData {
//   name: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   message: string;
//   acceptTerms: boolean;
// }

// function ContactUs() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     acceptTerms: false,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (checked: boolean) => {
//     setFormData((prev) => ({ ...prev, acceptTerms: checked }));
//   };

//   const validateForm = (): boolean => {
//     if (!formData.name.trim()) {
//       toast.error("Name is required");
//       return false;
//     }
//     if (!formData.lastName.trim()) {
//       toast.error("Last name is required");
//       return false;
//     }
//     if (!formData.email.includes("@") || !formData.email.includes(".")) {
//       toast.error("Please enter a valid email");
//       return false;
//     }
//     if (!formData.phone.trim()) {
//       toast.error("Phone number is required");
//       return false;
//     }
//     if (!formData.message.trim()) {
//       toast.error("Message cannot be empty");
//       return false;
//     }
//     if (!formData.acceptTerms) {
//       toast.error("You must accept the Terms and Conditions");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     const payload = {
//       name: formData.name.trim(),
//       lastName: formData.lastName.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim(),
//       message: formData.message.trim(),
//     };

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-us/web-create`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.message || "Something went wrong");
//       }

//       // Success
//       toast.success("Message sent successfully!")

//       // Reset form
//       setFormData({
//         name: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         message: "",
//         acceptTerms: false,
//       });

//     } catch (err) {
//       toast.error("Failed to send message" + err)
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-[#1a1a1a] py-16 md:px-4">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Contact Form */}
//           <div className="bg-[#2a2a2a] rounded-2xl p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name and Last Name */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-gray-300 text-sm">
//                     Name *
//                   </Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Enter your name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
//                     disabled={isSubmitting}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="lastName" className="text-gray-300 text-sm">
//                     Last Name *
//                   </Label>
//                   <Input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     placeholder="Enter your last name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
//                     disabled={isSubmitting}
//                   />
//                 </div>
//               </div>

//               {/* Email and Phone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-gray-300 text-sm">
//                     Email *
//                   </Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
//                     disabled={isSubmitting}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone" className="text-gray-300 text-sm">
//                     Phone *
//                   </Label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
//                     disabled={isSubmitting}
//                   />
//                 </div>
//               </div>

//               {/* Message */}
//               <div className="space-y-2">
//                 <Label htmlFor="message" className="text-gray-300 text-sm">
//                   Message *
//                 </Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   placeholder="Enter your message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 min-h-[120px] resize-none"
//                   disabled={isSubmitting}
//                 />
//               </div>

            

//               {/* Submit Button */}
//               <div className="flex justify-end pt-6">
//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-semibold px-10 py-6 rounded-lg text-base transition-colors min-w-[160px]"
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </div>
//             </form>
//           </div>

//           {/* Contact Info Section */}
//           <div className="space-y-8">
//             <div className="inline-block">
//               <div className="bg-[#BA5EEF] text-white font-bold text-2xl md:text-3xl px-8 py-4 rounded-xl">
//                 Contact Us
//               </div>
//             </div>

//             <h3 className="text-2xl md:text-3xl font-bold text-white">
//               We Are Here to Support You
//             </h3>

//             <p className="text-gray-300 text-base leading-relaxed">
//               Customer support is our highest priority. We&apos;re here to answer all
//               your questions via our 24/7 Live Chat and Support line that calls
//               straight into Mark&apos;s personal phone.
//             </p>

//             <div className="border-t-2 border-dashed border-gray-600 my-8"></div>

//            {/* Terms Checkbox */}
//               <div className="flex items-start gap-3 pt-2">
//                 <Checkbox
//                   id="terms"
//                   checked={formData.acceptTerms}
//                   onCheckedChange={handleCheckboxChange}
//                   disabled={isSubmitting}
//                   className="mt-1 border-gray-500 data-[state=checked]:bg-[#BA5EEF] data-[state=checked]:border-[#BA5EEF]"
//                 />
//                 <Label
//                   htmlFor="terms"
//                   className="text-gray-300 text-sm leading-relaxed cursor-pointer"
//                 >
//                   I accept the{" "}
//                   <a
//                     href="/terms"
//                     className="text-[#BA5EEF] hover:underline font-medium"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Terms and Conditions
//                   </a>
//                 </Label>
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;






"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface FormData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
}

function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error("Last name is required");
      return false;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Phone number is required");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Message cannot be empty");
      return false;
    }
    if (!formData.acceptTerms) {
      toast.error("You must accept the Terms and Conditions");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-us/web-create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Something went wrong");
      }

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        acceptTerms: false,
      });
    } catch (err) {
      toast.error("Failed to send message" + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1a1a1a] md:py-16 md:px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contact Form */}
          <div className="bg-[#2a2a2a] rounded-2xl p-8 order-2 lg:order-none">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Name *</Label>
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white h-12"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Last Name *</Label>
                  <Input
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white h-12"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Email *</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white h-12"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Phone *</Label>
                  <Input
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white h-12"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm">Message *</Label>
                <Textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border-none text-white min-h-[120px]"
                  disabled={isSubmitting}
                />
              </div> 
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={handleCheckboxChange}
                  disabled={isSubmitting}
                  className="mt-1 border-gray-500 data-[state=checked]:bg-[#BA5EEF] data-[state=checked]:border-[#BA5EEF]"
                />
                <Label
                  htmlFor="terms"
                  className="text-gray-300 text-sm leading-relaxed cursor-pointer"
                >
                  I accept the{" "}
                  <a
                    href="/terms"
                    className="text-[#BA5EEF] hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                </Label>
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#BA5EEF] hover:bg-[#A54DD9] text-white px-10 py-6 rounded-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8 order-1 lg:order-none">
            <div className="inline-block">
              {/* <div className="bg-[#BA5EEF] text-white font-bold text-2xl md:text-3xl px-8 py-4 rounded-xl">
                Contact Us
              </div> */}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              We Are Here to Support You
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Customer support is our highest priority. We&apos;re here to answer all
              your questions via our 24/7 Live Chat and Support line.
            </p>

            <div className="border-t-2 border-dashed border-gray-600 my-8"></div>

              
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
