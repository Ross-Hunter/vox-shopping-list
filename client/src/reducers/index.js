const INITIAL_STATE = {
  listItems: [ { name: 'crackers', price: '$2.35', id: 1 } ]
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
