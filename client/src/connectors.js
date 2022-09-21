import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({ supportedChainIds: [5 /* Goerli */, 1337 /* Ganache test */] });
