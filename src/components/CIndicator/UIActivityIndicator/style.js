/**
 ** Name: UIActivityIndicator.js
 ** Author: ZiniSoft Ltd
 ** CreatedAt: 2020
 ** Description: Description of UIActivityIndicator.js
**/
/* LIBRARY */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  layer: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});