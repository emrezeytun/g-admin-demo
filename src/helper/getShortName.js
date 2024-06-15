const getShortName = (name) => {
  const [firstName, secondName] = name.split(' ');
  if (firstName && secondName) {
    return (
      firstName.charAt(0).toUpperCase() + secondName.charAt(0).toUpperCase()
    );
  } else {
    return firstName.charAt(0).toUpperCase();
  }
};

export default getShortName;
