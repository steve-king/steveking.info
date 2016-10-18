var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Panel(props){

    // if( props.isLoading ){
	// 	return (
	//
	// 	);
	// }

    return (
        <section className={'panel panel--'+props.size}>
            {props.isLoading ?
                <div className='panel__inner'>
                    <header className='panel__header'>
                        <h1 className='panel__titleText'>Loading...</h1>
                    </header>
                </div>
            :
                <div className='panel__inner'>
                    <header className='panel__header'>
                        <h1 className='panel__titleText'>{props.title}</h1>
                        {props.canClose && <Link to={props.parentPath} className='icon icon--close'>Close</Link>}
                    </header>
                    <div className='panel__content'>
                        {props.children}
                    </div>
                </div>
            }
        </section>
    );
};

module.exports = Panel;
