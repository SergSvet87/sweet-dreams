import { createDomain } from 'effector-next'

const user = createDomain()

export const setUser = user.createEvent()
// export const setUserCity = user.createEvent{ city; street }()

export const $user = user
  .createStore({})
  .on(setUser, (_, user) => user)

// export const $userCity = user
//   .createStore({ city: '', street: '' })
//   .on(setUserCity, (_, city) => city)