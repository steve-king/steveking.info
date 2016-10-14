var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
	render: function(){
		return (
			<div className='main-container'>
                <header>
                    SK
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <small>Built with React</small>
                </footer>
			</div>
		);
	}
});

module.exports = Main;
