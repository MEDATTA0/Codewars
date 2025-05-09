function dataReverse(data) {
  const reversedData = [];
  for (let i = data.length - 1; i >= 0; i-=8)
    {
      reversedData.push(...data.slice(i - 7, i + 1))
    }
  return reversedData;
}