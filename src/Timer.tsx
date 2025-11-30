// MyTimer.tsx
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
    // ----------------------------------------------------
    // Step 1: Initialize the visibility state
    const [isVisible, setIsVisible] = useState(true);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: (TimerComplete: any) => console.warn('onExpire called'), interval: 20 });

    const toggleVisibility = () => {
        // This sets 'isVisible' to the opposite of its current value (!prev)
        // If it was true, it becomes false. If it was false, it becomes true.
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
                    <div className="text-[100px]">
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

function TimerComplete(){
    return(
        <div>
            Timer Complete
        </div>
    )
}