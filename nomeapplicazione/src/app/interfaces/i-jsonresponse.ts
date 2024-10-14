import { Ipost } from './ipost';

export interface IJSONresponse {
  posts: Ipost[];
  total: number;
  skip: number;
  limit: number;
}
