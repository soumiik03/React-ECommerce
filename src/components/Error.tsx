import { isRouteErrorResponse, useRouteError } from 'react-router-dom'


export default function Error() {
    const error=useRouteError();
    console.log(error)
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>
                {isRouteErrorResponse(error)
                    ? `${error.status} - ${error.statusText}`
                    : 'An unexpected error occurred.'}
            </h2>
        </div>
    )
}
