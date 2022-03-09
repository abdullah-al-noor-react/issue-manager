import {Table,ProgressBar} from 'react-bootstrap';

const IssueTable = ({appData:{data}}) => {
    // const {data} = props.appData
    console.log(data);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Completed Percentage</th>
                </tr>
            </thead>
            <tbody>
                {data ? 
                
                    data.map((dataItem,key) => {
                            return (
                                <tr key={key}>
                                    <td>{key +1 }</td>
                                    <td>{dataItem.title}</td>
                                    <td>{dataItem.priority}</td>
                                    <td>{dataItem.status}
                                   
                                    </td>
                                    <td>
                                          <ProgressBar animated  now={Number(dataItem.completed_percentage)} />
                                    
                                        </td>
                                </tr>
                            )
                    })
                    :
                      <tr colSpan={5}>
                          <td className='text-danger'>
                              No Issue Added..
                          </td>
                      </tr>
                }
            
            </tbody>
</Table>
    )
}

export default IssueTable