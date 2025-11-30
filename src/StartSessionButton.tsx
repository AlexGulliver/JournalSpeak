// StartSessionButton.tsx

// Define the expected props (the function passed from Home)
interface StartButtonProps {
    onStart: () => void;
}

export default function StartSessionButton({ onStart }: StartButtonProps) {
    return (
        <button
            onClick={onStart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Start Session
        </button>
    );
}