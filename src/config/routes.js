var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var PostContainer = require('../components/PostContainer');
var PostsListContainer = require('../components/PostsListContainer');
var Gallery = require('../components/Gallery');

var indexPageSlug = 'sample-page';

var routes = (
	<Router history={hashHistory}>
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
