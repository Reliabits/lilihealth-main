/* eslint-disable no-unused-vars */
import React from 'react';
import { Modal, Pressable, View, StyleSheet } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { theme } from 'src/styles/theme';
import { Text } from './Text';

interface IImanePicker {
  visibility: boolean;
  onImageSelect(image: any): void;
  onCancel: () => void;
}
export const ImagePicker = ({ visibility, onImageSelect, onCancel }: IImanePicker) => {
  const handleCamera = () => {
    ImageCropPicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: true,
      includeExif: true,
    })
      .then((image) => {
        onImageSelect(image);
      })
      .catch((error) => console.log({ EInCamera: error }));
  };
  const handleGallery = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        onImageSelect(image);
      })
      .catch((error) => console.log({ EIngallery: error }));
  };

  return (
    <Modal animationType="fade" transparent visible={visibility}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text color="secondary" variant="cg18">
            Upload Image
          </Text>
          <View style={styles.spacer} />
          <Pressable onPress={handleCamera} style={styles.action}>
            <Text color="primary" variant="body14">
              Select From Camera
            </Text>
          </Pressable>
          <View style={styles.spacer} />
          <Pressable onPress={handleGallery} style={styles.action}>
            <Text color="primary" variant="body14">
              Select From Gallery
            </Text>
          </Pressable>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <Pressable onPress={onCancel} style={[styles.action, { borderColor: theme.colors.red }]}>
            <Text color="red" variant="body14">
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090',
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  spacer: { height: 20 },
  action: {
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: theme.colors.primary,
  },
});
