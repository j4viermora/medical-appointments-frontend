import { ILoginResponse } from 'interfaces/routes.interfaces';
import { appRequest } from './config';

export const login = async (data: { password: string; email: string }) => {
  return appRequest.post<ILoginResponse>('/auth/login', data);
};

export const refresh = async () => {
  return appRequest.get<ILoginResponse>('/auth/resfresh-token');
};
