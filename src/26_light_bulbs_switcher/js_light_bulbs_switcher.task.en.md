Some light bulbs are placed in a circle (clockwise direction). Each one is either
`on (1)` or `off (0)`.

Every turn, the light bulbs change their states. If a light bulb was `on` at the
previous turn, the light bulb **to the right of it** changes its state. For example,
if `lights[0]` was `on`, then, if `lights[1]` was `on`, it turns off and vice versa.

Create a function `switchLights` that accepts an array `lights` consisting of `0`
and `1` representing the light bulbs' states and a non-negative integer `n`. The
function should return an array representing the states of the light bulbs after
`n` turns.

`lights` contains at least 2 elements.

Have a look at the examples:

```
lights = [0, 1, 1, 0, 1, 1];
n = 2;

switchLights(lights, n) === [1, 0, 1, 1, 0, 1];

0. [0, 1, 1, 0, 1, 1] - original state
1. [1, 1, 0, 1, 1, 0]- 1st turn // lights[2], lights[3], lights[5] and lights[0] changed their states
2. [1, 0, 1, 1, 0, 1] - 2nd turn // lights[1], lights[2], lights[4] and lights[5] changed their states

...

lights = [0, 0, 1, 0];
n = 1;

switchLights(lights, n) === [0, 0, 1, 1];

0. [0, 0, 1, 0] - original state
1. [0, 0, 1, 1]- 1st turn // lights[3] changed its state
```
