import React from 'react';
import { View, Pressable, StyleSheet, Modal } from 'react-native';
import { Image } from 'src/components/Image';
import { Row } from 'src/components/Row';
import { Text } from 'src/components/Text';
import { theme } from 'src/styles/theme';
import Assets from 'src/utils/Assets';
import { Spacer30 } from 'src/utils/Spacing';

interface IInfoModal {
  modalVisible: boolean;
  setModalVisible: any;
  category: string | undefined;
  info: string | null | undefined;
}

const InfoModal = ({ modalVisible, setModalVisible, category, info }: IInfoModal) => (
  <Modal
    animationType="fade"
    transparent
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{ width: '100%' }}>
          <Row>
            <Text color="secondary" variant="bodyBold16">
              {category}
            </Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Image source={Assets.images.close_primary} width={28} height={28} />
            </Pressable>
          </Row>
          <Spacer30 />

          <Text color="primary" variant="body14">
            {info || 'No details available'}
          </Text>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    padding: 35,
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
});

export default InfoModal;
