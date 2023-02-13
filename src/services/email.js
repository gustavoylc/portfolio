import axios from 'axios';

const sendEmail = async ({ name, email, message }) => {
  console.log(name);
  try {
    let fromName = name;
    if (name === '') {
      fromName = email;
    }
    const response = await axios({
      method: 'post',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      data: {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        template_params: {
          from_name: fromName,
          from_email: email,
          reply_to: email,
          message,
        },
      },
    });
    return response;
  } catch (error) {
    throw new Error('Error sending email');
  }
};

export default sendEmail;
