export default function makeMaskCardNumber() {
  return function maskCardNumber(value) {
    const number = value.match(/.{4}/g);

    number[0] = number[0].replace(/[0-9]/g, '*');
    number[1] = number[1].replace(/[0-9]/g, '*');
    number[2] = number[2].replace(/[0-9]/g, '*');

    return number.join(' ');
  };
}
