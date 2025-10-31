import { COLORS } from '../constants/colors';
import { Icons } from '../constants/icons';

export default function Icon({ 
  name, 
  size = 24, 
  color = COLORS.textPrimary,
  strokeWidth = 2,
  ...props 
}) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}