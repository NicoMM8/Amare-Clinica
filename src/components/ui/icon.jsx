import React from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  HelpCircle,
  MessageCircle,
  Video,
  Globe,
  Clock,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

const sizeMap = {
  xs: 14,
  sm: 16,
  default: 18,
  md: 20,
  lg: 24,
  xl: 32
};

export function Icon({ name, size = 'default', className = '', style = {}, ...props }) {
  const pixelSize = typeof size === 'number' ? size : (sizeMap[size] || 18);

  const iconProps = {
    size: pixelSize,
    className: `v-icon v-icon--${name} ${className}`,
    style: { flexShrink: 0, ...style },
    ...props
  };

  switch (name) {
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    case 'arrow-left':
      return <ArrowLeft {...iconProps} />;
    case 'arrow-right':
      return <ArrowRight {...iconProps} />;
    case 'arrow-up-right':
      return <ArrowUpRight {...iconProps} />;
    case 'check':
      return <Check {...iconProps} />;
    case 'chat':
    case 'message-circle':
      return <MessageCircle {...iconProps} />;
    case 'video':
      return <Video {...iconProps} />;
    case 'globe':
      return <Globe {...iconProps} />;
    case 'clock':
      return <Clock {...iconProps} />;
    case 'shield':
      return <ShieldCheck {...iconProps} />;
    case 'reset':
    case 'rotate-ccw':
      return <RotateCcw {...iconProps} />;
    default:
      return <HelpCircle {...iconProps} />;
  }
}

export default Icon;
