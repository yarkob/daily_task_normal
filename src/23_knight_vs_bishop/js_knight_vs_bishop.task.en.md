Write a function `getWinner` that accepts two arrays `knightPosition` and `bishopPosition` and determines which chess piece is the winner.

Each array contains an integer and a letter that represent the positions of the pieces on the chessboard (e.g. `[4, 'C']` and `[6, 'D']`).

The function returns a string:

`'Knight'` if the knight can capture the bishop;
`'Bishop'` if the bishop can capture the knight;
`'None'` if both pieces are safe.

If you are not familiar with chess game you can learn more [here](https://en.wikipedia.org/wiki/Chess).

Examples:

```javascript
getWinner([3, 'B'], [5, 'C']) === 'Knight';
getWinner([4, 'H'], [5, 'G']) === 'Bishop';
getWinner([1, 'F'], [7, 'B']) === 'None';
```
