/* eslint-disable react/prop-types */

const ErrorMessage = ({ error }) => {
    return (
        <small className="text-red-400"> 
            {error} is required
        </small>
    )
}

export default ErrorMessage
