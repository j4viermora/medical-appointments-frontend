import { ILoginResponse } from 'interfaces';
import { IEventsResponse } from 'interfaces/events.interfaces';
import { appRequest } from './config';

export const login = async (data: { password: string; email: string }) => {
	return appRequest.post<ILoginResponse>('/auth/login', data);
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
}) => {
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
