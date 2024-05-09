export const MY_CONTRACT_ADDRESS = "0x3BbC0d4dBf841A3A5AA8EbBee6a9E08c2537093D";
export const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initialSentence",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getSentence",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newSentence",
          "type": "string"
        }
      ],
      "name": "setSentence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];