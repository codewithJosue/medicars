import { useState } from "react";
import { Avatar } from "react-native-paper";

const AvatarText = ({size=20}) => {

  const [avatar, setAvatar] = useState("Josue");

  return (
    <Avatar.Text size={size} label={avatar.substring(0, 2).toLocaleUpperCase()} />
  )
}

export default AvatarText;


