import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';

const persistConfig = {
  key: 'ListaRecados',
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const appPersistor = persistStore(appStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;