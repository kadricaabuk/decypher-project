import React from 'react';
import { Image, StyleSheet } from 'react-native';

const DCImage = ({ src, style, width, height }) => {
    const styles = StyleSheet.create({
        image: {
          width: width,
          height: height,
          resizeMode: 'contain',
        },
      });
    return (
      <Image
        source={src}
        style={[styles.image, style]}
      />
    );
  };

  export default DCImage