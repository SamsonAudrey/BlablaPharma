import React from 'react';
import CustomTabView from './CustomTabView';


export default class PharmarmacistsList extends React.Component {
  render() {
    return (
      <>
        <CustomTabView
          pharmacists={this.props.pharmacists}
          blablapharmacists={this.props.blablapharmacists}
        />
      </>
    );
  }
}
