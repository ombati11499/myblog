import React from 'react';
import { FaRegHeart, FaStar, FaRocket, FaRegBookmark, FaShare } from 'react-icons/fa';
import { GoInfo } from "react-icons/go";
import { FiMessageCircle } from "react-icons/fi";
import { GrSend } from "react-icons/gr";
export type IconName = 'heart' | 'star' | 'rocket'| 'bookmark' | 'share'|'info'| 'message'|'send'// Add more icon names as needed

const iconComponents: Record<IconName, React.ElementType> = {
  heart: FaRegHeart,
  star: FaStar,
  rocket:FaRocket,
  bookmark:FaRegBookmark,
  share: FaShare, 
  info:GoInfo,
  message:FiMessageCircle,
  send:GrSend
  // Add more icons as needed
};

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, color, size, ...restProps }) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon '${name}' not found`);
    return null;
  }

  return <IconComponent color={color||"green"} size={size||20} {...restProps} />;
};

export default Icon;
