import { connect } from 'react-redux';
import { filter } from 'lodash';
import PharmacistsList from '../components/PharmacistsList';
import { createLoadingSelector } from '../utils/loadingSelector';
import CustomTabView from '../components/CustomTabView';
import {
  pharmacistsSearch
} from '../actions/pharmacistsSearchAction';
import { createConversations } from '../actions/chat/conversationAction';

const loadingSelector = createLoadingSelector(['PHARMACISTS_SEARCH']);

const mapStateToProps = (state) => ({
  pharmacists: filter(state.pharmacists, { professionLabel: 'pharmacist' }),
  blablapharmacists: filter(state.pharmacists, { professionLabel: 'pharmacistBlablapharma' }),
  isFetching: loadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (text, gender, profession) => {
    dispatch(pharmacistsSearch(text, gender, profession));
  },
  onContact: (memberId) => {
    dispatch(createConversations(memberId))
  }
});


const PharmacistsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PharmacistsList, CustomTabView);

export default PharmacistsListContainer;
