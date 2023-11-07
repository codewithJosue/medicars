import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const AppMap = ({location, setLocation}) => {
  const onRegionChange = region => {
    setLocation({...location, region: region});
  };

  const onchangeMarker = coordinate => {
    setLocation({...location, marker: coordinate});
  };

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      initialRegion={location.region}
      onPress={evt => onchangeMarker(evt.nativeEvent.coordinate)}>
      <Marker coordinate={location.marker} />
    </MapView>
  );
};

export default AppMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
