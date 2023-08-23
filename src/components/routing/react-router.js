import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ShowLocationInfoWithRouter from './nav-info';
import PageNotFound from '../page-not-found/page-not-found';
import ListsBoard from '../lists-board/lists-board';
import TaskDescription from '../task-description/task-description';

/* const Home = () => <div></div>
const About = () => <div>
                        About
                        <ShowLocationInfoWithRouter />
                        <Link to="/blog-posts">BlogPosts</Link>
                    </div>
const Post = () => <div>Post</div>                    
const BlogPosts = (props) => <div>
                            BlogPosts
                            <Route path={`${props.match.url}/post`} component={Post} />
                        </div> */

class ReactRouter extends React.Component {
    /* constructor(props) {
        super(props);
        console.log(this.props.data);
    } */
    render() {
        const { data } = this.props;
        return (
            <Router>
                {/* <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog-posts">BlogPosts</Link></li>
                    </ul> */}

                    <Switch>
                        {/* <Route path="/" exact component={ListsBoard} />  */}
                        <Route path="/" exact render={(dataMock) => <ListsBoard data={data} />} />
                        <Route path="/tasks" component={TaskDescription} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                {/* </div> */}
            </Router>
            
        );
    }
}

export default ReactRouter;