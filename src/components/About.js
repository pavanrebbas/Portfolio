import { Fragment } from "react"
import { Container, Row, Col, Image,ProgressBar } from "react-bootstrap"

const About = () => {

    return (

        <Fragment>
            <div>
                <Container>
                    <Row className="py-4">
                        <h1 className="text-center  my-5">About me  <p className="title py-2" style={{ fontSize: "15px" }}></p></h1>

                        <Col xs={12} lg={4} md={12} className=" offset-lg-1" >
                            <Image src="https://pavanporfolio.000webhostapp.com/MY%20PORTFOLIO/images/About%20image-1.jpg" className="rounded-3" width={"100%"} />
                        </Col>
                        <Col xs={12} lg={6} md={12} className="offset-lg-0">
                            <h4 className="mt-lg-4 py-2 fw-bold">I'm Pavan Kumar and I'm a Frontend Developer|</h4>
                            <p>Seeking an entry level opportunity with an esteemed organisation where I can use my skills and improve learning in the field of work. Ability to handle new technologies.</p>
                            <h4 className="mt-lg-4 py-2 fw-bold">Why Work With Me</h4>
                            <p>I am an excellent communicator and I enjoy investing the time needed to fully understand the customer's problem</p>
                        </Col>
                    </Row>
                </Container>




                <Container className="my-5 py-3">
                    <h1 className="text-center  my-5">My Skills  <p className="skills py-2" style={{ fontSize: "15px" }}></p></h1>
                    <Row>
                        <Col xs={12} md={6} className="offset-md-3">

                            <div> <span>HTML-5</span> <ProgressBar striped variant="success" className="my-3" now={90} /></div>
                            <div> <span>CSS-3</span> <ProgressBar striped variant="info" className="my-3" now={80} /></div>
                            <div> <span>Bootstrap</span> <ProgressBar striped variant="warning" className="my-3" now={85} /></div>
                            <div> <span>Javascript</span> <ProgressBar striped variant="danger" className="my-3" now={75} /></div>
                            <div> <span>React Js</span> <ProgressBar striped variant="primary" className="my-3" now={80} /></div>
                            <div> <span>Redux</span> <ProgressBar striped variant="secondary" className="my-3" now={60} /></div>
                            <div> <span>Github</span> <ProgressBar striped variant="terinary" className="my-3" now={50} /></div>
                            {/* <h1>Html-5</h1>
                            <h1>Css-3</h1>
                            <h1>Bootstrap</h1>
                            <h1>Javascript</h1>
                            <h1>React Js</h1>
                            <h1>Redux</h1>
                            <h1>Github</h1> */}
                        </Col>
                    </Row>
                </Container>

            </div>
        </Fragment>
    )
};


export default About;