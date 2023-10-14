import { Fragment, useState } from "react"
import { Container, Row, Col, Image, ProgressBar, Card, CardBody, CardTitle } from "react-bootstrap"

const Home = () => {

    // USESTATE
    const [data, setdata] = useState({

        username: "",
        email: "",
        subject: "",
        message: ""
    })


    //  DE-STRUCTURING THE OBJECT VALUSE
    const { username, email, subject, message } = data


    // ONCHANGE EVENT OF INPUT FILEDS
    const onchangeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    // ONSUBMIT EVENT FOR FORM SUBMIT
    const onsubmitHandler = (e) => {
        e.preventDefault();
        /*  { !username.length == "" && !email == "" } */
        console.log(data)
    }


    // MY SKILLS ARRAY AND OBJECTS
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
            <div className="background-image">
                <Container >
                    <Row>
                        <Col className="background-text" xs={12} md={12}>
                            <h4 className="text-light">Hello, This is</h4> <br />
                            <h1 className="text-light">Rebbas Pavan kumar</h1> <br />
                            <h5 className="text-light">And I'm a Frontend Developer|</h5>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/***************** ABOUT ME *****************/}
            <div className="about">
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
            </div>

            {/******************** MY SKILLS ********************/}
            <Container className="my-5 py-3 myskills-container">
                <h1 className="text-center  my-5">My Skills  <p className="skills py-2" style={{ fontSize: "15px" }}></p></h1>
                <Row className="text-center all" >
                    {
                        myskills.map((skill) => (
                            < Col xs={6} md={4} className="my-3">
                                <Card className="card-1">
                                    <CardBody>
                                        <CardTitle>
                                            <h3>{skill.name}</h3>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>


            {/************************** CONTACT **************************/}
            <div className="contact-us">
                <Container className="py-4">
                    <h1 className="text-center  my-5">Contact  <p className="contact py-2" style={{ fontSize: "15px" }}></p></h1>
                    <Row>
                        <Col xs={12} md={6} className="mt-lg-5 pt-lg-3 my-5">
                            <h6> <i class="bi bi-person-fill fs-2"> </i> <span className="fw-bold fs-6"> Name :</span> pavankumar</h6><br />
                            <h6> <i class="bi bi-geo-alt-fill fs-2"> </i> <span className="fw-bold fs-6"> Address :</span>   Medhipatnam , Hyderabad</h6><br />
                            <h6> <i class="bi bi-envelope-fill fs-2">  </i> <span className="fw-bold fs-6"> Email :</span>  rebbaspavan8639@gmail.com</h6><br />
                            <div className="">
                                <i class="bi bi-instagram fs-4 mx-2"></i>
                                <i class="bi bi-facebook fs-4 mx-2"></i>
                                <i class="bi bi-linkedin fs-4 mx-2"></i>
                            </div>
                        </Col>

                        <Col xs={12} md={6} >
                            <form onSubmit={onsubmitHandler}>
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={onchangeHandler} />
                                {username.length == "" ? <p className="text-danger">Please enter username</p> : username.length <= 5 ? <p className="text-danger">username should be more than 5 characters</p> : ""}
                                <br />
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={email} onChange={onchangeHandler} />
                                {email == "" ? <p className="text-danger">Please enter email </p> : ""}
                                <br />
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" name="message" value={message} onChange={onchangeHandler} /><br />
                                <label className="form-label">Message</label>
                                <input type="text" className="form-control" name="subject" value={subject} onChange={onchangeHandler} /> <br />
                                <button type="submit" className="btn btn-primary">submit</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment >
    )
};


export default Home;