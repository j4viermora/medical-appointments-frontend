export type { IRoute } from './routes.interfaces';
export type { ILoginResponse, Company, User } from './auth.interfaces';
export type { IPatient, IListPatientsResponse } from './patients.interfaces';
export type { IDoctors, IDoctorResponse } from './doctors.interface'



export interface IMetadata {
    totalDocs: number;
    // offset?: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: boolean | null;
    nextPage: boolean | null;
}