//= laz r
//= 08-16-2025 15:03
//= store.js

//= Dependencies =//
import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../features/pokemon/pokemonSlice';

if (import.meta.hot) {
    import.meta.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer.js').default;
        store.replaceReducer(newRootReducer);
    });
    import.meta.hot.on('vite:beforeUpdate', (update) => {
        console.log('Hot Reload Update', update);
    });
}

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
});
