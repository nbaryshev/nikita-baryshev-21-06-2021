import * as FavoritesActions from "./favorites.actions";

const initialState = {
  cities: [
    {name: 'Tel-Aviv', temperature: '26'}
  ]
};

export function favoritesReducer(state = initialState, action: FavoritesActions.AddToFavorites) {
  switch (action.type) {
    case FavoritesActions.ADD_TO_FAVORITES: 
      return {
        ...state,
        cities: [...state.cities, action.payload]
      };
    default:
      return state;
  }
}