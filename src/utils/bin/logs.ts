import { getLogs } from '../../api';
import { getLog } from '../../api';

export const logs = async (args: string[]): Promise<string> => {
  const data = await getLogs();

  return data;
};

export const retrieve = async (args: string[]): Promise<string> => {
  const logNumber = args.join('+');
  if (!logNumber) {
    return 'Please provide file name. Please use <b>logs</b> query to show list of available files, or <b>latest</b> query for latest uploaded file.';
  }
  const data = await getLog(logNumber);

  return data;
};