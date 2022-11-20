export const getLocalStorageItem = (name, defaultValue) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : defaultValue;
};
