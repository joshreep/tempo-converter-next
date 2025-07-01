import { useEffect, useRef } from 'react';

/**
 * # usePrevious
 * This hook takes in any value.  When that value changes, it will return the previous value so that we can compare what a value was vs. what it is now.
 *
 * @example
 * function App() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *
 *   return (
 *     <div>
 *       <h1>
 *         Now: {count}, before: {prevCount}
 *       </h1>
 *       <button onClick={() => setCount(count + 1)}>Increment</button>
 *     </div>
 *   )
 * }
 */
export default function usePrevious<T>(value: T) {
  const previousValueRef = useRef<T>(null);

  useEffect(() => {
    previousValueRef.current = value;
  });

  return previousValueRef.current;
}
