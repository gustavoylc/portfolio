import * as Yup from 'yup';

const yupValidation = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required').min(5, 'Too Short!'),
});

export default yupValidation;
