import { Fragment } from "react"
import { Container } from "react-bootstrap"
import { useRouteError } from "react-router-dom";

const Error = () => {

    const Error = useRouteError(); // THIS USESE FOR ERROR HANDLING
    // console.log(Error)

    return (

        <Fragment>
            <div>
                <Container className="my-5">
                    <h2>{Error.status} {Error.statusText}</h2>
                </Container>
            </div>
        </Fragment>
    )
};


export default Error;