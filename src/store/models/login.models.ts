export interface Login {
    username: string;
    password: string;
    photoUrl: string;
}

export interface SignUp {
    first: string;
    last: string;
    email: string;
    photoUrl: string;
}

export interface ServiceInfo {
    payload?: any;
    serviceUrl: string;
    queryParams?: any;
    headerParams?: any;
    dataRestriction?: string;
    dataFilters?: any;
    querySessionParams?: any;
    groupBy?: any;
}