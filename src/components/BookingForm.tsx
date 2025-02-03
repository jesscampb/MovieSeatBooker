import './BookingForm.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addBooking } from '../services/api';
import { Movie } from '../models/Movie';

interface BookingFormProps {
  readyToBook: boolean;
  selectedMovie: Movie | null;
  selectedSeats: string[];
}

const BookingSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^\+?\d{7,15}$/, 'Invalid phone number format')
    .required('Phone number is required')
});

function BookingForm({readyToBook, selectedMovie, selectedSeats}: BookingFormProps) {

  const handleBookingSubmit = async (values: {fullName: string; phone: string;}) => {
    if (!selectedMovie?.id) return;

    const newBooking = {
      fullName: values.fullName,
      phone: values.phone,
      movieId: selectedMovie.id,
      seatId: selectedSeats
    };
    
    await addBooking(newBooking);
  }

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