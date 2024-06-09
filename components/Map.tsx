import React, { useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import PinMarker from '@/components/PinMarker';
import { useRadars } from '@/api/radars';
import RadarInfo from '@/components/RadarInfo';
import { useControls } from '@/api/controls';
import Control from '@/components/Control';
import RadarImage from '@/assets/images/radar.png';
import GunImage from '@/assets/images/gun.png';


interface MapProps {
  location?: {
    lat: number
    lon: number
  };
}

const Map = ({ location }: MapProps) => {
  const { data: radars } = useRadars();
  const { data: controls, refetch } = useControls();
  const mapRef = React.createRef<MapView>();

  useEffect(() => {
    if (location) {
      console.log('animating');
      mapRef.current?.animateToRegion({
        latitude: location.lat,
        longitude: location.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }

  }, [location]);


  return (
    <View style={styles.container}>
      <MapView showsUserLocation={true} ref={mapRef} style={styles.map}>
        {radars.map((radar) => (
          <PinMarker
            image={RadarImage}
            key={radar.id}
            latitude={radar.latitude}
            longitude={radar.longitude}
            content={<RadarInfo radar={radar} />}
          />
        ))}
        {controls?.map((control) => (
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
