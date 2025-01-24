import './SelectionInfo.scss';

interface SelectionInfoProps {
  moviePrice: number;
  seatCount: number;
}

function SelectionInfo({moviePrice, seatCount}: SelectionInfoProps){
  return(
      <p className="text">
      You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
    </p>
  );
}

export default SelectionInfo;