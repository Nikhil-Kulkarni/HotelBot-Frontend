import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { loginHotel } from '../../state/actions/accountActions';
import { getHotelInfo } from '../../state/selectors/accountSelectors';

class AppContainer extends Component {

    componentWillMount() {
        this.login = this.login.bind(this);
    }

    componentDidUpdate() {
        const {
            hotelInfo,
        } = this.props;
        
        if (hotelInfo && hotelInfo.done && hotelInfo.success) {
            this.props.history.push('/home');
        }
    }

    login(hotelId) {
        this.props.loginHotel(hotelId);
    }

    render() {
        return (
            <App loginHotel={this.login} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        hotelInfo: getHotelInfo(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHotel: (hotelId) => dispatch(loginHotel(hotelId)),
    };
};

const ConnectedAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

export default ConnectedAppContainer;