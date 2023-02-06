/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';

import { View, ScrollView, Dimensions, Text } from 'react-native';
import {Button} from 'native-base';
import CText from '~/components/CText';

import { Colors } from '~/utils/colors';
import { CRateStar } from '~/components/CRateStar';
import { cStyles } from '~/utils/styles';
import { useNavigation } from '@react-navigation/native';

import HTML from 'react-native-render-html';
import { Devices } from '~/config';
export class OverviewDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.redirectToProduct = this.redirectToProduct.bind(this);
  }

  /* LIFE CYCLE */
  // componentDidMount() {
    
  // }

  // componentWillUnmount() {
  // }
  componentDidUpdate(nextProps, nextState){
    // console.log('hit here');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('-----shouldComponentUpdate--------');
    return true;
    // if ( nextProps.snap_selected || this.props.snap_selected  && ( this.props.snap_selected != nextProps.snap_selected )) {
    //   console.log('----------shouldComponentUpdatev hit-------');
    // }
    // return false;
  }
  redirectToProduct = (product) => {
    console.log('props establish');
    console.log(this.props.onFunction);
    // // const navigation = useNavigation();
    // this.props.navigation.push("ProductDetail", {
      //   product
      // });
      this.props.onFunction.onPressItem(product);
  }

  /* RENDER */
  render() {
    return (
      <ScrollView style={[{flex:1, height:Devices.sH("31%"), backgroundColor: Colors.YELLOW_COLOR}, cStyles.p_15, cStyles.br_tr_15,cStyles.br_tl_15]}>
        <View key={'asdads'}>
          <Text style={[cStyles.txt_title_header,{color:Colors.BLACK_COLOR}]}>{ this.props.snap_selected && this.props.snap_selected.name ? this.props.snap_selected.name : 'Title'}</Text>
          <CRateStar containerStyleStar={{marginBottom:10}} fullStarColor={'black'} emptyStarColor={'black'} averageRating={Number((this.props.snap_selected && this.props.snap_selected.average_rating) ? this.props.snap_selected.average_rating : 0)} />
          <View style={[cStyles.row_justify_between]}>
            <Text style={[cStyles.txt_title_header,cStyles.row_justify_between,{color:Colors.BLACK_COLOR, marginBottom:10}]}>About The Book</Text>
            <Button  small bordered
              style={[{ backgroundColor: Colors.TRANSPARENT, padding: 5, borderColor: Colors.BLACK_COLOR, borderRadius: 5, borderWidth:4 }]}
              // onPress={() => this.props.onFunction.onPressServiceItem("ProductDetail", this.props.snap_selected)}
              onPress={() => this.redirectToProduct(this.props.snap_selected)} 
              >
              <CText style={[{ color: Colors.BLACK_COLOR }]} i18nKey={'view_product'} />
            </Button>
          </View>
          <HTML html={(this.props.snap_selected && this.props.snap_selected.description) ? this.props.snap_selected.description: ''} imagesMaxWidth={Dimensions.get('window').width} />
          {/* <Text>{ (this.props.snap_selected && this.props.snap_selected.description) ? this.props.snap_selected.description: '' }</Text> */}
        </View>
      </ScrollView>
    )
  }

}


export default OverviewDetail;
