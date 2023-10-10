import { Fragment } from "react"
import { Container, Row, Col, Card, CardBody, Image, CardTitle } from "react-bootstrap"

const Project = () => {

    return (

        <Fragment>
            <div >
                <Container className="my-4">
                    <h1 className="text-center  my-5">My Projects  <p className="project py-2" style={{ fontSize: "15px" }}></p></h1>
                    <Row className="my-2">
                        <Col xs={6} sm={6} md={4}>
                            <Card>
                                <CardBody>
                                    <Image src="https://themewagon.com/wp-content/uploads/2021/06/3.gif" width={"100%"} />
                                    <CardTitle className="pt-3">
                                        <small> <span className="fw-bold">Project :</span> Login and Signup form by using Html,css,bootstrap and React Js</small>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs={6} sm={6} md={4}>
                            <Card>
                                <CardBody>
                                    <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-templates.jpg" width={"100%"} style={{ objectFit: "contain" }} height={"270px"} />
                                    <CardTitle className="">
                                        <small> <span className="fw-bold">Project :</span> Table data  Fetch (APi) by using Html,css, bootstrap and React Js</small>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs={6} sm={6} md={4}>
                            <Card>
                                <CardBody>
                                    <Image src="https://themewagon.com/wp-content/uploads/2021/06/3.gif" width={"100%"} />
                                    <CardTitle className="pt-3">
                                        <small> <span className="fw-bold">Project :</span> Login and Signup form by using Html,css and React Js</small>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="my-4">
                        <Col xs={6} sm={6} md={4}>
                            <Card>
                                <CardBody>
                                    <Image src="https://themewagon.com/wp-content/uploads/2021/06/3.gif" width={"100%"} />
                                    <CardTitle className="pt-3">
                                        <small> <span className="fw-bold">Project :</span> Login and Signup form by using Html,css and React Js</small>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs={6} sm={6} md={4}>
                            <Card>
                                <CardBody>
                                    <Image src="https://themewagon.com/wp-content/uploads/2021/06/3.gif" width={"100%"} />
                                    <CardTitle className="pt-3">
                                        <small> <span className="fw-bold">Project :</span> Login and Signup form by using Html,css and React Js</small>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs={6} sm={6} md={4}>
                            <Card>
                                <CardBody>
                                    <Image src="https://themewagon.com/wp-content/uploads/2021/06/3.gif" width={"100%"} />
                                    <CardTitle className="pt-3">
                                        <small> <span className="fw-bold">Project :</span> Login and Signup form by using Html,css and React Js</small>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
};


export default Project;