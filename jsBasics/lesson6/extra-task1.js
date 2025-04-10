function shortLongShort(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
  }

  console.log(shortLongShort("1", "22"));  // "1221"
  console.log(shortLongShort("22", "1"));  // "1221"
  console.log(shortLongShort("", "hello")); // "hello"
  console.log(shortLongShort("abc", "de")); // "deabcde"
  console.log(shortLongShort("hello ", " abc")); // " abchello abc"