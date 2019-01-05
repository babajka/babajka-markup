export const withIncludes = cache => (render, data) =>
  render(data, null, (file, childData) => cache[file]({ ...data, ...childData }));
