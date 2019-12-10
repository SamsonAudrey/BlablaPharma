import { connect } from "react-redux";
import SearchPharmacistsPage from "../Pages/SearchPharmacistsPage";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

const SearchPharmacist = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPharmacistsPage);

export default SearchPharmacist;
