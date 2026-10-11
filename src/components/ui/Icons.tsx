import { Github as GithubIcon, Mail as MailIcon, Heart as HeartIcon, Menu as MenuIcon, X as XIcon, ArrowDown as ArrowDownIcon, Building2 as Building2Icon, Calendar as CalendarIcon, MapPin as MapPinIcon, Folder as FolderIcon, ExternalLink as ExternalLinkIcon, Code2 as Code2Icon } from "lucide-react";
import type { SVGProps } from "react";

export const Github = GithubIcon;
export const LinkedIn = function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.1 8.1h4.8v12.9H.1V8.1ZM8.1 8.1h4.6v1.77h.07c.64-1.21 2.21-2.49 4.54-2.49 4.86 0 5.77 3.2 5.77 7.36v6.26h-4.8v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.63H8.1V8.1Z" />
    </svg>
  );
};
export const Mail = MailIcon;
export const Heart = HeartIcon;
export const Menu = MenuIcon;
export const X = XIcon;
export const ArrowDown = ArrowDownIcon;
export const Building2 = Building2Icon;
export const Calendar = CalendarIcon;
export const MapPin = MapPinIcon;
export const Folder = FolderIcon;
export const ExternalLink = ExternalLinkIcon;
export const Code2 = Code2Icon;