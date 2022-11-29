import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  configureStore,
  TypedStartListening,
  TypedAddListener,
  ListenerEffectAPI,
  addListener,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppAddListener = TypedAddListener<RootState, AppDispatch>;
export const addAppListener = addListener as AppAddListener;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
