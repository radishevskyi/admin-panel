import { v4 as uuidv4 } from 'uuid';
import { faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/shared/context/auth';

const dropDownUserList = () => {
  const { username } = useAuth();

  return [
    { id: uuidv4(), icon: faUser, text: username },
    { id: uuidv4(), icon: faSignOut, text: 'Logout', action: 'logout' },
  ];
};

export default dropDownUserList;
