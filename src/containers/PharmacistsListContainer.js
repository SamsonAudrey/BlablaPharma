import { connect } from 'react-redux';
import PharmacistsList from '../components/PharmacistsList'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    pharmacists: state.pharmacists
  };
};

const PharmacistsListContainer = connect(
  mapStateToProps,
)(PharmacistsList);

export default PharmacistsListContainer;
