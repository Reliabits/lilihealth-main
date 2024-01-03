import {
  combineReducers,
  configureStore,
  // applyMiddleware,
  // compose
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import learnReducer from './reducers/learnReducer';
import { learnApi } from './services/Learn.service';
import eatReduces from './reducers/eatReduces';
import { eatApi } from './services/eatService';
import { authApi } from './services/authService';
import { mealApi } from './services/MealService';

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  learn: learnReducer,
  [learnApi.reducerPath]: learnApi.reducer,
  eat: eatReduces,
  [eatApi.reducerPath]: eatApi.reducer,
  [mealApi.reducerPath]: mealApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['eat', 'auth'],
  // blacklist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      thunk,
      learnApi.middleware,
      eatApi.middleware,
      authApi.middleware,
      mealApi.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
