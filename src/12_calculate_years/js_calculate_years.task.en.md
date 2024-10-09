Mr. Scrooge has a sum of money that he wants to invest. Before he does, he wants to know how many years this sum has to be kept in the bank in order for it to amount to a desired sum of money.

The sum is kept for years in the bank where interest is paid yearly. After paying taxes for the year the new sum is re-invested.

Note to tax: not the invested principal is taxed, but only the year's accrued interest.

Write a function `calculateYears` that returns the number of years as a whole in order for Mr. Scrooge to get the desired sum.

Example:

```
principal = 1000.00
interest = 0.05
tax = 0.18
desired = 1100.00

After 1st year --> principal = 1041.00
After 2nd year --> principal = 1083.86
After 3rd year --> principal = 1128.30
```

Thus, Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Examples:

```javascript
calculateYears(1000, 0.01625, 0.18, 1200) === 14;
calculateYears(1000, 0.05, 0.18, 1000) === 0;
```

Assume that desired principal is always greater than the initial principal. However, it is best to take into consideration that if desired principal is equal to principal this should return `0` years.
