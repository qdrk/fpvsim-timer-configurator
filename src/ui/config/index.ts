import GitRepository from '../models/GitRepository';

interface IConfig {
  documentationUrl: string;
  githubRepositoryUrl: string;
  facebookGroupUrl: string;
  discordUrl: string;
  openCollectiveUrl: string;
  fpvsimTimerGit: GitRepository;
}

export const Config: IConfig = {
  documentationUrl: 'https://fpvsim.com/',
  githubRepositoryUrl: 'https://github.com/qdrk/fpvsim-timer',
  facebookGroupUrl: 'https://www.facebook.com/groups/636441730280366',
  discordUrl: 'https://discord.gg/dS6ReFY',
  openCollectiveUrl: 'https://opencollective.com/expresslrs',
  fpvsimTimerGit: {
    cloneUrl: 'https://github.com/qdrk/fpvsim-timer',
    url: 'https://github.com/qdrk/fpvsim-timer',
    owner: 'fpvsim.com',
    repositoryName: 'fpvsim-timer',
    rawRepoUrl: 'https://raw.githubusercontent.com/qdrk/fpvsim-timer',
    srcFolder: 'src',
    tagExcludes: [],
  },
};

export default Config;
