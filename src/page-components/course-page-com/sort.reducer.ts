import { SortEnum } from "@/src/components/sort/sort.props";
import { ProductModel } from "@/src/interfaces/product.interface";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface SortReducerState {
	sort: SortEnum;
	products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions) => {
	switch (action.type) {
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
			};
		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
			};
		default:
			throw new Error('Something went wrong');
	}
}