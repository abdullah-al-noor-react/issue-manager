import { useState } from 'react';

import { Form, Button,Row,Col} from 'react-bootstrap';

const AddIssue = ({addFromData}) => {

    const formObject = {
        title:'',
        sub_title:'',
        assigned_to:'',
        start_date:'',
        end_date:'',
        priority:'',
        status:'',
        completed_percentage:''
    }

    const [formData,setFormData] = useState(formObject)
    const [validated, setValidated] = useState(false);


    function handleChange(e){
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
  
      function submitForm(e){
        e.preventDefault()
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }
    
        // setValidated(true);
        addFromData(formData)
       
        // console.log(formData);
    
     
      }

    // console.log(formData);

    const  {
        title,
        sub_title,
        assigned_to,
        start_date,
        end_date,
        priority,
        status,
        completed_percentage
    } = formData

    return (
        <>
        <Form onSubmit={submitForm} noValidate validated={validated} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <b>Title :</b>
                </Form.Label>
                <Form.Control required type="text" placeholder="Enter Title"
                name="title"
                value={title}
                onChange={handleChange}
                />

               
            </Form.Group>

{/* 
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <b>Sub Title :</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Sub Title"
                name="sub_title"
                value={sub_title}
                onChange={handleChange}
                />

               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <b>Assigned To :</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Sub Title"
                name="assigned_to"
                value={assigned_to}
                onChange={handleChange}
                />

               
            </Form.Group>
            <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <b>Start :</b>
                        </Form.Label>
                        <Form.Control type="date" placeholder="Enter Sub Title"
                        name="start_date"
                        value={start_date}
                        onChange={handleChange}
                        />

                       
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <b>End :</b>
                        </Form.Label>
                        <Form.Control type="date" placeholder="Enter Sub Title"
                        name="end_date"
                        value={end_date}
                        onChange={handleChange}
                        />

                       
                    </Form.Group>
                
                </Col>
            </Row>

           
               <Row>
               <Form.Label>
                   <b>Priority :</b>
               </Form.Label>
               <Form.Check  
                   inline type="radio"  label="High"
                    name="priority" value="high"
                    checked={priority === 'high'}
                    onChange={handleChange}
                   
                />
                <Form.Check  
                   inline type="radio" label="Medium"
                    name="priority" value="medium"
                    checked={priority === 'medium'}
                    onChange={handleChange}
                    
                />
                <Form.Check  
                   inline type="radio"  label="Low"
                    name="priority" value="low"
                    checked={priority === 'low'}
                    onChange={handleChange}
                    
                />

               </Row>
               

               <Row>
               <Form.Label><b>Status :</b></Form.Label>
               <Form.Check  
                   inline type="radio"  label="New"
                    name="status" value="new"
                    checked={status === 'new'}
                    onChange={handleChange}
                   
                />
                <Form.Check  
                   inline type="radio" label="In Progress"
                    name="status" value="inprogress"
                    checked={status === 'inprogress'}
                    onChange={handleChange}
                    
                />
                <Form.Check  
                   inline type="radio"  label="Completed"
                    name="status" value="completed"
                    checked={status === 'completed'}
                    onChange={handleChange}
                    
                />

               </Row>


               <Row>

               <Form.Label>
                   <b>Range :</b>
               </Form.Label>
                   <Form.Range 
                   
                   name="completed_percentage" value={completed_percentage}
                   
                   onChange={handleChange}
                   />
               </Row>
            
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    )
}

export default AddIssue