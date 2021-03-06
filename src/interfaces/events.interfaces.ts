// Generated by https://quicktype.io

export interface IEventsResponse {
	data: Data;
}

export interface Data {
	docs: IEvent[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: null | boolean;
	nextPage: null | boolean;
}

export interface IEvent {
	_id: string;
	id: string;
	title: string;
	description: string;
	dateEvent: string;
	startDateEvent: string;
	endDateEvent: string;
	companyId: string;
	branchOffice: string;
	doctor: string;
	patient: Patient;
	patientDni: string;
	status: boolean;
	state: string;
	paymentState: string;
	observations: string;
	confirmationMessageSent: boolean;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
}

export interface Patient {
	_id: string;
	name: string;
	lastName: string;
	email: string;
	dni: string;
	city: string;
	phone: string;
	kind: string;
	createBy: string;
	companyId: string;
	companyCode: string;
	companyEmail: string;
	code: string;
	status: boolean;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
