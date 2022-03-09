import {Table} from 'react-bootstrap';

const IssueTable = ({appData:{data}}) => {
    // const {data} = props.appData
    // console.log(props.appData.data);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Status</th>
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
                                    <td>{dataItem.status}</td>
                                </tr>
                            )
                    })
                    :
                      <tr colSpan={4}>
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