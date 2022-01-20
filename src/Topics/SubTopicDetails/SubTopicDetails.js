import React from 'react';
import topicData from "../Topics.json";
import {useParams} from 'react-router-dom';
import { Card } from 'react-bootstrap';

function SubTopicDetails() {
    const value=useParams();
    console.log("params",value);

    const topicValue=topicData.Topics.find((data)=>data.topic_id === value.topic_id);
    console.log("topicValue",topicValue);

    const topicDetails=topicValue.sub_topic.find((result)=>result.sub_topic_id === value.sub_topic_id);
    console.log("subvalue",topicDetails);
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={topicDetails.sub_image2} />
        <Card.Body>
          <Card.Title>{topicDetails.sub_name}</Card.Title>
          <Card.Text>
            {topicDetails.sub_description}
          </Card.Text>
          
        </Card.Body>
      </Card>
        </div>
    )
}

export default SubTopicDetails
