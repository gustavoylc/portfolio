import { Formik, Form, Field, ErrorMessage } from 'formik';
import yupValidation from '@/utils/validation';
import sendEmail from '../services/email';
import Button from './Button';

const ContactMe = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={yupValidation}
    onSubmit={async (values, { setSubmitting }) => {
      try {
        const response = await sendEmail(values);
        console.log(response);
      } catch (e) {
        throw new Error(e.message);
      } finally {
        setSubmitting(false);
      }
    }}
  >
    {({ isSubmitting }) => (
      <Form className="max-w-lg  text-white">
        {isSubmitting && <p>Cargando...</p>}
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
    )}
  </Formik>
);

export default ContactMe;
