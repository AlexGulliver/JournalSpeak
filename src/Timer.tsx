// Timer Component 
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleTimerExpire = () => {
        console.warn("Timer has completed.");
      
        setIsVisible(true);
      
        const timer = document.getElementById("timer");
        timer.classList.add("timer-pulse");
      };
      
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: handleTimerExpire, interval: 20 });

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <div className='text-center p-4'>
            <button 
                onClick={toggleVisibility}
                className="ml-4 p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
                {isVisible ? 'Hide Timer' : 'Show Timer'}
            </button>
            {isVisible && (
                <>
                    <div id="timer" className="text-[100px]">
                        <span>
                            {minutes.toString().padStart(2, '0')}
                        </span>
                        :
                        <span>
                            {seconds.toString().padStart(2, '0')}
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}


