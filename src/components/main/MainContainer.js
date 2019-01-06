import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHotelInfo } from '../../state/selectors/accountSelectors';
import Main from './Main';

class MainContainer extends Component {

    render() {
        const {
            hotel
        } = this.props;

        return (
            <Main id={hotel.info.id} hotelName={hotel.info.name} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        hotel: getHotelInfo(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const ConnectedMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);

export default ConnectedMainContainer;