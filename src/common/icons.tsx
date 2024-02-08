import React from 'react';
import { FaRegHeart, FaStar, FaRocket, FaRegBookmark, FaShare } from 'react-icons/fa';
import { GoInfo } from "react-icons/go";
import { FiMessageCircle } from "react-icons/fi";
export type IconName = 'heart' | 'star' | 'rocket'| 'bookmark' | 'share'|'info'| 'message'// Add more icon names as needed

const iconComponents: Record<IconName, React.ElementType> = {
  heart: FaRegHeart,
  star: FaStar,
  rocket:FaRocket,
  bookmark:FaRegBookmark,
  share: FaShare, 
  info:GoInfo,
  message:FiMessageCircle
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

  return <IconComponent color={color} size={size} {...restProps} />;
};

export default Icon;
