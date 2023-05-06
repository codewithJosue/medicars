import { Avatar } from '@rneui/themed';
import { useState } from "react";

const AvatarText = ({size='small'}) => {

  const [avatar, setAvatar] = useState("Josue Flores");

  return (
    <Avatar size={size} rounded title={avatar.substring(0, 2).toLocaleUpperCase()}
            containerStyle={{ backgroundColor: "blue" }}   />
  )
}

export default AvatarText;

