const getCrypto = async (limit: number) => {
  const res = await fetch(`https://api.coincap.io/v2/assets/?limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch crypto");
  return res.json();
};
export default getCrypto;
