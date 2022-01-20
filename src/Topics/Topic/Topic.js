import React from 'react';
import { Link } from 'react-router-dom';
import topicData from "../Topics.json";

function Topic() {
    return (
        <div>
        <ul>
        {
            topicData.Topics.map((value)=>(
                <li key={value.topic_id}><Link to={`/subtopics/${value.topic_id}`}>{value.topic_name}</Link></li>
            ))
        }
    </ul>
    
        </div>
    )
}

export default Topic
