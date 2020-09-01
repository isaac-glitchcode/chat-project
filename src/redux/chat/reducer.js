const INITIAL_STATE = {
    messages: [],
    inputValue: "",
    name:"",
    register: false
  };
  
  const chatReducer = (previousState = INITIAL_STATE, action) => {
    let messages = [];
    switch (action.type) {

      case "INPUT_NAME":
        return { ...previousState, name: action.payload };



      case "SET_REGISTER":
        return {...previousState, register:action.payload}



      case "INPUT_VALUE":
        return { ...previousState, inputValue: action.payload };
  



      case "SEND_MESSAGE":
        
        let message = {
          avatar: "http://placehold.it/50/55C1E7/fff&text="+action.payload.name.substr(0,1),
          name: action.payload.name,
          date: new Date(),
          content: action.payload.content,
          showOptions: false
        };
        console.log("desdeReduce",message)
        console.log("Desde el array de mensages:",previousState.messages)
        return {
          ...previousState,
          messages: [...previousState.messages, message]
        };
        



      case "SHOW_OPTIONS":
        messages = [...previousState.messages];
        messages[action.payload].showOptions = !messages[action.payload]
          .showOptions;
        return {
          ...previousState,
          messages: messages
        };
  


      case "DELETE_MESSAGE":
        messages = [...previousState.messages];
        messages.splice(action.payload, 1);
        return { ...previousState, messages: messages, };
  
      

      default:
        return previousState;
    }
  };
  
  export default chatReducer;