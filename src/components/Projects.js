import { Fragment } from "react"
import { Container, Row, Col, Card, CardBody, Image, CardTitle, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = () => {

    // MY PROJECTS ARRAY AND OBJECTS
    const projects = [
        {
            id: 1,
            image: "https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Online-Food-Delivery-Apps.png.webp",
            text: "project",
            projectname: "Food Delivery App by using Html,css,bootstrap , Javascript, React Js and Redux",
            github_Link: "https://github.com/pavanrebbas/react-js.git"
        },
        {
            id: 2,
            image: "https://themewagon.com/wp-content/uploads/2021/06/3.gif",
            text: "project",
            projectname: "Login and Signup form by using Html,css,bootstrap and React Js",
            github_Link: "https://github.com/pavanrebbas/Login_and_Signup_Form.git"
        },
        {
            id: 3,
            image: "https://mobirise.com/bootstrap-gallery/assets/images/css-image-gallery-600x600.jpg",
            text: "project",
            projectname: "Image Gallery search components (API) by using Html,css,bootstrap and React Js",
            github_Link: "https://github.com/pavanrebbas/Image_Gallery.git"
        },

        {
            id: 4,
            image: "https://woobewoo.com/wp-content/uploads/2022/02/data_table_quick_view.png",
            text: "project",
            projectname: "Table data of (API) by using Html,css,bootstrap and React Js",
            github_Link: "https://github.com/pavanrebbas/Table.git"
        },

        {
            id: 5,
            image: "https://www.codingnepalweb.com/wp-content/uploads/2021/08/Build-Weather-App-in-JavaScript.jpg",
            text: "project",
            projectname: "wheather app using React Js",
            github_Link: "https://github.com/pavanrebbas/wheather_app.git"
        },
    ]

    return (

        <Fragment>
            <div >
                <Container className="my-4">
                    <h1 className="text-center  my-5">My Projects  <p className="project py-2" style={{ fontSize: "15px" }}></p></h1>
                    <Row className="my-2">
                        {
                            projects.map((project) => {
                                return (
                                    <Col xs={6} md={4} className="my-3">
                                        <Card className="h-100">
                                            <CardBody>
                                                <Image src={project.image} width={"100%"} />
                                                <CardText className="pt-3">
                                                    <small> <span className="fw-bold">{project.text} :</span> {project.projectname}</small><br />
                                                    <Link to={project.github_Link} target="_blank">Click here : Github Link</Link>
                                                </CardText>
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


export default Project;