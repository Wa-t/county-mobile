
export const updateState = (data) => ({
  type: "UPDATE_STATE",
  payload: {
    ...data,
  },
});

export const showLoading = () => ({
  type: "UPDATE_STATE",
  payload: {
    loading: true,
  },
});

export const hideLoading = () => ({
  type: "UPDATE_STATE",
  payload: {
    loading: false,
  },
});
