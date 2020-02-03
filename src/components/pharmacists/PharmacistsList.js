import React from 'react';
import { View } from 'react-native';
import CustomTabView from '../utils/CustomTabView';
import ScenePharmacists from '../scenes/ScenePharmacists';
import SceneBlog from "../scenes/SceneBlog";

export default class PharmarmacistsList extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Pharmaciens BlablaPharma' },
      { key: 'second', title: 'Vos\nPharmaciens' },
    ]
  };

 renderScene = ({ route }) => {
   switch (route.key) {
     case 'first':
       return (
         <ScenePharmacists
           pharmacists={this.props.blablapharmacists}
           navigation={this.props.navigation}
           isConnected={this.props.isConnected}
           isFetching={this.props.isFetching}
           title={1}
         />
       );
     case 'second':
       return (
         <ScenePharmacists
           pharmacists={this.props.pharmacists}
           navigation={this.props.navigation}
           isConnected={this.props.isConnected}
           isFetching={this.props.isFetching}
           title={2}
         />
       );
     default:
       return null;
   }
 };

 render() {
   return (
     <>
       <View style={{ flex: 1, paddingHorizontal: '1%' }}>
         <CustomTabView
           pharmacists={this.props.pharmacists}
           blablapharmacists={this.props.blablapharmacists}
           renderScene={this.renderScene}
           state={this.state}
         />
       </View>
     </>
   );
 }
}
