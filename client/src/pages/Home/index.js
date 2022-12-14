import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import Listings from '../../components/Listings';
import useRentals from '../../hooks/useRentals';
import { colors } from '../../theme';

const Home = () => {
  const { active } = useWeb3React();
  const { rentalsAddress } = useRentals();

  const NotActive = () => {
    return (
      <Text>
        Connect to the{' '}
        {
          <Text>
            <a style={{ color: colors.green }} href="https://goerli-faucet.pk910.de/" target="blank">
              Goerli
            </a>
          </Text>
        }{' '}
        testnet to continue.
      </Text>
    );
  };

  return (
    <>
      <Text center t1 style={{ marginBottom: '20px' }}>
        Rent an apartment with ETH.
      </Text>
      {!active && <NotActive />}
      {rentalsAddress && <Listings rentalsAddress={rentalsAddress} />}
      <div style={{ position: 'absolute', bottom: '5%' }}>
        <Link to="/rented" style={{ color: colors.red }}>
          See rented apartments
        </Link>
      </div>
    </>
  );
};

export default Home;
