import { connect } from 'react-redux';
import PharmacistsSearchBar from '../components/PharmacistsSearchBar';
import {
  updateSearchText, pharmacistsSearch, updateSearchProfessionFilter, updateSearchGenderFilter
} from '../actions/pharmacistsSearchAction';

const mapStateToProps = (state) => {
  console.log(`passe à la search baaar ${JSON.stringify(state)}`);
  return {
    filter: state.searchPharmacists.filter,
    text: state.searchPharmacists.text
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenderFilterUpdate: (gender) => {
    console.log(`fdsf${gender}`);
    dispatch(updateSearchGenderFilter(gender));
  },
  onProfessionFilterUpdate: (profession) => {
    dispatch(updateSearchProfessionFilter(profession));
  },
  onTextUpdate: (text) => {
    dispatch(updateSearchText(text));
  },
  onSearch: (text, gender, profession) => {
    dispatch(pharmacistsSearch(text, gender, profession));
  }
});

const SearchBarPharmacists = connect(
  mapStateToProps,
  mapDispatchToProps
)(PharmacistsSearchBar);

export default SearchBarPharmacists;
