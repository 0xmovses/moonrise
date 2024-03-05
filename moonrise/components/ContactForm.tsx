import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import MoonriseLogo from './MoonriseLogo'
import CountryList from './CountryList'

type FormFields = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
};

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }

  return (
    <form className='tutorial gap-2' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="text" placeholder="Email" />
      <input {...register("firstName")} type="text" placeholder="First Name" />
      <input {...register("lastName")} type="text" placeholder="Last Name" />
      <input {...register("company")} type="text" placeholder="Company" />
      <input {...register("jobTitle")} type="text" placeholder="Job Title" />
      <input {...register("phoneNumber")} type="text" placeholder="Phone Number" />
      
      <button type = "submit">Submit</button>
    </form>
  );
}

export default ReactHookForm

// const ContactForm: React.FC = () => {
//   return (
//     <div className='flex flex-col flex-center items-center w-full min-h-screen px-5 py-5 bg-white'>
//       <div className='flex flex-col py-8 items-center'>
//         <p className='text-[#003030] pb-8'>contact</p>
//         <p className='text-[#003030]'>Thank you for your interest in moonrise. To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
//       </div>

//       <div className='flex border w-2/3'> 
//         <form className='flex flex-col w-full'>
//           <div className='flex w-full'>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>First Name</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Last Name</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//           </div>
//           <div className='flex w-full'>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Company</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Job Title</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//           </div>
//           <div className='flex w-full'>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>E-mail</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Phone Number</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//           </div>
//           <CountryList />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ContactForm