// reducer function
export const reducer = (state, action) => {
    // action is what we are trying to do
    // manipulate the state
    if (action.type === "ADD_ITEM") {
      const newPeople = [...state.people, action.payload]
      return { ...state, people: newPeople, isModalOpen: true, modalContent: "item added" }
    }
    if (action.type === "NO_VALUE") {
      return { ...state, isModalOpen: true, modalContent: 'Please Enter Value' }
    }
    if (action.type === "CLOSE_MODAL"){
      return {...state, isModalOpen: false}
    }
    if (action.type === "REMOVE_ITEM"){
      const newPeople = state.people.filter((person) => 
        person.id !== action.payload
      )
      return {...state,people: newPeople}
    }
    return state
    // throw new Error("No matching action type")
  }