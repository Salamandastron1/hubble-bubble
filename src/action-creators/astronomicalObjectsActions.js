export const starsReceived = astronomicalObjects => ({
  type: 'STARS_RECEIVED',
  astronomicalObjects,
})

export const toggleSelected = id => ({
  type: 'TOGGLE_SELECTED',
  id,
})