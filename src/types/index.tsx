export interface IUser {
  id: string;
  name: string;
  avatarUrl: string;
  login: string;
  bio: string;
  location: string;
  websiteUrl: string;
  status?: {
    message: string;
  };
}

export interface IRepository {
  name: string;
  id: string;
  description: string;
  updatedAt: Date;
  licenseInfo: {
    spdxId: string;
  };
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  primaryLanguage: {
    id: string;
    name: string;
    color: string;
  };
}
