export const findImages = (arr, funcSeeker, isMultiple = true) => {
  return Promise.all(
    arr.map(async (item) => {
      const images = await funcSeeker(item.pro_id);
      if (isMultiple) {
        item.images = images;
      } else {
        item.image = images[0].path;
      }
      return item;
    })
  );
};
