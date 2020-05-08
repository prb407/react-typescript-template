import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getUser } from '../../redux/action'
import { IRootReduxStats } from '../../types';

export interface IHomeStatsProps extends RouteComponentProps {
    userName: string | null;
    loading: boolean;
    getUser(username: string): void;
}

class Home extends React.Component<IHomeStatsProps, {}> {
    handleClick = () => {
        this.props.getUser('pritesh')
    }
    public render() {
        return (
            <Jumbotron>
                {this.props.loading && 'Loding...'}
                {this.props.userName}
                <Button onClick={this.handleClick}>
                    Click
                 </Button>
            </Jumbotron>
        );
    }
}

const mapStatsToProps = ({ user }: IRootReduxStats) => {
    const { userName, loading } = user
    return {
        userName,
        loading
    }
}

export default connect(mapStatsToProps, {
    getUser
})(Home)
