import React, { FC, useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

interface BottomDrawerProps {
  children: React.ReactNode;
}

const BottomDrawer: FC<BottomDrawerProps> = ({ children }) => {
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
            }}
          >
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 16 }}>
            <Text>Content</Text>
          </View>
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
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
  },
});
