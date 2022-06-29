import { Company, User } from 'interfaces/routes.interfaces';
import { atom } from 'jotai';
import { useAtom } from 'jotai';

interface ISession {
  company: Company;
  user: User;
  isLogged: boolean;
  token: string;
}

const initialState: ISession = {
  company: {
    _id: '',
    companyCode: '',
    createdAt: '',
    currency: '',
    exchangeRateToBs: 0,
    name: '',
    ownerEmail: '',
    ownerId: '',
    phone: '',
    plan: '',
    status: false,
    updatedAt: '',
  },
  user: {
    _id: '',
    companyId: '',
    createdAt: '',
    email: '',
    name: '',
    ownerCompany: '',
    role: '',
    status: false,
    lastName: '',
    uid: '',
    updatedAt: '',
  },
  isLogged: false,
  token: '',
};

const sessionAtom = atom<ISession>(initialState);

export const useSession = () => {
  const [session, updateSession] = useAtom(sessionAtom);
  const setSession = (newSession: ISession) => {
    updateSession(newSession);
  };

  return { setSession, session };
};
