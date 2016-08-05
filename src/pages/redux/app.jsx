import React, {
    Component,
    PropTypes
} from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';

import Input from './input';


import * as TodoActions from './action';

class App extends Component {
    render() {
        return (<div>
            <Input onSubmit={this.props.actions.addTodo} />
            <ul>
                {
                    this.props.todos.map(function(todo, index) {
                        return (<li key={index}>{todo}</li>);
                    })
                }
            </ul>
        </div>)
    }
}


function mapStateToProps(state) {
    return {
        todos: state.add || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}


App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)