import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IRootReduxStats } from '../../../types';
import { Button } from 'reactstrap';
import { getUser } from '../../../redux/action'
import { Loader } from '../../../components/loader';

export interface IHomeStatsProps extends RouteComponentProps {
    getUser(username: string): void;
    loading: boolean;
    userName: string | null;
    error: string;
}

class Home extends React.Component<IHomeStatsProps, {}> {
    componentDidMount() {
        console.log("Home componentDidMount")
    }
    private handleCLick = () => {
        this.props.getUser('Pritesh')
    }
    public render() {
        if (this.props.loading) {
            return (
                <Loader />
            );
        }
        return (
            <div>
                {
                    this.props.userName !== null
                        ? <span>{this.props.userName}</span>
                        : <Button onClick={this.handleCLick}>
                            Login
                    </Button>
                }
            </div>
        );
    }
}

const mapStatsToProps = ({ user }: IRootReduxStats) => {
    const {
        loading,
        userName,
        error
    } = user
    return {
        loading,
        userName,
        error
    }
}

export default connect(mapStatsToProps, {
    getUser
})(Home)
