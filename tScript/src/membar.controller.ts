/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-unresolved
import { getMembersApi } from './member.sravise';

export default (req: any, res: any) => {
  res.json(getMembersApi());
};
