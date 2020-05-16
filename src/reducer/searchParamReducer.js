const initialState = {
  searchText: ''
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default channelReducer;
