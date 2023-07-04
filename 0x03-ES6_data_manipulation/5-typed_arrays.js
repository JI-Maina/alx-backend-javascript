export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const view1 = new DataView(buffer);

  if (position >= 0 && position < length) {
    view1.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }

  return view1;
}
