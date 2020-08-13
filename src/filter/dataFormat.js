export default function (num) {
  // eslint-disable-next-line no-unused-vars
  let data = '';
  // eslint-disable-next-line radix
  data = new Date(parseInt(num) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
  return data;
}
