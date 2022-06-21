import { ReactComponent as TicketIcon } from './assets/ticketIcon.svg';
import { ReactComponent as CalendarIcon } from './assets/calendarIcon.svg';
import { ReactComponent as InstagramIcon } from './assets/instagramIcon.svg';
import { ReactComponent as FacebookIcon } from './assets/facebookIcon.svg';
import { ReactComponent as LocationIcon } from './assets/locationIcon.svg';
import { ReactComponent as ClockIcon } from './assets/clockIcon.svg';

const fill = (c) => ({ fill: c });

const icons = {
  TICKET: {
    Icon: TicketIcon,
    iconStyle: fill
  },
  CALENDAR: {
    Icon: CalendarIcon,
    iconStyle: fill
  },
  INSTAGRAM: {
    Icon: InstagramIcon,
    iconStyle: fill
  },
  FACEBOOK: {
    Icon: FacebookIcon,
    iconStyle: fill
  },
  LOCATION: {
    Icon: LocationIcon,
    iconStyle: fill
  },
  CLOCK: {
    Icon: ClockIcon,
    iconStyle: fill
  },
};

export default icons;
