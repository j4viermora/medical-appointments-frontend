export interface ILoginResponse {
  message: string;
  user: User;
  company: Company;
  settings: Settings;
  token: string;
}

export interface Company {
  _id: string;
  name: string;
  ownerId: string;
  ownerEmail: string;
  status: boolean;
  plan: string;
  phone: string;
  companyCode: string;
  currency: string;
  exchangeRateToBs: number;
  createdAt: string;
  updatedAt: string;
}

export interface Settings {
  palleteColor?: PalleteColor;
  permissionsApp?: PermissionsApp;
}

export interface PalleteColor {
  primaray?: string;
  secondary?: string;
}

export interface PermissionsApp {
  location?: boolean;
  notification?: boolean;
}

export interface User {
  _id: string;
  uid?: string;
  name: string;
  lastName?: string;
  email: string;
  role: string;
  status: boolean;
  createdAt: string;
  updatedAt?: string;
  companyId: string;
  ownerCompany: string;
}
