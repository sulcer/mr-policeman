import React, { FC, useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface BottomDrawerProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const BottomDrawer: FC<BottomDrawerProps> = ({ children, content }) => {
  const windowHeight = Dimensions.get('window').height;

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOpenBottomSheet}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        {children}
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
          <View
            style={{
              flex: 0,
              width: '100%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              paddingHorizontal: 25,
              marginTop: 3,
            }}
          >
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Ionicons name={'close-outline'} size={24} color={'gray'} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', flex: 1 }}>{content}</View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    paddingTop: 5,
  },
});
