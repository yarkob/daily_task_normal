Create a function `getMove` that accepts an array of strings `board` representing
the board for a Tic-Tac-Toe game.

The board is represented as an array with the following indexes:

```
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
```

The `board` array contains 9 strings which may be:

- `''` representing empty position;
- `'X'` representing the 'X's;
- `'0'` representing the '0's.

The example of the board is:

```
 X |   |
---+---+---
 O |   |
---+---+---
 X |   | 0
```

The array representing such a board is:
`['X', '', '', 'O', '', '', 'X', '', '0']`

Rules for the function are:

- you are playing for the 'X's and it's your turn now;
- you should return the index of the desired move (0-8);
- if you can win the game with one move, you should return the index of this move;
- if you **can't** win the game with one move, you should return the index of any empty position;
- if there can be more than one option available, return any of them.

Examples:

```
getMove(['', '', '', 'O', '', '', 'X', '', '']) === 0 // 1, 2, 4, 5, 7, 8 are available as well
getMove(['O', '', '', 'O', 'X', '', 'X', 'O', 'X']) === 2 // 2 is the only winning move
```
