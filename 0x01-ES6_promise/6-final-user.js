import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const allPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const results = [];
  return Promise.allSettled(allPromises).then((promises) => {
    promises.map(({ status, value, reason }) => (
      results.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return results;
  });
}
