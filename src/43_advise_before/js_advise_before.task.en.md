Create a function `adviseBefore` that accepts two arguments: the original function
`target` and the advising function `advice`, and returns a wrapper function.

When the wrapper is called , it runs the `advice` with given arguments, and checks
its result:

- if the result is an array call the `target` with the result elements as
  new arguments;
- if not - call the `target` with the wrapper arguments.

Return the `target` result.
