## Web Components
{title: 1}

## Custom HTML

```html
  <spark-line
    points="0.1 0.2 0.5 1 0.4 0.2 0.3"
    width=100
    height=30
    >
  </spark-line>.
```

## How?

## More Javascript!

## Multiple technologies

- custom elements ('public API')
- shadow DOM
- imports

## Custom elements is almost ready

- the rest are still stuck in vendor conflict

## Today

- custom elements ('public API')
- ~~shadow DOM~~
- ~~imports~~

## Creating a custom element
{title:1}

## API

```javascript
const helloWorld = Object.create(HTMLElement.prototype);

helloWorld.createdCallback = function() {
  this.style.color = "red";
  this.innerHTML = "Hello!"
}

// note: `registerElement` may change name, concept
// the same
document.registerElement("hello-world", {
  prototype: helloWorld,
});
```

```html
// this HTML will visually appear like the below
<hello-world></hello-world>
```
<span style="color: red">
  Hello!
</span>

## Inherit behaviour

- custom els must inherit from HTMLElement

```javascript
const helloWorld = Object.create(HTMLElement.prototype);
```

## Callbacks

```javascript
helloWorld.createdCallback = function() {
  this.style.color = "red";
  this.innerHTML = "Hello!"
}
```

## Registration

```javascript
// note: `registerElement` may change name, concept
// the same
document.registerElement("hello-world", {
  prototype: helloWorld,
});
```

## Using

```html
// this HTML will visually appear like the below
<hello-world></hello-world>
```

## Let's try

    exercises/custom-element

## Complete lifecycle
{title:1}

## createdCallback

- like a constructor

```javascript
helloWorld.createdCallback = function() {
  this.style.color = "red";
  this.innerHTML = "Hello!"
}
```

## attachedCallback

- when node is inserted into document
- this is point it will be visible to people

```javascript
sparkline.attachedCallback = function() {
  this._prepareForDisplay();
}
```

## detachedCallback

- when node is removed
- stop any expensive work that's no longer required

```javascript
sparkline.detachedCallback() = function() {
  this._stopDisplayRelatedWork();
}
```

## attributeChangedCallback

- when an attribute changes

```javascript
sparkline.attributeChangedCallback(name, oldVal, newVal) = function() {
  // handle the attribute
}
```

## Attribute handling

- we get string values
- so lots of parsing required


## Parsing

```javascript
sparkline.attributeChangedCallback(name, oldVal, newVal) = function() {
  this[name] = newVal;
}

Object.defineProperty(sparkline, "width", {
  set(width) {
    this._width = typeof width === 'string' ? parseInt(width) : Number(width);
  },
  get() {
    return this._width;
  }
})
```

## Let's try

    exercise/custom-element
