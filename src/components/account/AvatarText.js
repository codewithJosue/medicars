import {useState} from 'react';
import {Avatar} from 'react-native-paper';
import colors from '../../config/colors';

const AvatarText = ({size = 30}) => {
  const [avatar, setAvatar] = useState('Invitado');

  return (
    <Avatar.Text
      style={{
        alinSelf: 'center',
        marginTop: 10,
        backgroundColor: colors.primary,
      }}
      size={size}
      label={avatar.substring(0, 2).toLocaleUpperCase()}
    />
  );
};

export default AvatarText;
