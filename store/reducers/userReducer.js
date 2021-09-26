const initState = {
  isAuth: false,
  token: null,
  userId: null,
  email: '',
  isAdmin: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'SIGN_UP':
      let admin = false;
      if (action.payload.email === 'idox2x@gmail.com') {
        admin = true;
      }
      return {
        ...state,
        isAuth: true,
        token: action.payload.idToken,
        userId: action.payload.localId,
        email: action.payload.email,
        isAdmin: admin,
      };
    case 'AUTO_LOG':
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        userId: action.payload.userId,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default reducer;
