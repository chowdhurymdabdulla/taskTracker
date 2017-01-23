const INITIAL_DATA = [
  {
    "name": "Test   Task    #1",
    "date": "12/01/2012",
    "assigned": "John   Doe"
}, {
    "name": "Test   Task    #2",
    "date": "12/01/2012",
    "assigned": "John   Doe"
}, {
    "name": "Test   Task    #3",
    "date": "12/01/2012",
    "assigned": "John   Doe"
}, {
    "name": "Test   Task    #4",
    "date": "12/01/2012",
    "assigned": "John   Doe"
}, {
    "name": "Test   Task    #5",
    "date": "12/01/2012",
    "assigned": "John   Doe"
}
];

export default function (state=INITIAL_DATA, action){
  switch(action.type){

    case "ADD_TASK":
      const {name, date,assigned} = action;
      const obj = {
        name,
        date,
        assigned
      }
        return state.concat([obj]);
        // return state.unshift([obj]);
        // return [...state[obj]];

    default:
      return state;
  }
}
