// 5. Move all zeros to the end

const arr = [3, 3, 0, 99, -40];

const moveZeros = () => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
};

console.log(moveZeros(arr));
