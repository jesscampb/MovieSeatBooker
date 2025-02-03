import './ContinueButton.scss';

interface ContinueButtonProps {
  setReadyToBook: (value: boolean) => void;
}

function ContinueButton({setReadyToBook}: ContinueButtonProps) {

  const handleButtonClick = () => {
    setReadyToBook(true);
  }

  return(
    <div className='button-container'>
      <button className='primary-button' onClick={handleButtonClick}>
        Continue with booking
      </button>
    </div>
  );
}

export default ContinueButton;