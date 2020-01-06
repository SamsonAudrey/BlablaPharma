import { connect } from 'react-redux';
import PharmacistsList from '../components/PharmacistsList';
import { createLoadingSelector } from '../utils/loadingSelector';
import CustomTabView from '../components/CustomTabView';
import {
  pharmacistsSearch,
  updateSearchGenderFilter,
  updateSearchProfessionFilter,
  updateSearchText
} from '../actions/pharmacistsSearchAction';
import { blablapharmacistsSearch } from '../actions/blablapharmacistsSearchAction';

const loadingSelector = createLoadingSelector(['PHARMACISTS_SEARCH']);

const mapStateToProps = (state) => ({
  pharmacists: state.pharmacists,
  blablapharmacists: state.blablapharmacists,
  isFetching: loadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (text, gender, profession) => {
    dispatch(pharmacistsSearch(text, gender, profession));
  },
  onBlablaSearch: (text, gender, profession) => {
    dispatch(blablapharmacistsSearch(text, gender, profession));
  }
});


const PharmacistsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomTabView);

export default PharmacistsListContainer;
