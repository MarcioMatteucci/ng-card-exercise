export type Issue = {
  user: string;
  date: Date;
  description: string;
  state: ISSUE_STATE;
};

export enum ISSUE_STATE {
  valid = 'valid',
  invalid = 'invalid',
}
