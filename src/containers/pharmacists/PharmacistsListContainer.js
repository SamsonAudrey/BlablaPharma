import { connect } from 'react-redux';
import { filter } from 'lodash';
import PharmacistsList from '../../components/pharmacists/PharmacistsList';
import { createLoadingSelector } from '../../utils/loadingSelector';
import {
  pharmacistsSearch
} from '../../actions/pharmacist/pharmacistsSearchAction';

const loadingSelector = createLoadingSelector(['PHARMACISTS_SEARCH']);

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps;
  // console.log("mmmm"+JSON.stringify(state.conversations));
  return {
    navigation,
    pharmacists: filter(state.pharmacists, { professionLabel: 'pharmacist' }),
    blablapharmacists: filter(state.pharmacists, { professionLabel: 'pharmacistBlablapharma' }),
    isFetching: loadingSelector(state),
    isConnected: state.connection.isConnected
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearch: (text, gender, profession) => {
    dispatch(pharmacistsSearch(text, gender, profession));
  }
});


const PharmacistsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PharmacistsList);

export default PharmacistsListContainer;
