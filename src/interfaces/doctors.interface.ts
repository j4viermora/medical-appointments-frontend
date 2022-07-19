export interface IDoctors {
    _id: string;
    name: string;
    phone: string;
    companyId: string;
    createdAt: string;
    updatedAt: string;
}



export interface IDoctorResponse {
    message: string;
    result: Result;
}

interface Result {
    docs: IDoctors[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null;
    nextPage: null;
}

