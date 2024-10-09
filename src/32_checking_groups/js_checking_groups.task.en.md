Write a function `checkGroups` that accepts a string `str` that may contain any of the
symbols `()`, `{}` or `[]`. The function should check whether the brackets are opened
and closed correctly.

The examples of correct bracket groups are:

```
({})
[[]()]
[{()}]
```

The examples of incorrect bracket groups are:

```
{(}) // wrong order of closing different bracket types
([] // parentheses are not closed
[]) // there is a closing parenthesis without an opening one
}{ // a closing curly bracket is before an opening one
```

Return `true` if the string is empty or its groups are correct. Return `false`
if the bracket groups are incorrect.

Examples:

```
checkGroups('{[]}') === true
checkGroups('[(](') === false
checkGroups('{}()[') === false
```
