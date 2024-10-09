In Pokemon Go, an easy way to increase your XP level is to evolve pokemon you've
caught.

Every time you catch a pokemon, you also receive some `Candies`, and once you have
enough, you can spend them to evolve a pokemon.

To evolve a Pidgey costs `12` Pidgey Candies, but you'll be rewarded with `500`
XP and `1` extra Pidgey Candy. Keep that in mind that it's possible to evolve one
Pidgey only once - further evolution of the same Pidgey is impossible.

If you have surplus Pidgeys, you can exchange them for Pidgey Candies (1 Pidgey
for 1 Candy). Unfortunately, you can't exchange Pidgey candies for pokemons.

Create a function `calcMaxXP` that accepts 2 non-negative integers `pidgeys` representing
the number of Pidgeys and `candies` representing the number of Pidgey Candies.
The function should return the maximum XP gained from evolving the highest possible
number of Pidgeys.

For example, you have `2` Pidgeys and `23` Pidgey Candies, you can evolve `1` Pidgey
for `12` Pidgey Candies. You receive `500` XP. You have `11` Pidgey Candy left,
but you received `1` Pidgey Candy for evolving the first Pidgey, making the `12`
you need to evolve the second. You will end up with `1000` XP.

You'll need to take into account the extra Pidgey Candies:

- gained from evolving Pidgeys (one extra Pidgey Candy for one Pidgey);
- gained from exchanging Pidgeys for Candies, if you have extra Pidgeys and few Candies.

Examples:

```js
calcMaxXP(1, 12) === 500;
calcMaxXP(1, 63) === 500;
calcMaxXP(63, 1) === 2500; // you can exchange extra Pidgeys for Candies
calcMaxXP(37, 46) === 3000;
```
