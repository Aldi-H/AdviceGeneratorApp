export const useAdvice = (url: string) => {
  return useAsyncData("advice", async () => {
    // const response = await fetch("https://api.adviceslip.com/advice");
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Advice API Error: ${response.status}`);
    }

    return response.json();
  });
};
