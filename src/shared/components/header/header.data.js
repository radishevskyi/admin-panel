import { v4 as uuidv4 } from 'uuid';
import { faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';

const dropDownUserList = [
  { id: uuidv4(), icon: faUser, text: 'Radishevskyi A.' },
  { id: uuidv4(), icon: faSignOut, text: 'Logout', action: 'logout' },
];

export default dropDownUserList;
