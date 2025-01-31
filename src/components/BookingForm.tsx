import './BookingForm.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const BookingSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^\+?\d{7,15}$/, 'Invalid phone number format')
    .required('Phone number is required')
})

function BookingForm() {
  return(
    <div className='booking-container'>
      <p className='booking-prompt'>
        Please, enter your contact information to proceed with the booking.
      </p>
      <form action='' className='form-container'>
        <div className='form-name'>
          <label htmlFor='fullName'>Name:</label>
          <input type='text' name='fullName' id='fullName' placeholder='Enter your full name' />
        </div>
        <div className='form-phone'>
          <label htmlFor='phone'>Phone number:</label>
          <input type='tel' name='phone' id='phone' placeholder='Enter a phone number (7-15 digits)' />
        </div>
        <button type='submit' className='form-button'>Confirm</button>
      </form>
    </div>
  );
}

export default BookingForm;