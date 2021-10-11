export default function (state, action) {
  switch (action.type) {
    case 'save-settings':
      return {
        ...state,
        isSettingsSaved: true
      };
    case 'NEW_POST':
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}