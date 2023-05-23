export type ScoreRequestBody = {
  name: string;
  word: string;
};

export type CustomError = { status: number; error: Error };

export type ValidatedRequest = {
  valid: boolean;
  value: ScoreRequestBody | CustomError;
};

export type OxfordDictionary = {
  _id: { $oid: string };
  word: string;
  definition: string;
  __v: number;
};
