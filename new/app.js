var React = require('react');

var fetchUsers = () => {
    setTimeout() => {
        cb([{name: 'Ryan'}, {name: 'Marc'}, {name: 'Mark'}])
    }
}

var App = React.createClass({

    render(){
        if (!this.state.loaded)
            return null;
        return (
            <h1> hello</h1>
        )
    }
})