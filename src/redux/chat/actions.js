export const setInputValue = (text) =>{
    return {
        type:"INPUT_VALUE",
        payload : text
    }
}
export const sendMessage = (text) => {
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