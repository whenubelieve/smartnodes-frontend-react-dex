import React, { useState, useEffect } from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardBody, Heading } from 'uikit'
import { ethers } from 'ethers';
import { AppHeader, AppBody } from '../../components/App'
import Page from '../Page'
import CountDown from './CountDown'

// import Web3 from 'web3';s


import tempABI from '../../contracts/smartnodes.json';

const contractABI = tempABI.abi;
const contractAddress = '0xa5CD786fDA5802BeD0138E3e591eEB52712DD9Ee';

const StyledCard = styled(Card)`
  min-height: 400px;
  min-width: 450px;
  margin-top: 50px;
`

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`

const RowBlockBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 22px;
  margin-top: 24px;
  padding: 8px;
  border-radius: 12px;
  background: #3a3a3c;
  text-align: center;
  width: 80%;
  border: 0px;
  :focus{
    border: 0px;
    outline: 0;
  }
`
const Actions = styled.div`
  margin-top: 24px;
`
const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: inline-flex;
  width: 80%;
  font-family: inherit;
  font-size: 16px;
  // font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  background-color: #3a3a3c;
  color: #faa21a;
  // line-height: 1;
  // outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

const StyledButton2 = styled.button`
  align-items: center;
  border: 0;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: inline-flex;
  width: 50px;
  height: 28px;
  font-family: inherit;
  font-size: 14px;
  justify-content: center;
  letter-spacing: 0.03em;
  background-color: #3a3a3c;
  color: white;
  // outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;


const BuyNode = () => {
  const [nodeName, setNodeName] = useState('');
  const buyNode = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // console.log(myAccount.myAccount, nodeName);
        // const newNode = await contract.createNode(myAccount.myAccount, nodeName, 1, true);

        // await contract.on("NodeCreated", (amount, account, blockTime) => {
        //   console.log("Node Successfully created", amount, account, blockTime);
        // });

        // const web3 = new Web3(window.ethereum);
        // // await window.ethereum.enable();
        // const NameContract = new web3.eth.Contract(contractABI, contractAddress);
        // NameContract.createNode(account, '123', 10, true).send();
      }
      else {
        console.log("Connection Error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const inputHandleChange = (e) => {
    setNodeName(e.target.value);
  }

  const [view, setView] = useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <Page>
      <AppBody>
        <AppHeader title='Presale' subtitle='Presale ends in' noConfig />
        <CountDown />

        <StyledCardBody>
          <div className='d-flex flex-row justify-content-between align-items-center' style={{ width: '80%' }}>
            <div>AVAX</div>
            <StyledButton2 onClick={buyNode}>max</StyledButton2>
          </div>

          <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
            <ToggleButton value="list" aria-label="list">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
              <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt">
              <ViewQuiltIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <StyledInput placeholder='node name' id='amountToBuyNode' onChange={inputHandleChange} />
          <StyledButton onClick={buyNode}>Create Smart Node</StyledButton>
        </StyledCardBody>

      </AppBody>
    </Page>
  )
}

export default BuyNode