import { Action } from "@ngrx/store";

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export class AddToFavorites implements Action {
  readonly type = ADD_TO_FAVORITES;
  payload: any; 
}