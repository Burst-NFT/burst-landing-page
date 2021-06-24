import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'burst_original.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sunset.jpg',
    title: 'NFT & Marketplace',
    info: 'The NFT smart contract & marketplace dapp allows anyone to create a Burst NFT from an unlimited number of ERC-20 tokens.',
    info2: 'A user can put their Burst NFT up for sale in the marketplace for any value, allowing pricing premiums and discounts to evolve.',
    url: 'https://ropsten.burst.casa/', // if no url, the button will not show up
    urlBtnText: 'Live on Ropsten', // if no url, the button will not show up
    repo: 'https://github.com/Burst-NFT/Burst', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moon.jpg',
    title: 'Underlying Asset Utilization',
    info: 'Since each Burst NFT contains one or more crypto asset, these underlying assets can be used to generate additional value.',
    info2: 'This value generation can be in the form of familiar protocol functions, such as lending, or through new DeFi derivatives.',
    url: '', // if no url, the button will not show up
    urlBtnText: '', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wall.jpg',
    title: 'Cross Chain Burst NFTs',
    info: 'With DeFi taking place across different blockchains, baskets of assets can be created and traded across chains.',
    info2: '',
    url: '', // if no url, the button will not show up
    urlBtnText: '', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Check out Twitter to stay up-to-date!',
  btn: 'Follow us',
  url: 'https://twitter.com/burst_protocol',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/burst_protocol',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Burst-NFT/Burst',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
