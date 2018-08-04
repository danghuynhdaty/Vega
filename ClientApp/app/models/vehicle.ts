export interface IKeyValuePair {
  id: number;
  name: string;
}
export interface IContact {
  name: string;
  email: string;
  phone: string;
}

// tslint:disable-next-line:interface-name
export interface Vehicle {
  id: number;
  model: IKeyValuePair;
  make: IKeyValuePair;
  isRegistered: boolean;
  features: IKeyValuePair[];
  contact: IContact;
  lastUpdate: string;
}

// tslint:disable-next-line:interface-name
export interface SaveVehicle {
  id: number;
  modelId: number;
  makeId: number;
  isRegistered: boolean;
  features: number[];
  contact: IContact;
}
