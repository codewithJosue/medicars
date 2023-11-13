import {StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import colors from '../config/colors';

const AppMap = ({location, marker, setLocation}) => {
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
      initialRegion={location}
      onPress={evt => onchangeMarker(evt.nativeEvent.coordinate)}>
      <Marker
        draggable
        coordinate={marker}
        onDragEnd={evt => onchangeMarker(evt.nativeEvent.coordinate)}
      />
    </MapView>
  );
};

export default AppMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
