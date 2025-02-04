import './MovieForm.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const BookingSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  price: Yup.number()
    .positive('Price must be positive')
    .required('Price is required'),
  genre: Yup.string()
    .nullable(),
  year: Yup.number()
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear(), 'Year must be current year or in the past')
    .nullable(),
  duration: Yup.object({
    hours: Yup.number()
      .min(0, 'Hours must be at least 0')
      .nullable(),
    minutes: Yup.number()
      .min(0, 'Minutes must be at least 0')
      .nullable()
  }).nullable(),
  plot: Yup.string()
    .nullable(),
  impact: Yup.string()
    .nullable()
});

function MovieForm() {
  return (
    <div className='movie-form-container'>

      <Formik>

      </Formik>
    </div>
  );
}

export default MovieForm;