import React from 'react';
import topicData from "../Topics.json";
import { useParams,Link } from 'react-router-dom';
import { Card,Row,Col,Button } from 'react-bootstrap';
import './SubTopic.css'

function SubTopic() {
    const topic=useParams();
    console.log("Params",topic);

        const subtopicdata=topicData.Topics.find((val)=>val.topic_id===topic.topic_id);
        console.log("Sub",subtopicdata);
    return (
    
        <div>
        <Row xs={1} md={2} className="g-4">
        {
            subtopicdata.sub_topic.map((val)=>(
<Col key={val.sub_topic_id}>
  <Card className="subCard">
    <Card.Img className="pic" variant="top" src={val.sub_image1} />
    <Card.Body>
      <Card.Title>Topic Name:  {topic.topic_name}</Card.Title>
      <Card.Text>Catagory:  {val.sub_name}</Card.Text>
      

      <Button variant="primary" className="btn"><Link to={`/details/${topic.topic_id}/${val.sub_topic_id}`}>View Details</Link></Button>
    </Card.Body>
  </Card>
</Col>

        ))
        }
        </Row>
    
        </div>
    )
}

export default SubTopic
