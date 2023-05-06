// utils/findMatchingUrl.ts
export const findMatchingUrl = (
  data: any,
  urlFieldName: string,
  targetUrl: string
) => {
  return data?.results?.find(
    (result: any) => result[urlFieldName] === targetUrl
  );
};
