/**
 * Created by lost on 03-Jun-17.
 */
import defaultConfig from '../app-config'

let configFromStorage = {}

const config = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_DELETE_TASK_WITHOUT_CONFIRM':
      return {
        ...state,
        deleteTaskWithoutConfirm: !state.deleteTaskWithoutConfirm
      };
    default: {
      if (state) {
        return state
      }
      return (configFromStorage ? configFromStorage : defaultConfig)
    }
  }
};

export default config