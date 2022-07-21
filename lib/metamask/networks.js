export const switchToNetwork = async (chainId) => {
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: chainId,
      },
    ],
    id: 1,
    jsonrpc: "2.0",
  });
};

export const addNetwork = async (params) => {
  console.log(params);
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: params,
    id: 1,
    jsonrpc: "2.0",
  });
};
