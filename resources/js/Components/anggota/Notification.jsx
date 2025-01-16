import { useState } from "react";
const Notification = ({ success, error }) => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
    };

    // Don't render the notification if it's not visible
    if (!isVisible) return null;
    if (success) {
        return (
            <div role="alert" className="alert shadow-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info h-6 w-6 shrink-0"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <div>
                    <h3 className="font-bold">New message!</h3>
                    <div className="text-xs">{success}</div>
                </div>
                <button onClick={handleClose} className="btn btn-sm btn-error">
                    Close
                </button>
            </div>
        );
    } else if (error) {
        return (
            <div role="alert" className="alert shadow-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info h-6 w-6 shrink-0"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <div>
                    <h3 className="font-bold">New message!</h3>
                    <div className="text-xs">{error}</div>
                </div>
                <button onClick={handleClose} className="btn btn-sm btn-error">
                    Close
                </button>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Notification;
