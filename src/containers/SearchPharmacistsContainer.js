import {connect} from 'react-redux';
import SearchPharmacistsPage from '../Pages/SearchPharmacistsPage'


const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

const SearchPharmacist = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchPharmacistsPage);
  
  export default SearchPharmacist;