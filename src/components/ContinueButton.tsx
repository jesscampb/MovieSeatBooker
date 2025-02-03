import './ContinueButton.scss';

interface ContinueButtonProps {
  seatCount: number;
}

function ContinueButton({seatCount}: ContinueButtonProps) {

  return(
    <div className='button-container'>
      <button className='primary-button'>
        Continue with booking
      </button>
    </div>
  );
}

export default ContinueButton;