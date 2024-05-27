import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case success:
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case fail:
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};
function DatafetchUseReducer1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? error : null}
    </div>
  );
}

export default DatafetchUseReducer1;
