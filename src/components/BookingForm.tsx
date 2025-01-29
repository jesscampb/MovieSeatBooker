import './BookingForm.scss';

function BookingForm() {
  return(
    <div className='booking-container'>
      <p className='booking-prompt'>Please, enter your contact information to proceed with the booking.</p>
      <form action='' className='form-container'>
        <div className='form-name'>
          <label htmlFor='fullName'>Name:</label>
          <input type='text' name='fullName' id='fullName' placeholder='Enter your full name' />
        </div>
        <div className='form-phone'>
          <label htmlFor='phone'>Phone number:</label>
          <input type='tel' name='phone' id='phone' placeholder='Enter a phone number' />
        </div>
        <button type='submit' className='form-button'>Confirm</button>
      </form>
    </div>
  );
}

export default BookingForm;