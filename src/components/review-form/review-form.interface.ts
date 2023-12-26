export interface IReviewForm {
	name: string;
	title: string;
	description: string;
	rating: number;
}

export interface IReviewResponse {
	name: string;
	title: string;
	description: string;
	rating: number;
	id: number;
	productId: string;
}