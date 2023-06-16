import {useState} from 'react';
import {AppButton, AppText, Screen} from '../index';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';

import colors from '../../config/colors';
import route from '../../navigations/route';
import {getDate} from '../../helpers/date';

const CalendarService = props => {
  const [method, setMethod] = useState(false);
  const [text, setText] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <Screen style={styles.container}>
      <AppText style={{alignSelf: 'center', color: colors.medium, top: -5}}>
        Método de pago
      </AppText>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <FontAwesome
            name="credit-card"
            size={70}
            color={method ? 'green' : 'black'}
          />
          <AppText style={styles.description}>Tarjeta de crédito</AppText>
        </View>
        <TouchableOpacity
          onPress={() => setMethod(!method)}
          style={{top: 20, elevation: 2}}>
          {method ? (
            <FontAwesome
              name="arrow-right"
              size={30}
              color={colors.light_grey}
            />
          ) : (
            <FontAwesome
              name="arrow-left"
              size={30}
              color={colors.light_grey}
            />
          )}
        </TouchableOpacity>

        <View>
          <FontAwesome
            name="money"
            size={70}
            color={!method ? 'green' : 'black'}
          />
          <AppText style={styles.description}>Transferencia bancaria</AppText>
        </View>
      </View>
      <View style={{margin: 20}}>
        <AppText style={styles.input}>{getDate(date)}</AppText>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            right: 5,
          }}
          onPress={() => setOpen(true)}>
          <FontAwesome name="calendar" size={25} />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        mode="datetime"
        title="Seleccione la fecha"
        confirmText="Confirmar"
        cancelText="Cancelar"
        open={open}
        date={date}
        locale="es"
        //is24hourSource="locale"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <AppButton
        title="Finalizar y Guardar"
        onPress={() => navigation.navigate(route.HOME)}
      />
    </Screen>
  );
};
export default CalendarService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  description: {
    fontSize: 9,
    textAlign: 'center',
  },
  input: {
    height: 30,
    borderRadius: 10,
    backgroundColor: colors.light,
    elevation: 0.5,
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 10,
  },
});
