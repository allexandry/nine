
export interface Plan {
  id: string;
  name: string;
  price: number;
  duration: number; // in seconds
  description: string;
  speed: string;
}

export interface Session {
  planName: string;
  remainingTime: number; // in seconds
}

export enum ConnectionStatus {
  DISCONNECTED,
  CONNECTING,
  CONNECTED,
  ERROR,
}

export enum UserRole {
  MERCHANT = 'merchant',
  CLIENT = 'client',
}
