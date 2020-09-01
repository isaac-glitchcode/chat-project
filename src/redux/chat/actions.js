export const setRegister = (register) =>{
  return{
    type: "SET_REGISTER",
    payload : register
  }
}
export const setInputName = (text) =>{
  console.log(text)
  return{
    type : "INPUT_NAME",
    payload: text
    
  }
}
export const setInputValue = (text) =>{
    return {
        type:"INPUT_VALUE",
        payload : text
    }
}
export const sendMessage = (text) => {
  console.log("Action: ",text)
    return{
        type : "SEND_MESSAGE",
        payload:text
    }

}

export const showOptions = (index) => {
    return {
      type: "SHOW_OPTIONS",
      payload: index
    };
  }; 
  
export const deleteMessage = (index) => {
  return {
    type: "DELETE_MESSAGE",
    payload: index
  };
};
