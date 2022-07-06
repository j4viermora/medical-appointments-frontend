import { AxiosResponse } from 'axios';
import { IListPatientsResponse, ILoginResponse } from 'interfaces';
import { IEventsResponse } from 'interfaces/events.interfaces';
import { appRequest, publicRequest } from './config';

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

type IGetPatiensParams = {
	limit?: number | string;
	page?: number | string;
	sort?: number | string;
};

export const getPatiens = async ({
	limit = 15,
	page = 1,
	sort = 'desc',
}: IGetPatiensParams) => {
	const resp = appRequest.get<IListPatientsResponse>(
		'/contacts/list-contact/62ae5174312983efc4ecf1f7?kind=client',
		{
			params: {
				limit,
				page,
				sort,
			},
		}
	);

	return resp;
};
