import {useState} from 'react';
import {AppButton, AppText, Screen} from '../index';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../../config/colors';
import route from '../../navigations/route';
import {getDate} from '../../helpers/date';
import AppIcon from './AppIcon';

const CalendarService = () => {
  const [method, setMethod] = useState(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const method_payment = [
    {id: 1, description: 'Tarjeta de crédito', icono: 'credit-card-outline'},
    {id: 2, description: 'Transferencia', icono: 'bank-transfer'},
    {id: 3, description: 'Efectivo', icono: 'cash-multiple'},
  ];

  const handleChangePicker = (evt, date) => {
    if (date !== undefined) {
      setOpen(!open);
      setDate(date);
    }
  };

  return (
    <Screen style={styles.container}>
      <View>
        <AppText style={styles.title}>Seleccione su método de pago</AppText>

        <ScrollView horizontal style={{marginTop: 20, marginBottom: 20}}>
          {method_payment.map(payment => (
            <TouchableOpacity
              onPress={() => setMethod(payment.id)}
              key={payment.id}
              style={[
                styles.card,
                method === payment.id
                  ? {backgroundColor: colors.primary}
                  : {backgroundColor: colors.white},
              ]}>
              <AppIcon
                name={payment.icono}
                color={colors.primary}
                size={50}
                style={[
                  styles.text,
                  method === payment.id
                    ? {color: colors.white}
                    : {color: colors.primary},
                ]}
              />
              <AppText
                style={[
                  styles.text,
                  method === payment.id
                    ? {color: colors.white}
                    : {color: colors.primary},
                ]}>
                {payment.description}
              </AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.containerDate}>
        <AppText style={styles.input}>{getDate(date)}</AppText>
        <TouchableOpacity style={styles.icon} onPress={() => setOpen(true)}>
          <AppIcon name="calendar" size={25} />
        </TouchableOpacity>

        {open && (
          <DateTimePicker
            value={date}
            locale="es-ES"
            mode="date"
            is24Hour={true}
            timeZoneName="America/Tegucigalpa"
            neutralButton={{label: 'Clear', textColor: 'grey'}}
            onChange={handleChangePicker}
          />
        )}
        {/*<DatePicker*/}
        {/*  modal*/}
        {/*  mode="datetime"*/}
        {/*  androidVariant="iosClone"*/}
        {/*  title="Seleccione la fecha"*/}
        {/*  confirmText="Confirmar"*/}
        {/*  cancelText="Cancelar"*/}
        {/*  open={open}*/}
        {/*  date={date}*/}
        {/*  locale="es"*/}
        {/*  //is24hourSource="locale"*/}
        {/*  onConfirm={date => {*/}
        {/*    setOpen(false);*/}
        {/*    setDate(date);*/}
        {/*  }}*/}
        {/*  onCancel={() => {*/}
        {/*    setOpen(false);*/}
        {/*  }}*/}
        {/*/>*/}
      </View>

      <AppButton
        title="Finalizar y Guardar"
        onPress={() => navigation.navigate(route.HOME)}
      />
    </Screen>
  );
};
export default CalendarService;

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 80,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 5,
    padding: 5,
  },
  container: {
    flex: 1,
    margin: 20,
  },
  containerDate: {
    flex: 2,
    top: 10,
  },
  description: {
    fontSize: 9,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.light,
    elevation: 0.5,
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 12,
    textAlign: 'left',
  },
  text: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
    color: colors.primary,
    fontWeight: 'Bold',
    fontSize: 15,
  },
});
