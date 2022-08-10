import { component$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    count:0
  });

  return <div>
     <h1>Count {store.count}</h1>
     <button onClick$={() => store.count++}>Increment</button>
  </div>
})