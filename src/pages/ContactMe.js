import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';


const ContactMe = () => {
  const formInitialInputs = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formInputs, setFormInputs] = useState(formInitialInputs);
  const [buttonText, setButtonText] = useState('send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormInputs({
      ...formInputs,
      [category]: value
    })

    // const handleSubmit = () => {

    // }

  }
    return (
      <section className='contactMe'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              {/* <img src={} alt="Lets Connect" /> */}
            </Col>
            <Col md={6}>
              <h2>Lets Connect!</h2>
              {/* onSubmit={handleSubmit} add handleSubmit into form inline */}
              <form>
                <Row>
                  <Col sm={6} className='px-1'>
                    <input type='text' value={formInputs.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                  </Col>
                  <Col sm={6} className='px-1'>
                  <input type='text' value={formInputs.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                  </Col>
                  <Col sm={6} className='px-1'>
                  <input type='email' value={formInputs.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                  </Col>
                  <Col sm={6} className='px-1'>
                  <input type='tel' value={formInputs.phone} placeholder='Phone No.' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                  </Col>
                  <Col>
                  <textarea row='6' value={formInputs.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                  <button type="submit"> \<span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                    <p className={status.success === false? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
  

export default ContactMe