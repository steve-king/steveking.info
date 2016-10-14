import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../components/Main';
import PostContainer from '../components/PostContainer';
import PostsListContainer from '../components/PostsListContainer';
import Gallery from '../components/Gallery';

var indexPageSlug = 'about';

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={PostContainer} postType="pages" postSlug={indexPageSlug} />

            <Route path="projects" component={PostsListContainer} title="Projects" postType="posts">
                <Route path=":slug" component={PostContainer} postType="posts" panelCanClose={true} parentPath="projects">
                    <Route path="gallery" component={Gallery} panelCanClose={true} />
                </Route>
            </Route>

		</Route>
	</Router>
);

module.exports = routes;
