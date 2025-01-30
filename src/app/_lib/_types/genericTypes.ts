export type Project = {
  id: number;
  name: string;
  smallDescription: string;
  description: string;
  techStack: string[];
  img: string;
  url?: string;
  githubLink?: string;
};

export type Cert = {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  logo?: string;
};
