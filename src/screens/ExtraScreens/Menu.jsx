import {FlatList, Image, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import ImageViewer from 'react-native-image-zoom-viewer';
import {horizontalScale, screenWidth} from '../../Custom/Matrix';

const Menu = props => {
  const params = props.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Handle both local and remote images
  const images = params.item.data.map(item => ({
    url: item.uri ? item.uri : Image.resolveAssetSource(item).uri,
  }));

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          height: screenWidth * 0.45,
          width: screenWidth * 0.45,
          margin: horizontalScale(10),
          borderRadius: horizontalScale(10),
        }}
        onPress={() => {
          setSelectedImageIndex(index);
          setModalVisible(true);
        }}>
        <Image
          source={item}
          style={{
            flex: 1,
            height: screenWidth * 0.45,
            width: screenWidth * 0.45,
            borderRadius: horizontalScale(10),
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <CustomHeader title={params.item.title} />

      <FlatList
        data={params.item.data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={renderItem}
        columnWrapperStyle={styles.row}
        style={styles.flatlist}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <ImageViewer
          imageUrls={images}
          index={selectedImageIndex}
          onSwipeDown={() => setModalVisible(false)}
          enableSwipeDown={true}
        />
      </Modal>
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
  },
  flatlist: {
    marginHorizontal: horizontalScale(10),
  },
});
