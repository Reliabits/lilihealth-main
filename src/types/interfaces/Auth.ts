/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

export interface ISocialRegister {
    address: string;
    role: string;
    permission: string;
    phoneNumber: string;
    additionalDetails: string;
    platform: string;
    isActive: boolean;
    profileImage: number;
    name: string;
    email: string;
    token: string;
    id: string;
}

export interface IRegister {
    address: string;
    role: string;
    permission: string;
    phoneNumber: string;
    additionalDetails: string;
    platform: string;
    profileImage: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ISocialLogin {
    token: string;
    id: string;
    platform: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IForgetPassword {
    email: string;
}