---
title: "TypeScript for React"
author: "amit-suthar"
date: "10-1-23"
tags: ["typescript", "react", "tsx"]
img: "posts/amit/typescript-for-react.png"
---

## TypeScript for React

### 1. in useState

In React `useState` hook, we need to define the type of state being passed to it.

Consider below example where we try to set state of an useState with a mismatched type which results in an error.

```tsx
"use client";
import {useState} form "react"

export default function UserPost(){
    const [title, setTitle] = useState("");
    const changeTitle = () => {
        setTitle(10); // error, type "number" is not assignable to a parameter of type setStateAction<string>
    }
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}
```

The `error, type "number" is not assignable to a parametr of type setStateAction<string>` states that the state is expecting a "**string**" type parameter but we are passing a "**number**" which is not acceptable.

Also lets assume that you're **fetching some data from an api** and you don't have the data yet, so passing a `null` to `setTitle` will also result into an error.

```tsx
const changeTitle = () => {
  setTitle(null); // error, type "null" is not assignable to a parametr of type setStateAction<string>
};
```

---

To avoid this, we can specify the type while initializing a state.

```tsx
// ...other code
const [title, setTitle] = useState<string | null>("");
const changeTitle = () => {
  setTitle(null); // no error
};
// ...other code
```

here `useState<string | null>("")` handles the case for the data is it's a `null` and you can replace this `null` with any other type.

---

### 2. Type defining Event Listners

In React, we use Event Handlers to change the state and
passing a parmeter inside an event handler leds us to `type: any` error. To avoid this, we can use `React.MouseEvent` interface to handle the type of parameter.

```tsx
import { useState } from "react";

type UserProps = {
  id: number;
  title: string;
};

export default function User({ id, title }: UserProps) {
  const [newTitle, setNewTitle] = useState<string | any>("");

  const handleClick = (e: React.MouseEvent) => {
    setNewTitle("New Title");
    e.preventDefault;
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

**It's not only limited to MouseEvent, it can be anything that React supports.**

---

**Few other interfaces that are similar to React.MouseEvent :**

`React.FormEvent` `React.TouchEvent` `React.PointerEvent` `React.DragEvent` `React.FocusEvent`, etc.

---

### 3. Data from an API

Below given is a normal react and ts code which fetch data from some api as an array of objects. But we don't know what's the type of data we're receiving from that api.

```tsx
async function getData() {
  const res = await fetch("some-api-with-array-of-objects");
  return res.json();
}

export default async function UserData() {
  const data = await getData(); // error: data with type any
  return (
    <div>
      {data.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}
```

---

The `data` is of `any` type and it then leds to type error. So to avoid that and also for the sake of a good practice we can do a type defintaion for the data we'll recieve.

```tsx
type DataProps = {
  id: number;
  title: string;
  message?: string; // ?: --> a data we're not sure if we have it or not
}[]; // [] --> when your api returns an array of objects.

async function getData: Promise<DataProps>() {
    // adding a Interface Promise<Type>
    // ... other code
}
```

---

### 4. Passing data to children :

Let's say your `UserData` component renders a children component `User` and passes the data fetched from api to it.

```tsx
// Inside UserData.tsx
import User from "@/components/User"

type DataProps = {
  id: number;
  title: string;
  message?: string;
}[];

async function getData: Promise<DataProps>() {
  const res = await fetch("some-api-with-array-of-objects");
  return res.json();
}

export default async function UserData() {
  const data = await getData();
  return (
    <div>
      {data.map((post) => (
        <User key={post.id} title={post.title} />
        {/* this child component doesn't know what type of data is id and title.*/}
      ))}
    </div>
  );
}
```

In the above code, the child component `User`doesn't know what type of data is is being passed to it.

So at the time of receiving these props inside the User function, we need to define the type.

```tsx
// inside User.tsx

type UserProps = {
  id: number;
  title: string;
  toggle?: true; // an optional prop which we may or may not receive from Parent component.
};

export default function User({ id, title }: UserProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
```

---

_made with_ ❤️ _by [Amit Suthar](https://github.com/amitsuthar69)_
