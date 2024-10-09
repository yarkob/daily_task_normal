Write a function `validateIP` that accepts a string `str` and determines whether
`str` contains a valid IPv4 address. The function should return a boolean.

Rules for the valid IP:

- IP consists of four octets, separated by dots;
- each octet contains a value between `0` and `255` inclusive;
- octet can't start with a `0` and contain more that one digit (e.g. `034` is invalid);
- octet can't contain any value except for digits (e.g. letters, spaces and break
  line symbols are invalid).

Examples of valid IPs:

```
5.6.7.8
145.90.53.2
```

Examples of invalid IPs:

```
23.45.67 // three octets
1.2.5.6.8 // five octets
199.564.28.13 // 564 is greater that 255
174.231.093.46 // '093' is invalid
56.128.e1.2 // letters are invalid
```

For this task, you can use [Regular expressions](https://mate-academy.github.io/fe-program/js/topics/regex.html)
