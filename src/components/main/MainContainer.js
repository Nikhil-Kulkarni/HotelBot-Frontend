import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHotelInfo } from '../../state/selectors/accountSelectors';
import { getRequests } from '../../state/selectors/hotelSelectors';
import { fetchRequestsForHotel } from '../../state/actions/hotelActions';
import Main from './Main';

class MainContainer extends Component {

    componentWillMount() {
        const { hotel } = this.props;
        this.props.fetchRequestsForHotel(hotel.info.id);
    }

    render() {
        const {
            hotel,
            requests
        } = this.props;

        return (
            <Main id={hotel.info.id} hotelName={hotel.info.name} requests={requests} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        hotel: getHotelInfo(state),
        requests: getRequests(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRequestsForHotel: (hotelId) => dispatch(fetchRequestsForHotel(hotelId)),
    };
};

const ConnectedMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);

export default ConnectedMainContainer;