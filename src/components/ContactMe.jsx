import { Formik, Form, Field, ErrorMessage } from 'formik';
import yupValidation from '@/utils/validation';
import sendEmail from '../services/email';

const ContactMe = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={yupValidation}
    onSubmit={async (values, { setSubmitting }) => {
      try {
        // setLoading(true);
        // setError(null);
        const response = await sendEmail(values);
        console.log(response);
        setSubmitting(false);
      } catch (e) {
        // setError(e.message);
      } finally {
        // setLoading(false);
      }
    }}
  >
    {({ isSubmitting }) => (
      <Form className="max-w-lg flex flex-col gap-4 text-white">
        {/* {loading && <p>Cargando...</p>} */}
        <div>
          <label className="block font-bold mb-2 " htmlFor="name">
            Name
          </label>
          <Field
            className="w-full p-2 border border-gray-600 rounded-md bg-transparent "
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
            className="w-full p-2 border border-gray-600 rounded-md bg-transparent "
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
            className="w-full p-2 border border-gray-600 rounded-md bg-transparent "
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
        <button
          className="bg-sky-900 hover:bg-transparent border border-sky-900 hover:border-gray-600 font-bold py-2 px-3 rounded-md"
          type="submit"
          disabled={isSubmitting}
        >
          Enviar
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactMe;
