import {StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {useEffect, useState} from 'react';

import colors from '../../config/colors';
import {AppText} from '../index';

const AppDialog = ({
  color = 'danger',
  icon = 'alert',
  message = '¿Está seguro(a) de proceder con la eliminación?',
  onPress,
  isVisible,
  setIsVisible,
  button = true,
  title = '',
}) => {
  const onPressDialog = () => {
    onPress();
    setIsVisible(false);
  };
  const hideDialog = () => setIsVisible(false);

  return (
    <View>
      <Portal>
        <Dialog
          style={styles.container}
          visible={isVisible}
          onDismiss={hideDialog}>
          <Dialog.Icon size={15} icon={icon} color={colors[color]} />
          <Dialog.Title style={styles.title}>{title}</Dialog.Title>
          <Dialog.Content>
            <AppText style={styles.message}>{message}</AppText>
          </Dialog.Content>
          <Dialog.Actions style={styles.actions}>
            {button && (
              <Button labelStyle={styles.btnCancel} onPress={hideDialog}>
                Cancelar
              </Button>
            )}
            <Button labelStyle={styles.btnSuccess} onPress={onPressDialog}>
              Aceptar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default AppDialog;

const styles = StyleSheet.create({
  container: {
    height: 180,
  },
  actions: {
    top: -10,
  },
  btnCancel: {
    fontSize: 14,
    color: colors.danger,
  },
  btnSuccess: {
    fontSize: 14,
    color: colors.primary,
  },
  title: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'center',
  },
  message: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: 13,
  },
});
