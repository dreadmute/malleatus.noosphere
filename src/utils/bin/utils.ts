import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  let message = '<ins>Available Log Queries:</ins> \n'
  message += 'logs        - Query list of available ship logs \n'
  message += 'retrieve ## - Access specified ship log contents \n'
  message += 'latest      - Access latest ship log \n'
  message += 'disposition - Current target Administratum entry (requires active Administratum login session) \n'

  message += '\n<ins>Available Meta Queries:</ins> \n';
  message += 'whoami      - Current logged in user ident \n'
  message += 'theme       - Terminal theme cogitation engine \n'
  message += 'date        - Onboard ship mark \n'
  message += 'weather     - Query localized space weather report \n'

  message += '\n<ins>Departmento Administratum Queries Only:</ins> \n';
  message += 'about       - Noospheric terminal engineer ident \n'
  message += '<del>sudo</del>        - █████ █████ ████ ███ ██ \n'

  message += `\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`

  return message;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'Munitorum Strategic Intelligence Collective Officer Tau Zeta 19';
};

export const date = async (args: string[]): Promise<string> => {
  let today = new Date();
  let origin = new Date("2/4/2022");
  let difference = Math.round((today.getTime() - origin.getTime()) / (1000 * 3600 * 24));
  return `9.096.999.M41 + ${difference} terran solar days since Trivilus incident`;
};

// export const gui = async (args: string[]): Promise<string> => {
//   window.open('https://m4tt72.com', '_self');

//   return 'Opening GUI version...';
// };

// export const email = async (args: string[]): Promise<string> => {
//   window.open('mailto:hi@nm4tt72.com');

//   return 'Opening mailto:hi@m4tt72.com...';
// };

// export const vi = async (args: string[]): Promise<string> => {
//   return `why use vi? try 'emacs'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `why use vim? try 'emacs'.`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `really? emacs? you should be using 'vim'`;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  let message = ''
  message += `Permission denied: unable to execute the command '${args[0]}' as root.\n`
  message += `Old Terran audio based rebuke has been issued.\n`
  return message;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/dreadmute/malleatus.noosphere', '_blank');
  }, 1000);

  return 'Opening repository...';
};

// export const donate = async (args?: string[]): Promise<string> => {
//   window.open(packageJson.funding.url, '_blank');

//   return 'Opening donation url...';
// };

// export const banner = (args?: string[]): string => {

//   return `

  //   ███    ███  █████  ██      ██      ███████  █████  ████████ ██    ██ ███████ 
  //   ████  ████ ██   ██ ██      ██      ██      ██   ██    ██    ██    ██ ██      
  //   ██ ████ ██ ███████ ██      ██      █████   ███████    ██    ██    ██ ███████ 
  //   ██  ██  ██ ██   ██ ██      ██      ██      ██   ██    ██    ██    ██      ██ 
  //   ██      ██ ██   ██ ███████ ███████ ███████ ██   ██    ██     ██████  ███████ 
  //                         NOOSPHERE ACCESS TERMINAL v${packageJson.version}

  // ++ This NOOSPHERIC ACCESS TERMINAL is a fork of recovered <a href="https://github.com/m4tt72/terminal">original STC</a> ++

  // Status:             Standby
  // Recon Focus:        Tyranid Hive Fleet Designation MYRKR
  // Retrieval Target:   ██████████████████████████

  // Type 'help' to see list of available commands.
  // Type 'latest' to retrieve latest reports from Shield Host Dreadsmith.
//   `;
// };
