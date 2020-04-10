export interface UserData {
    name?: string,
    email: string,
    photoUrl?: string,
    uid: string,
    displayName?: string,
    photoURL?: string,
    phoneNumber?: string,
    providerId: string,
    error?: string
}

export interface Credentials {
    email: string,
    password: string
}
export interface UserState {
    user: UserData;
    loaded: boolean;
    loading: boolean;
}