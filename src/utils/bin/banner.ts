import { getBanner } from '../../api';


export const banner = async (args: string[]): Promise<string> => {
  const data = await getBanner();

  return data;
};