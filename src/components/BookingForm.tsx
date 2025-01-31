import './BookingForm.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addBooking } from '../services/api';

const BookingSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^\+?\d{7,15}$/, 'Invalid phone number format')
    .required('Phone number is required')
});

const handleBookingSubmit = async (values: {fullName: string; phone: string;}) => {
  const newBooking = {
    fullName: values.fullName,
    phone: values.phone,
    movieId: '',
    seatId: ['']
  };

  await addBooking(newBooking);
}

function BookingForm() {
  return(
    <div className='booking-container'>
      <p className='booking-prompt'>
        Please, enter your contact information to proceed with the booking.
      </p>

      <Formik 
        initialValues={{
          fullName: '',
          phone: '',
        }}
        validationSchema={BookingSchema}
        onSubmit={handleBookingSubmit}
      >
        {({errors, touched}) => (
          <Form className='form-container'>
            <div className='form-name'>
              <label htmlFor='fullName'>Name:</label>
              <Field type='text' name='fullName' id='fullName' placeholder='Enter your full name' />
              {errors.fullName && touched.fullName ? (
                <div className='error-message'>{errors.fullName}</div>
              ): null}
            </div>
            <div className='form-phone'>
              <label htmlFor='phone'>Phone number:</label>
              <Field type='tel' name='phone' id='phone' placeholder='Enter a phone number (7-15 digits)' />
              {errors.phone && touched.phone ? (
                <div className='error-message'>{errors.phone}</div>
              ): null}
            </div>
            <button type='submit' className='form-button'>Confirm</button>
          </Form>
        )}
      </Formik>

    </div>
  );
}

export default BookingForm;