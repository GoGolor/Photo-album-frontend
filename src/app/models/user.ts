export interface User {
  id: string;
  login: string;
  password: string;
  isAdmin: boolean;
  acceptanceOfficer: boolean;
  verificationOfficer: boolean;
}
