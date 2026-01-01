export interface Welcome {
  profiles: Profile[];
  tweets: Tweet[];
}

export interface Profile {
  id: number;
  verified: boolean;
  handle: string;
  name: string;
  bio: string;
}

export interface Tweet {
  id: number;
  handle: string;
  text: string;
  createdOn: string;
}
