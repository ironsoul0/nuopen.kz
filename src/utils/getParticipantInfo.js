const getParticipantInfo = data => {
  const teamName = data[0];
  const type = data[1];
  const organization = data[2];
  const surnameFirst = data[4];
  const surnameSecond = data[9];
  const surnameThird = data[14];
  const check = data[20] ? "Yes" : "No";

  const surnames = [surnameFirst, surnameSecond, surnameThird]
    .filter(element => element)
    .join(", ");

  return [teamName, surnames, organization, type, check];
};

export default getParticipantInfo;
