import {
  CalendarDays,
  ArrowRight,
  MessageCircle,
  Video,
  Dumbbell,
  TrendingUp,
  Check,
  User,
  Clock,
  HeartPulse,
  Target,
  Mail,
  MapPin,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "calendar-days": CalendarDays,
  "arrow-right": ArrowRight,
  "message-circle": MessageCircle,
  video: Video,
  dumbbell: Dumbbell,
  "trending-up": TrendingUp,
  check: Check,
  user: User,
  clock: Clock,
  "heart-pulse": HeartPulse,
  target: Target,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  x: X,
};

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 18,
  color = "currentColor",
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} color={color} strokeWidth={2} aria-hidden="true" />;
}
