import { connect } from 'react-redux';
import PharmacistsList from '../components/PharmacistsList';
import { createLoadingSelector } from '../utils/loadingSelector';

const loadingSelector = createLoadingSelector(['PHARMACISTS_SEARCH']);

const mapStateToProps = (state) => ({
  pharmacists: state.pharmacists,
  isFetching: loadingSelector(state)
});

const PharmacistsListContainer = connect(
  mapStateToProps,
)(PharmacistsList);

export default PharmacistsListContainer;
