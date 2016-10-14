var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Panel(props){

    return (
        <div className="panel">
            {props.canClose && <Link to={props.parentPath}>X</Link>}
            {props.children}
        </div>
    );
};

module.exports = Panel;
