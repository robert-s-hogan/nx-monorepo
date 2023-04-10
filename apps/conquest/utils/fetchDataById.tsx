export const fetchDataById = async (
  endpoint: string,
  id: number
): Promise<any> => {
  const res = await fetch(`http://localhost:3333/api/${endpoint}/${id}`);
  const data = await res.json();
  return data.data;
};
