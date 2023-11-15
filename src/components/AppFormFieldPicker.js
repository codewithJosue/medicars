import {useFormikContext} from 'formik';
import AppTextInput from './forms/AppTextInput';
import ErrorMessage from './forms/ErrorMessage';
import AppDropDownPicker from './AppDropDownPicker';

const AppFormFieldPicker = ({name, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched, setFieldValue} =
    useFormikContext();

  return (
    <>
      <AppDropDownPicker
        onSelectItem={val => {
          setFieldValue(name, val.value);
          setFieldTouched(name, true);
        }}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormFieldPicker;
