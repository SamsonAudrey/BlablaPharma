import { connect } from 'react-redux';
import PharmacistsSearchBar from '../../components/Pharmacists/PharmacistsSearchBar';
import {
  updateSearchText, pharmacistsSearch, updateSearchGenderFilter
} from '../../actions/pharmacist/pharmacistsSearchAction';

const mapStateToProps = (state) => ({
  gender: state.searchPharmacists.gender,
  profession: state.searchPharmacists.profession,
  text: state.searchPharmacists.text
});

const mapDispatchToProps = (dispatch) => ({
  onGenderFilterUpdate: (gender) => {
    dispatch(updateSearchGenderFilter(gender));
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
