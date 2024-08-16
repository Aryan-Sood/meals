import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => {},
    removeFavorites: (id) => {}
});

function FavoritesContextProvider   ({children}){

    const [favoritesMealIds, setFavoritesMealIds] = useState([]);

    function addFavorites(id){
        setFavoritesMealIds((current)=>[...current, id]);
    }

    function removeFavorites(id){
        setFavoritesMealIds((currFavIds)=>currFavIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoritesMealIds,
        addFavorites: addFavorites,
        removeFavorites: removeFavorites
    }


    return (<FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>);
}


export default FavoritesContextProvider;