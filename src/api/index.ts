import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getBanner = async () => {
  const { data } = await axios.get('https://raw.githubusercontent.com/dreadmute/crusade_log/main/banner.html');

  return data;
};

export const getLogs = async () => {
  const { data } = await axios.get('https://api.github.com/repos/dreadmute/crusade_log/git/trees/main?recursive=1');
  const jsonLogs = JSON.stringify(data);

  let message = '';
  let logs = [];

  for (var i=0; i<data['tree'].length; i++){
    let path = JSON.stringify(data['tree'][i]['path']);
    if (path.includes('logs/')) {
      let log = path.split("/")[1].replace(`.txt"`,'').replace(`.html"`,'');
      logs.push(log);
    }
  }
  
  logs.sort(function(a, b) { return b - a});

  for (const log of logs) {
    message += `${log} \n`;
  }

  return message;
};

export const getLatest = async () => {
  const { data } = await axios.get('https://api.github.com/repos/dreadmute/crusade_log/git/trees/main?recursive=1');

  let logs = [];

  for (var i=0; i<data['tree'].length; i++){
    let path = JSON.stringify(data['tree'][i]['path']);
    if (path.includes('logs/')) {
      let log = path.split("/")[1].replace(`.txt"`,'').replace(`.html"`,'');
      logs.push(log);
    }
  }
  logs.sort(function(a, b) { return b - a});
  
  const latest = await axios.get(`https://raw.githubusercontent.com/dreadmute/crusade_log/main/logs/${logs[0]}.html`);
  return latest.data;

};

export const getLog = async(log: string) => {
  const { data } = await axios.get(`https://raw.githubusercontent.com/dreadmute/crusade_log/main/logs/${log}.html`);

  return data;
};

