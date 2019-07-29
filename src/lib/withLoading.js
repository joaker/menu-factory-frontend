export const withLoading = (setter, promise) => {
  setter(true);
  return promise.then((result, error) => {
    setter(false);
    if (error) throw error;
    return result;
  });
};

export default withLoading;
