// export const anotherName = (name) => {
//   return {
//     type: "CHANGE_NAME",
//     payload: name,
//   };
// };
export const anotherName = (name) => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res2 = await data.json();

    dispatch({ type: "CHANGE_NAME", payload: res2[0].name });
  };
};
export const addWish = () => {
  return {
    type: "add_wish",
    payload: "code",
  };
};
