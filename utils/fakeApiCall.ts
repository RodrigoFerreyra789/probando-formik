export const fakeApiCall = (time: number) =>
    new Promise((acc) => setTimeout(acc, time));
