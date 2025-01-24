import './SelectionInfo.scss';

interface SelectionInfoProps {
  moviePrice: number;
  seatCount: number;
}

function SelectionInfo({moviePrice, seatCount}: SelectionInfoProps){

  const ticketTotal = moviePrice * seatCount;

  return(
    <p className="text">
      You have selected <span id="count">{seatCount}</span> seats 
      for a price of <span id="total">{ticketTotal}</span> kr
    </p>
  );
}

export default SelectionInfo;