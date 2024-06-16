import {
  faFileContract,
  faInbox,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
} from '@fortawesome/free-regular-svg-icons';

const dropDownMenuList = [
  { id: 1, icon: faArrowAltCircleLeft, text: 'Вихідний документ' },
  { id: 2, icon: faArrowAltCircleRight, text: 'Внутрішній документ' },
  { id: 3, icon: faArrowAltCircleDown, text: 'Вхідний документ' },
  { id: 4, icon: faSuitcase, text: 'Відрядження' },
  { id: 5, icon: faInbox, text: 'Довіреність' },
  { id: 6, icon: faFileContract, text: 'Договір' },
];

export default dropDownMenuList;
