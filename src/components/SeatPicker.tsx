import { useEffect, useState } from 'react';
import './SeatPicker.scss';
import { Seat } from '../models/Seat';
import { getAllSeats } from '../services/api';

function SeatPicker({seatCount, setSeatCount}){

  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  useEffect(() => {
    const fetchSeatData = async () => {
      const seatData = await getAllSeats();
      setSeats(seatData);
    };
    fetchSeatData();
  }, []);

  const handleSeatSelection = (seat: Seat) => {
    if (seat.booked) return;

    setSelectedSeats((prev) => 
      prev.includes(seat.id) 
        ? prev.filter((id) => id !== seat.id) 
        : [...prev, seat.id]
    );
  };

  return(
    <div className="container">
      <div className="screen"></div>
      {Array.from({length: 6}).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {seats
            .filter((seat) => seat.row === String.fromCharCode(65 + rowIndex))
            .map((seat) => (
              <div key={seat.id} 
                className={`seat ${seat.booked 
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