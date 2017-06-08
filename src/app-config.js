/**
 * Created by lost on 30-May-17.
 */
export const defaultConfig = {

  deleteTaskWithoutConfirm: false,
  version: '0.0.1',
  creator: 'Andrey Sanatullov',
  appName: 'Todo app'

}

export const configFromStorage = () => {
  return localStorage.config
}