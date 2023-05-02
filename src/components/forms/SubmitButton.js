import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({title, color='primary'}) => {

  const {handleSubmit} = useFormikContext();

  return <AppButton title={title} color={color} onPress={handleSubmit} />
}

export default SubmitButton;
