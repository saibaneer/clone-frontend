export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatAddress = (addr: string | undefined) => {
  return `${addr?.substring(0, 15)}...`;
};

export const convertTokenUnits = (tokenValue, decimals = 18) => {
  if (tokenValue) {
    // Convert the token value to a BigInt if it's not already
    const bigIntValue = BigInt(tokenValue);

    // Calculate the divisor based on the number of decimals (10^decimals)
    const divisor = BigInt(10 ** decimals);

    // Perform the division to get the human-readable value
    const readableValue = Number(bigIntValue) / Number(divisor);

    return readableValue.toLocaleString(); // Return the formatted number with commas
  }

  return 'N/A';
};
