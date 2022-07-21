import { getLatest } from '../../api';

export const latest = async (args: string[]): Promise<string> => {
  const data = await getLatest();

  return data;
};