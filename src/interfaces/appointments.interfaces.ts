// Generated by https://quicktype.io

import { IPatient } from "./patients.interfaces";

export interface IAppointmentsResponse {
	data: Data;
}

export interface Data {
	docs: IAppointment[];
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

export interface IAppointment {
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
	patient: IPatient;
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
