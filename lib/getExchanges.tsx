const getExchanges = async () => {
  const res = await fetch("https://api.coincap.io/v2/exchanges");
  if (!res.ok) throw new Error("Failed to get exchanges");
  return res.json();
};

export default getExchanges;
