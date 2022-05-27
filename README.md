# Empty Readme

## Notes as I go

### Keywords from Todo Highlighter

- TODO:
- FIXME:
- BUG:
- SAMPLE:

### Observations

- much easier to sync vscode when both computers are using the same account.
- installed live-server - just need to run 'live-server' in the directory and it opens that index.html, so that's SUPER convenient.
  -stuff puleld out of the css
  align-items: center;

  display: flex;

- Ok, important lesson on for loops, in vs of. **in** will do a count through an array, but **of** will go through the contents of an array (maybe a dict too? Something to test)
- Looking to understand the reduce() function on arrays. Apparently its
  array.reduce((a,b) => a+b)
  where a is the initial value and b is the value so far
  could be anything - x,y or whatever
  example I saw did **array.reduce((a,b) => a+b,0)** and I'm not 100% sure what the **,0** is for
- Ok, this now has me looking at **array.map()**
- Looks like it does something to each value of an array, so for 1, 2, 3, \*_array.map(n => 2 _ n) would produce 2,4,6. That's the theory, time to go test.
