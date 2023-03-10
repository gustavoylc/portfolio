import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';
import yupValidation from '@/utils/validation';
import sendEmail from '../services/email';
import Button from './Button';
import Logo from '../../public/logo.svg';

const ContactMe = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={yupValidation}
    onSubmit={async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await sendEmail(values);
        if (response.data === 'OK') {
          toast.success('Message sent successfully!');
        } else {
          toast.error("Something went wrong, we couldn't send your message");
        }
      } catch (e) {
        toast.error("Something went wrong, we couldn't send your message");
      } finally {
        setSubmitting(false);
        resetForm();
      }
    }}
  >
    {({ isSubmitting }) => (
      <>
        {isSubmitting && (
          <div className="absolute left-2/4 top-2/4 grid place-content-center place-items-center translate-x-[-50%] translate-y-[-50%] backdrop-blur-sm h-screen w-screen z-30">
            <motion.div
              animate={{
                scale: [1, 2, 2, 2, 1],
                rotate: [0, 0, 360, 360, 360],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Image src={Logo} alt="Gustavo's Logo" width={120} />
            </motion.div>
            <p className="mt-16 grid place-content-center place-items-center">
              Sending
            </p>
          </div>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div>
          <h1 className="text-[#3da6e5]">Get In Touch</h1>
          <Form className="max-w-lg text-white">
            <div className="flex flex-col gap-6 ">
              <div>
                <label className="block font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <Field
                  className="w-full p-2 border border-gray-600 rounded-md bg-transparent hover:border-gray-400"
                  type="text"
                  name="name"
                  placeholder="John"
                />
                <ErrorMessage
                  className="text-red-500 text-xs italic mt-2"
                  name="name"
                  component="div"
                />
              </div>
              <div>
                <label className="block font-bold mb-2 " htmlFor="email">
                  Email *
                </label>
                <Field
                  className="w-full p-2 border border-gray-600 rounded-md bg-transparent hover:border-gray-400"
                  type="email"
                  name="email"
                  placeholder="john@gmail.com"
                />
                <ErrorMessage
                  className="text-red-500 text-xs italic mt-2"
                  name="email"
                  component="div"
                />
              </div>
              <div>
                <label className="block font-bold mb-2 " htmlFor="message">
                  Message *
                </label>
                <Field
                  className="w-full p-2 border border-gray-600 rounded-md bg-transparent hover:border-gray-400"
                  component="textarea"
                  name="message"
                  rows="3"
                  placeholder="Hello, ..."
                />
                <ErrorMessage
                  className="text-red-500 text-xs italic mt-2"
                  name="message"
                  component="div"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center sm:justify-start">
              <Button type="submit" disabled={isSubmitting}>
                Send Message
              </Button>
            </div>
          </Form>
        </div>
      </>
    )}
  </Formik>
);

export default ContactMe;
