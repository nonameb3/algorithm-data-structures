function rotLeft(a, d) {
  const newarr = [];
  const n = a.length;
  const mod = d % n;

  for (let i = 0; i < a.length; i++) {
    newarr.push(a[(i + mod) % n]);
  }
  return newarr;
}

rotLeft([1, 2, 3, 4, 5], 4); // 5 1 2 3 4
rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10); // 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77
