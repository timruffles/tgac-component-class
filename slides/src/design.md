## Design
{title:1}

## Separating concerns

## Is this good?

```javascript
component({
  jsonUrl: "some/json.json",
})
```

## What does it prevent?

## Better

```javascript
component({
  data: aPromiseForData,
})
```

## Doing too much is bad

- relevent to a smaller set of problems


