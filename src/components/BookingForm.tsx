import './BookingForm.scss';

function BookingForm() {
  return(
    <div className='booking-container'>
      <p>Please, enter your contact information to proceed with the booking.</p>
      <form action=''>
        <div>
          <label htmlFor='firstName'>First name:</label>
        </div>
        <div>
          <input type='text' name='firstName' id='firstName' placeholder='First name' />
        </div>
        <div>
          <label htmlFor='lastName'>Last name:</label>
         </div>
        <div>
          <input type='text' name='lastName' id='lastName' placeholder='Last name' />
        </div>
        <div>
          <label htmlFor='phone'>Phone number:</label>
        </div>
        <div>
          <input type='tel' name='phone' id='phone' placeholder='Phone number' />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;