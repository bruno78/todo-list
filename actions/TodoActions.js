import dispatcher from "../js/dispatcher"

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos(){
  //axious("http://www.google.com").then(data) => {
  //  console.log("got the data", data)
  //}

  dispatcher.dispatch({type: "FETCH_TODOS"});

  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 113464613,
        text: "Go Shopoping Again",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: true
      },
    ]});
  }, 1000);
}
