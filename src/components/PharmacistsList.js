import React from 'react';
import CustomTabView from './CustomTabView';
import ScenePharmacists from './scenes/ScenePharmacists';

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
         />
       );
     case 'second':
       return (
         <ScenePharmacists
           pharmacists={this.props.pharmacists}
           navigation={this.props.navigation}
         />
       );
     default:
       return null;
   }
 };

 render() {
  console.log("navvv"+this.props.navigation)
   return (
     <>
       <CustomTabView
         pharmacists={this.props.pharmacists}
         blablapharmacists={this.props.blablapharmacists}
         renderScene={this.renderScene}
         state={this.state}
       />
     </>
   );
 }
}
