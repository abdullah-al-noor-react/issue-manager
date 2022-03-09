import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';


import Header from './Layouts/Header'
import AddIssue from './Issue/AddIssue'
import IssueTable from './Issue/IssueTable'



function App() {
const [appData, setAppData] = useState({data:[]})

  function addFromData(newObj){
    // console.log(typeof appData);
    // console.log(appData.data);
    setAppData({
      ...appData,
      data:[newObj,...appData.data]
    })
    // console.log(data);
    // console.log(appData);
  }

  return (
    < >
     <Header/>
     <Container >
       <Row>
        <Col className='my-5'>
        <AddIssue  addFromData={addFromData} />
        </Col>
       </Row>
       <Row className='my-5'>
        <Col >
        <IssueTable  appData={appData} />
        </Col>
       </Row>
   
     </Container>
    </>
  )
}

export default App
