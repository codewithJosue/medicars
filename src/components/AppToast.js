import Toast from "react-native-easy-toast";
import { forwardRef } from "react";

const AppToast = forwardRef(({ backgroundColor = "black" }, ref) => {

  return (
    <Toast
      style={{ backgroundColor }}
      fadeInDuration={500}
      fadeOutDuration={700}
      ref={ref}
      opacity={0.8}
      position="bottom"
      positionValue={300}
    />
  );
});

export default AppToast;
