import { AxiosResponse } from 'axios';
import { IListPatientsResponse, ILoginResponse } from 'interfaces';
import { IEventsResponse } from 'interfaces/events.interfaces';
import { IPatienDataRegister } from 'interfaces/patients.interfaces';
import { appRequest, publicRequest } from './config';

type IGetPatiensParams = {
	limit?: number | string;
	page?: number | string;
	sort?: number | string;
	companyId: string;
};

export const login = async (data: { password: string; email: string }) => {
	return publicRequest.post<ILoginResponse>('/auth/login', data);
};

export const refresh = async () => {
	return appRequest.get<ILoginResponse>('/auth/resfresh-token');
};

export const getEventByCompany = async ({
	limit = 15,
	page = 1,
	doctor,
	from,
	includeInactive = false,
	to,
	companyId,
}: {
	from?: string;
	to?: string;
	includeInactive?: boolean;
	limit?: number | string;
	page?: number | string;
	doctor?: string;
	companyId: string;
}): Promise<AxiosResponse<IEventsResponse, any>> => {
	const resp = appRequest.get<IEventsResponse>(
		`/events/company/id/${companyId}`,
		{
			params: {
				limit,
				page,
				doctor,
				from,
				to,
				includeInactive,
			},
		}
	);

	return resp;
};

export const registerPatients = (patientsData: IPatienDataRegister) => {
	const resp = appRequest.post('/contacts/add', { ...patientsData });
	return resp;
};

export const getPatiens = async ({
	limit = 15,
	page = 1,
	sort = 'desc',
	companyId,
}: IGetPatiensParams) => {
	const resp = appRequest.get<IListPatientsResponse>(
		`/contacts/list-contact/${companyId}`,
		{
			params: {
				limit,
				page,
				sort,
				kind: 'client',
			},
		}
	);

	return resp;
};

export const removePatient = async (id: string) => {
	const resp = appRequest.delete(`/contacts/delete/${id}`);
	return resp;
};

export const getPatiensByDni = (dni: string, companyId: string) => {
	const resp = appRequest.get(`/contacts/${dni}`, { params: { companyId } });

	return resp;
};
