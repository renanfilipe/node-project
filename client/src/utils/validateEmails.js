const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .replace(/\s/g, "") // Remove all white space characters (needs to be "greedy" to not stop after finding the first match)
    .replace(/,,+/g, ",") // Remove any surplus commas from anywhere in the string
    .replace(/(^,|,$)/g, "") // Remove a comma (if present) from the start or end of the string
    .split(",")
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
