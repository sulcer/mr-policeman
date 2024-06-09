import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import PinMarker from '@/components/PinMarker';
import { useRadars } from '@/api/radars';
import RadarInfo from '@/components/RadarInfo';
import { useControls } from '@/api/controls';
import Control from '@/components/Control';
import RadarImage from '@/assets/images/radar.png';
import GunImage from '@/assets/images/gun.png';
import { useSession } from '@/hooks/useSession';


const Map = () => {
  const { data: radars } = useRadars();
  const { data: controls,refetch } = useControls();

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {radars.map((radar) => (
          <PinMarker
            image={RadarImage}
            key={radar.id}
            latitude={radar.latitude}
            longitude={radar.longitude}
            content={<RadarInfo radar={radar} />}
          />
        ))}
        {controls.map((control) => (
          <PinMarker
            image={GunImage}
            key={control.id}
            latitude={control.latitude}
            longitude={control.longitude}
            content={<Control control={control} refetch={refetch} />}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
