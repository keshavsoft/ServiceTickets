let PostFunc = ({ inPassword }) => {
  if ("KSPassword" in process.env === false) {
    console.log("KSPassword not found in evn");
    return false;
  };

  if (inPassword === process.env.KSPassword) {
    return true;
  };

  return false;
};

export { PostFunc };