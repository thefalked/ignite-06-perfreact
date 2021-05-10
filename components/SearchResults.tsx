import { List, ListRowRenderer } from "react-virtualized";

import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishList,
}: SearchResultsProps) {
  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };
  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={25}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />
      {/* {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })} */}
    </div>
  );
}

/**
 * How React verify changes
 * 1. Creates a new version of the component
 * 2. Compare it with the older version
 * 3. If there's any changes, it will update what's changed
 */

/**
 * How memo works
 * 1. Prevents the React to create a new component if the properties received
 * are equal using shallow compare (referential equality)
 * 2. Therefore it will work perfectly if is an number or string, but when is
 * an object it's needed to pass an function to change comparation method
 *
 * When use memo
 * 1. In Pure function components
 * 2. Components that renders too often
 * 3. The component re-renders with the same props
 * 4. When the component is a medium to large size
 */

/**
 * Why use useMemo
 * 1. Avoid when something that use too much processing power like some
 * calculation that it's called multiple times
 *
 * How to use
 * 1. The first param it's the function that return a value
 * 2. The second it's and array with an dependencie like in `useEffect`, only
 * when the variable that is in the array changes it will recalculate
 * 3. It's also used for referential equality
 *
 * When to use
 * 1. Heavy calculations
 * 2. Referential equality (When the information is repassed to a children)
 */

/**
 * When use useCallback
 * 1. Is only used for referential equality (Verify if is the same thing on
 * the memory) when an function is passthru an children, the React will verify
 * if is the same thing on the memory.
 * 2. So if a parent component re-renders and there's no useCallback the
 * function will use another place on memory and the children will re-renders
 * also. But if useCallback is used it keeps the function in the same space in
 * the memory and it will not render the children.
 */
