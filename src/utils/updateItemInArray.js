const updateItemInArray = (array, itemId, updateItemCallback) => {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      return item;
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
};

export default updateItemInArray;
