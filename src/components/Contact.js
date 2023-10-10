import { Fragment, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

const Contact = () => {


    // USESTATE
    const [data, setdata] = useState(

        {
            username: "",
            email: "",
            subject: "",
            message: "",
        }
    );

    // DE-STRUCTURING FOR THE OBJECT PROPERTIES
    const { username, email, subject, message } = data

    // ONCHANGE EVENT FOR THE INPUT VALUES
    const onchangeHandler = (e) => {
        setdata({ ...data, [e.target.name]: [e.target.value] })
    };


    // Onsubmit event handler for the form submit
    const onsubmitHandler = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (

        <Fragment>
            <div>
                <Container>
                    <h1 className="text-center  my-5">Contact  <p className="contact py-2" style={{ fontSize: "15px" }}></p></h1>
                    <Row>
                        <Col xs={12} md={6} className="mt-lg-5 pt-lg-3">
                            <h6> <i class="bi bi-person-fill fs-2"></i> <span className="fw-bold fs-6"> Name :</span> pavankumar</h6><br />
                            <h6> <i class="bi bi-geo-alt-fill fs-2"></i> <span className="fw-bold fs-6"> Address :</span>   Medhipatnam , Hyderabad</h6><br />
                            <h6> <i class="bi bi-envelope-fill fs-2"></i> <span className="fw-bold fs-6"> Email :</span>  rebbaspavan8639@gmail.com</h6><br />
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
        </Fragment>
    )
};


export default Contact;