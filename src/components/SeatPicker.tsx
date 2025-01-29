import { useEffect, useState } from 'react';
import './SeatPicker.scss';
import { Seat } from '../models/Seat';
import { getAllSeats } from '../services/api';

interface SeatPickerProps {
  setSeatCount: (selectedCount: number) => void;
  selectedSeats: string[];
  setSelectedSeats: (seats: string[] | ((prev: string[]) => string[])) => void;
}

function SeatPicker({setSeatCount, selectedSeats, setSelectedSeats}: SeatPickerProps) {

  // Flytta upp till App och ändra så den hämtar från movie?
  // 1. denna 'seats' är samma som den längre ner i renderingen...
  const [seats, setSeats] = useState<Seat[]>([]);

  // 1. setSeats samma som const ovanför
  useEffect(() => {
    const fetchSeatData = async () => {
      const seatData = await getAllSeats();
      setSeats(seatData);
    };
    fetchSeatData();
  }, []);

  const handleSeatSelection = (seat: Seat) => {
    if (seat.booked) return;

    setSelectedSeats((prev: string[]) => 
      prev.includes(seat.id) 
      ? prev.filter((id) => id !== seat.id) 
      : [...prev, seat.id]
    );
  };

  useEffect(() => {
    setSeatCount(selectedSeats.length);
  }, [selectedSeats, setSeatCount]);

  return(
    <div className='container'>
      <div className='screen'></div>
      {Array.from({length: 6}).map((_, rowIndex) => (
        <div key={rowIndex} className='row'>
          {/* 1. ...samma som denna 'seats' */}
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