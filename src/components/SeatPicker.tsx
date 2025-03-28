import { useEffect, useState } from 'react';
import './SeatPicker.scss';
import { Seat } from '../models/Seat';
import { getAllSeats } from '../services/api';

interface SeatPickerProps {
  resetReadyToBookState: () => void;
  seatCount: number;
  setSeatCount: (selectedCount: number) => void;
  selectedSeats: string[];
  setSelectedSeats: (seats: string[] | ((prev: string[]) => string[])) => void;
  occupiedSeats: string[];
}

function SeatPicker({resetReadyToBookState, seatCount, setSeatCount, selectedSeats, setSelectedSeats, occupiedSeats}: SeatPickerProps) {

  const [seats, setSeats] = useState<Seat[]>([]);

  useEffect(() => {
    const fetchSeatData = async () => {
      const seatData = await getAllSeats();
      setSeats(seatData);
    };
    fetchSeatData();
  }, []);


  const handleSeatSelection = (seat: Seat) => {
    if (occupiedSeats.includes(seat.id)) return;

    setSelectedSeats((prev: string[]) => 
      prev.includes(seat.id) 
      ? prev.filter((id) => id !== seat.id) 
      : [...prev, seat.id]
    );
    
    if(seatCount === 0) {
      resetReadyToBookState();
    };
  };


  useEffect(() => {
    setSeatCount(selectedSeats.length);
  }, [selectedSeats, setSeatCount]);


  return(
    <div className='container'>
      <div className='screen'></div>
      {Array.from({length: 6}).map((_, rowIndex) => (
        <div key={rowIndex} className='row'>
          {seats
            .filter((seat) => seat.row === String.fromCharCode(65 + rowIndex))
            .map((seat) => (
              <div key={seat.id} 
                className={`seat ${occupiedSeats.includes(seat.id) 
                  ? 'occupied' : selectedSeats.includes(seat.id) 
                  ? 'selected' : ''
                }`}
                onClick={() => handleSeatSelection(seat)}
              ></div>
          ))}
        </div>
        ))}
    </div>
  );
}

export default SeatPicker;