export default function (state, action) {
  switch (action.type) {
    case 'save-settings':
      return {
        ...state,
        isSettingsSaved: true
      };
    case 'change-value':
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.payload.name]: action.payload.value
        }
      };
    case 'clear-value':
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.payload.name]: ''
        }
      };
    case 'add-build':
      return {
        ...state,
        builds: [...state.builds, action.payload]
      }
    default:
      return state;
  }
}