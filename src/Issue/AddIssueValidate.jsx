import { useState } from 'react';

import { Form, Button,Row,Col} from 'react-bootstrap';

const AddIssueValidate = () => {

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
    const errorObject = {
        e_title:'',
        e_sub_title:'',
        e_assigned_to:'',
        e_start_date:'',
        e_end_date:'',
        e_priority:'',
        e_status:'',
        e_completed_percentage:''
    }
    const [formData,setFormData] = useState(formObject)
    const [errorInfo, setErrorInfo] = useState(errorObject)

    function handleChange(e){
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const  setFormError = () => {
        let obj = {};
        for (const [key, value] of Object.entries(formData)) {
          // console.log(`${key}: ${value}`);
          if(value === ""){
           let keyArr =  key.split("_");
           console.log(keyArr);
           let key1 = keyArr[0] !== 'undefined' && keyArr[0]   ? keyArr[0] : '' ;
           let key2 = keyArr[1] !== 'undefined' && keyArr[1]   ? keyArr[1] : '' ;
        //    let key3 = keyArr[3] !== 'undefined' && keyArr[3]   ? keyArr[3] : '' ;
    
            obj['e'+key] =`${key1 } ${key2} is required..`;
          }
        }
        console.log(obj);
            setErrorInfo({
              ...obj,
            })
      }
      function submitForm(e){
        e.preventDefault()
        // console.log(e.target);
       
        console.log(formData);
        setFormError()
        console.log(errorInfo);
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
    const  {
        e_title,
        e_sub_title,
        e_assigned_to,
        e_start_date,
        e_end_date,
        e_priority,
        e_status,
        e_completed_percentage
    } = errorInfo

    return (
        <>
        <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <b>Title :</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Title"
                name="title"
                value={title}
                onChange={handleChange}
                />
                {e_title &&   <Form.Text className="text-danger">
               {e_title}
                </Form.Text>

                }

              
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

             {e_sub_title !== '' &&   <Form.Text className="text-danger">
               {e_sub_title}
                </Form.Text>}
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
  {e_assigned_to &&   <Form.Text className="text-danger">
               {e_assigned_to}
                </Form.Text>}
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
  {e_start_date &&   <Form.Text className="text-danger">
               {e_start_date}
                </Form.Text>}
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

{e_end_date &&   <Form.Text className="text-danger">
               {e_end_date}
                </Form.Text>}

                        
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

{e_priority &&   <Form.Text className="text-danger">
               {e_priority}
                </Form.Text>}

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
                {e_status &&   <Form.Text className="text-danger">
               {e_status}
                </Form.Text>}

               </Row>


               <Row>

               <Form.Label>
                   <b>Range :</b>
               </Form.Label>
                   <Form.Range 
                   
                   name="completed_percentage" value={completed_percentage}
                   
                   onChange={handleChange}
                   />

{e_completed_percentage &&   <Form.Text className="text-danger">
               {e_completed_percentage}
                </Form.Text>} 

               </Row>
            
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    )
}

export default AddIssue