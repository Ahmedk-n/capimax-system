"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

interface FormData {
   user_name: string;
   user_email: string;
   user_phone: number;
   user_company: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      user_phone: yup
         .number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      user_company: yup.string().required().label("Company"),
      message: yup.string().required().label("Message"),
   })
   .required();

const cardVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 }
};

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (data: FormData) => {
      if (form.current) {
         emailjs.sendForm('eaglesthemes', 'template_lojvsvb', form.current, 'mtLgOuG25NnIwGeKm')
            .then((result) => {
               const notify = () => toast('Comment sent successfully', { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
               console.log("msg send");
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <motion.form ref={form} onSubmit={handleSubmit(sendEmail)} initial="hidden" animate="visible" variants={cardVariants}>
         <div className="row">
            <div className="col-lg-12">
               <div className="section-title text-center mb-60">
                  <h2 className="title">Have Any Questions?</h2>
               </div>
            </div>
            <div className="col-md-6">
               <motion.div className="form-grp" variants={cardVariants}>
                  <input type="text" {...register("user_name")} name="user_name" placeholder="Enter you name" />
                  <p className="form_error">{errors.user_name?.message}</p>
               </motion.div>
            </div>
            <div className="col-md-6">
               <motion.div className="form-grp" variants={cardVariants}>
                  <input type="email" {...register("user_email")} name="user_email" placeholder="Enter you email" />
                  <p className="form_error">{errors.user_email?.message}</p>
               </motion.div>
            </div>
            <div className="col-md-6">
               <motion.div className="form-grp" variants={cardVariants}>
                  <input type="number" {...register("user_phone")} name="user_phone" placeholder="Mobile no" />
                  <p className="form_error">{errors.user_phone?.message}</p>
               </motion.div>
            </div>
            <div className="col-md-6">
               <motion.div className="form-grp" variants={cardVariants}>
                  <input type="text" {...register("user_company")} name="user_company" placeholder="Company" />
                  <p className="form_error">{errors.user_company?.message}</p>
               </motion.div>
            </div>
         </div>
         <motion.div className="form-grp" variants={cardVariants}>
            <textarea {...register("message")} placeholder="Enter you message....."></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </motion.div>
         <motion.button type="submit" value="Send" className="btn" variants={cardVariants}>Send Message</motion.button>
      </motion.form>
   );
};

export default ContactForm;