var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
	render: function(){
		return (
			<div className='appContainer'>
                <header className='appHeader'>
					<div className='appHeader__inner'>
	                    <Link to='/' className='appHeader__title'>Stephen King</Link>
	                    <nav className='appHeader__nav'>
	                        <ul>
	                            {/* <li><Link to='/' className='icon icon--home icon--xlarge'>Home</Link></li> */}
								<li>
									<Link to='/'>
										<span className='appHeader__nav__icon icon icon--home icon--xlarge'></span>
										<span className='appHeader__nav__text'>Home</span>
									</Link>
								</li>

	                            <li>
									<Link to='/projects'>
										<span className='appHeader__nav__icon icon icon--folder icon--xlarge'></span>
										<span className='appHeader__nav__text'>Projects</span>
									</Link>
								</li>
	                        </ul>
	                    </nav>
					</div>
                </header>
                <main className='appMain'>
                    {this.props.children}
                </main>
                {/* <footer className='appFooter'>
                    <small>Built with React</small>
                </footer> */}
			</div>
		);
	}
});

module.exports = Main;
