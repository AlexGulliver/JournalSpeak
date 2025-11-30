// Home Page Component.tsx

import { useState } from 'react';
import Journal from './Journal';
import StartSessionButton from './StartSessionButton';

export default function Home() {
    const [startSession, setStartSession] = useState(false);

    const handleStartSession = () => {
        setStartSession(true);    };

    return (
        <div className="flex flex-col items-center p-4">
            {startSession ? (
                <Journal />
            ) : (
                <StartSessionButton onStart={handleStartSession} />
            )}
        </div>
    );
}
