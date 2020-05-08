import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addTodos } from '../redux/action'
import { IRootReduxStats } from '../types';

export interface IHomeStatsProps extends RouteComponentProps {
    todoList: string
    addTodos(todoList: string): void
}

class Home extends React.Component<IHomeStatsProps, {}> {
    handleClick = () => {
        this.props.addTodos('done')
    }
    public render() {
        return (
            <Jumbotron>
                {this.props.todoList}
                <Button onClick={this.handleClick}>
                    Click
                 </Button>
            </Jumbotron>
        );
    }
}

const mapStatsToProps = ({ todo }: IRootReduxStats) => {
    const { todoList } = todo
    return {
        todoList
    }
}

export default connect(mapStatsToProps, {
    addTodos
})(Home)
