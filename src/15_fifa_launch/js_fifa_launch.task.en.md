Let's write a function `totalWinning` that accepts an object `ticket` with bets, an array `results` and returns a string with the sum of total winning. Here are the rules:

Ticket consists of three bets; each bet is a key-value pair representing the bet and its sum. For example:

```js
{
  Home: '£74';
  Away: '£36';
  Draw: '£5';
}
```

There will always be exactly three bets with strict order `Home`, `Away`, `Draw`. Each bet is for a different game.

The `results` array consists of three elements. Each result is represented by two numbers separated by a hyphen, which looks like this:
`['3-0', '1-1', '0-2']`
In the results array, a higher number on the left side of the pair = Home win, higher on the right = Away win, equal = Draw. Like this:

```
3-0 = Home win
1-1 = Draw
0-2 = Away win
```

For each line on your ticket, check whether or not the result matches. If it does, you win the amount specified on the ticket for that match.

Return your total winning as a string with the `£` sign like this: `£100`.

Examples:

```js
const ticket = {
  Home: '£74',
  Away: '£36',
  Draw: '£5',
};
const results = ['3-0', '1-1', '0-2'];
totalWinning(ticket, results) === '£74';
// first bet won, second bet lost, third bet lost

const ticket = {
  Home: '£25',
  Away: '£50',
  Draw: '£10',
};

const results = ['2-4', '0-1', '3-3'];
totalWinning(ticket, results) === '£60';
// first bet lost, second bet won, third bet won
```
