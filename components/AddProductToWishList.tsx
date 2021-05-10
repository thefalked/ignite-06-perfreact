export interface AddProductionToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductionToWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductionToWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos ?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
