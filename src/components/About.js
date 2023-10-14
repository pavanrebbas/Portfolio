import { Fragment } from "react"
import { Container, Row, Col, Image, Card, CardBody, CardImg } from "react-bootstrap"

const About = () => {

    // MYSKILLS ARRAY AND OBJECTS
    const myskills = [
        {
            name: "HTML-5"
        },
        {
            name: "CSS-3"
        },
        {
            name: "Bootstarp"
        },
        {
            name: "Javascript"
        },
        {
            name: "React Js"
        },
        {
            name: "Redux"
        },
        {
            name: "Github"
        },
    ]

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

                {/***************** MY SKILLS *****************/}
                <Container className="my-5 py-3">
                    <h1 className="text-center  my-5">My Skills  <p className="skills py-2" style={{ fontSize: "15px" }}></p></h1>
                    <Row>
                        {
                            myskills.map((skill) => {
                                return (
                                    <Col xs={6} md={4} className="my-3 text-center">
                                        <Card className="card-1">
                                            <CardBody>
                                                <h3>{skill.name}</h3>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>

            </div>
        </Fragment>
    )
};


export default About;