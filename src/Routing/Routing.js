import React,{lazy,Suspense} from 'react';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';


import Home from '../Components/Home/Home'
import PNF from '../Components/PNF/PNF'
import Header from '../Header/Header';
import SubTopic from '../Topics/SubTopic/SubTopic';
import SubTopicDetails from '../Topics/SubTopicDetails/SubTopicDetails';


const Topic=lazy(()=>import('../Topics/Topic/Topic'));

function Routing() {
    return (
        <div>
        <Router>
        <Header/>
        <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
    
        <Route path="/topics" element={<Topic/>}></Route>
        <Route path="/subtopics/:topic_id" element={<SubTopic/>}></Route>
        <Route path="/details/:topic_id/:sub_topic_id" element={<SubTopicDetails/>}></Route>

        <Route path="*" element={<PNF/>}></Route>
        </Routes>
        </Suspense>
        </Router>
        </div>
    )
}

export default Routing
