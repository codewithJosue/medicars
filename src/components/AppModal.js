import { Modal, Portal } from "react-native-paper";
import { Screen } from "./index";
import { StyleSheet } from "react-native";

const AppModal = ({ children, isVisible, setIsVisible }) => {
  const hideModal = () => setIsVisible(false);

  return (
    <Screen>
      <Portal>
        <Modal visible={isVisible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
          {children}
        </Modal>
      </Portal>
    </Screen>

  );
};

export default AppModal;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
  },
});
