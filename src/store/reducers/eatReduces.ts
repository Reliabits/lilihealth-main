/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IFoodMenu, { IFood, IFoodCategory } from 'src/types/interfaces/Eat';
import Utils from 'src/utils/Utils';

export interface IEatState {
    foodList: IFoodMenu[]
    foodCategory: IFoodCategory[] | null;
    groceryList: IFoodCategory[]
    shoppingIngredientItems: { category: IFoodCategory; foods: IFood[] }[]
    shoppingCompletedItems: { category: IFoodCategory; foods: IFood[] }[]
    lastShoppingUpdate: string
}

const initialState: IEatState = {
    foodList: [],
    foodCategory: null,
    groceryList: [],
    shoppingIngredientItems: [],
    shoppingCompletedItems: [],
    lastShoppingUpdate: ''
};

export const eatSlice = createSlice({
    name: 'eat',
    initialState,
    reducers: {
        setFoodMenu: (state, action: PayloadAction<IFoodMenu[]>) => {
            const stateValue = { ...state, foodList: action.payload };
            return stateValue;
        },
        setFoodCategory: (state, action: PayloadAction<IFoodCategory[]>) => {
            const stateValue = { ...state, foodCategory: action.payload };
            return stateValue;
        },
        setGroceryList: (state, action: PayloadAction<IFoodCategory[]>) => {
            const stateValue = { ...state, groceryList: action.payload };
            return stateValue;
        },
        setShoppingIngredientItems: (state, action: PayloadAction<{ category: IFoodCategory; foods: IFood[] }[]>) => {
            const newData = action.payload;
            // const previousData = state.shoppingIngredientItems || [];
            const previousData = state.shoppingIngredientItems ? JSON.parse(JSON.stringify(state.shoppingIngredientItems)) as { category: IFoodCategory; foods: IFood[] }[] : [];
            newData.forEach((newItem) => {
                newItem.foods.forEach(newFood => {
                    //--
                    console.log('pushing data');
                    let foundFlag = false;
                    previousData.forEach((tFood) => {
                        if (tFood.category.id === newItem.category.id) {
                            let foodFlag = false;
                            tFood.foods.forEach((sel) => {
                                if (sel.id === newFood.id) {
                                    sel.quantity += newFood.quantity;
                                    foodFlag = true;
                                }
                            });
                            if (!foodFlag) {
                                tFood.foods.push(newFood);
                            }
                            // res.push(newFood);
                            // tFood.foods = res;
                            foundFlag = true;
                        }
                    });
                    if (!foundFlag) {
                        const catFoodObj = { category: newItem.category, foods: [{ ...newFood }] };
                        previousData.push(catFoodObj);
                    }
                    //--
                })
            })
            // state.shoppingIngredientItems = previousData;
            const stateValue = { ...state, shoppingIngredientItems: previousData };
            return stateValue;
        },
        removeShoppingIngredientItems: (state, action: PayloadAction<{ category: IFoodCategory; foods: IFood[] }[]>) => {
            const newData = action.payload;
            // const previousData = state.shoppingIngredientItems || [];
            const previousData = state.shoppingIngredientItems ? JSON.parse(JSON.stringify(state.shoppingIngredientItems)) as { category: IFoodCategory; foods: IFood[] }[] : [];
            newData.forEach((newItem) => {
                newItem.foods.forEach(newFood => {
                    //--
                    let foundFlag = false;
                    previousData.forEach((tFood) => {
                        if (tFood.category.id === newItem.category.id) {
                            const res = tFood.foods.filter((sel) => sel.id !== newFood.id);
                            // res.push(newFood);
                            tFood.foods = res;
                            foundFlag = true;
                        }
                    });
                    //--
                })
            })
            // state.shoppingIngredientItems = previousData;
            const stateValue = { ...state, shoppingIngredientItems: previousData };
            return stateValue;
        },
        setShoppingCompletedItems: (state, action: PayloadAction<{ category: IFoodCategory; foods: IFood[] }[]>) => {
            const newData = action.payload;
            // const previousData = state.shoppingCompletedItems || [];
            const previousData = state.shoppingCompletedItems ? JSON.parse(JSON.stringify(state.shoppingCompletedItems)) as { category: IFoodCategory; foods: IFood[] }[] : [];
            newData.forEach((newItem) => {
                newItem.foods.forEach(newFood => {
                    //--
                    let foundFlag = false;
                    previousData.forEach((tFood) => {
                        if (tFood.category.id === newItem.category.id) {
                            let foodFlag = false;
                            tFood.foods.forEach((sel) => {
                                if (sel.id === newFood.id) {
                                    sel.quantity += newFood.quantity;
                                    foodFlag = true;
                                }
                            });
                            if (!foodFlag) {
                                tFood.foods.push(newFood);
                            }
                            // res.push(newFood);
                            // tFood.foods = res;
                            foundFlag = true;
                        }
                    });
                    if (!foundFlag) {
                        const catFoodObj = { category: newItem.category, foods: [{ ...newFood }] };
                        previousData.push(catFoodObj);
                    }
                    //--
                })
            })
            const stateValue = { ...state, shoppingCompletedItems: previousData };
            return stateValue;
        },
        setShoppingUpdateDate: (state, action: PayloadAction<string>) => {
            const stateValue = { ...state, lastShoppingUpdate: action.payload };
            return stateValue;
        },
    },
});

export const { setFoodMenu, setFoodCategory, setShoppingUpdateDate, setGroceryList, setShoppingIngredientItems, removeShoppingIngredientItems, setShoppingCompletedItems } = eatSlice.actions;
export default eatSlice.reducer;
