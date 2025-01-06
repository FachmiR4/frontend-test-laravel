import React, { useState, useEffect } from "react";

const Notification = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (window.successMessage) {
            setSuccessMessage(window.successMessage);
        }
        if (window.errorMessage) {
            setErrorMessage(window.errorMessage);
        }
    }, []);
    console.log(successMessage);
    return (
        <>
            {successMessage && (
                <div className="alert alert-success">
                    <ul>
                        <li>{successMessage}</li>
                    </ul>
                </div>
            )}
            {errorMessage && (
                <div className="alert alert-danger">
                    <ul>
                        <li>{errorMessage}</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Notification;
