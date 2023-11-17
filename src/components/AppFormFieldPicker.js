import {useFormikContext} from 'formik';
import AppTextInput from './forms/AppTextInput';
import ErrorMessage from './forms/ErrorMessage';
import AppDropDownPicker from './AppDropDownPicker';

const AppFormFieldPicker = ({name, dataForm, setDataForm, ...otherProps}) => {
  const {errors, touched, setFieldValue} = useFormikContext();

  return (
    <>
      <AppDropDownPicker
        onSelectItem={val => {
          setFieldValue(name, val.value);
          setDataForm({
            ...dataForm,
            [name]: val.value,
          });
        }}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormFieldPicker;
