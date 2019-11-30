/*
  For tests. Finds all of a data-test attribute within a component and returns total.
*/
export const findByDataTest = (component, attribute) => {
  const wrapper = component.find(
    `[data-test='${attribute}']`
  );
  return wrapper;
};
