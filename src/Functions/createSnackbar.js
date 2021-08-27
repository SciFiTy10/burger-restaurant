export const createSnackbar = (title, actionText) => {
  //create the snackbar message
  const message = `1 ${title} was ${actionText} the cart.`;
  //create the data to send to the snackbar
  return {
    open: true,
    message: `Success! ${message}`,
  };
};
