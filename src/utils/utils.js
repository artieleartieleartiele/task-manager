export const generateId = () => {
  const currDate = new Date();
  return (
    currDate.getFullYear() + currDate.getMilliseconds() + currDate.getTime()
  );
};
