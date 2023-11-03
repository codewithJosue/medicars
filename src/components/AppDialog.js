import {StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {useEffect, useState} from 'react';

import colors from '../config/colors';

const AppDialog = ({
  color = 'danger',
  icon = 'alert',
  message = '¿Está seguro(a) de proceder con la eliminación?',
  onPress,
  isVisible,
  setIsVisible,
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
          {/*<Dialog.Title style={styles.title}>{title}</Dialog.Title>*/}
          <Dialog.Content style={styles.message}>
            <Text variant="labelSmall">{message}</Text>
          </Dialog.Content>
          <Dialog.Actions style={styles.actions}>
            <Button labelStyle={styles.btnCancel} onPress={hideDialog}>
              Cancel
            </Button>
            <Button labelStyle={styles.btnSuccess} onPress={onPressDialog}>
              Ok
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
    height: 120,
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
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  message: {
    top: 5,
  },
});
