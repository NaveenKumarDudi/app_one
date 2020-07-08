export interface IUser {
    userId?: string;
    shopId?: string;
    clientId?: string;
    password?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    contact?: string;
    deliveryAddresses: IAddress []
}

export interface IAddress {
    addressType?: string;
    city?: string;
    country?: string;
    defaultAddress?: boolean;
    fullName?: string;
    landMark?: string;
    line1?: string;
    line2?: string;
    mobileNumber?: string;
    pinCode?: string;
    state?: string; 
}