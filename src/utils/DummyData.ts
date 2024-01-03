/* eslint-disable prettier/prettier */
import Assets from './Assets';

export const learnCategories = [
    { id: 1, title: 'Menstrual Cycle', image: Assets.temp.cycle, selected: false },
    { id: 2, title: 'Weight Loss', image: Assets.temp.weight, selected: false },
    { id: 3, title: 'Hair Growth', image: Assets.temp.hair_loss, selected: false },
    { id: 4, title: 'Fertility', image: Assets.temp.fertility, selected: false },
    { id: 5, title: 'Acne', image: Assets.temp.acne, selected: false },
];

export const learnListData = [
    {
        id: 1,
        title: 'Options for Women with PCOS and Hirsutism',
        type: 'Hair Growth',
        category: 'Article',
        date: 'January 11, 2022',
        image: Assets.temp.item1,
    },
    {
        id: 2,
        title:
            'Aliquam vitae sem tincidunt, feugiat purus eget, pretium est. Aliquam ut tincidunt lorem.',
        type: 'Weight Loss',
        category: 'Video',
        date: 'January 11, 2022',
        image: Assets.temp.item2,
    },
    {
        id: 2,
        title:
            'Aliquam vitae sem tincidunt, feugiat purus eget, pretium est. Aliquam ut tincidunt lorem.',
        type: 'Menstrual Cycle',
        category: 'Infographic',
        date: 'January 11, 2022',
        image: Assets.temp.item3,
    },
];
export const learnSearchTags = [{
    id: 1,
    title: 'Scalp health',
    selected: false
},
{
    id: 2,
    title: 'Thinning hair',
    selected: false
},
{
    id: 3,
    title: 'hair growth treatments',
    selected: false
}
];
export const articleTags = [{
    id: 1,
    title: 'Recipes'
},
{
    id: 2,
    title: 'Health'
},
{
    id: 3,
    title: 'Welness'
},
{
    id: 4,
    title: 'Diet'
}
];
export const eatCategories = [
    {
        id: 1,
        title: 'Food List',
        image: Assets.temp.ec1
    },
    {
        id: 2,
        title: 'Grocery List',
        image: Assets.temp.ec2
    },
    {
        id: 3,
        title: 'Meal Planner',
        image: Assets.temp.ec3
    },
    {
        id: 4,
        title: 'Recipes',
        image: Assets.temp.ec4
    },
    {
        id: 5,
        title: 'Saved Meal',
        image: Assets.temp.ec5
    }
]

export const foodCategory = [{ id: 1, title: 'Proteins' }, { id: 2, title: 'Veggies' }, { id: 3, title: 'Fruits' }, { id: 4, title: 'Nuts & Seeds' }]
export const proteinList = [{
    id: 1, title: 'Poultry', selected: false, data: [
        {
            id: 1,
            title: 'Eggs',
            selected: false
        },
        {
            id: 2,
            title: 'Ground chicken',
            selected: false
        },
        {
            id: 3,
            title: 'Chicken breast',
            selected: false
        },
        {
            id: 4,
            title: 'Chicken thighs',
            selected: false
        },
    ]
}, {
    id: 2, title: 'Beef', selected: false, data: [
        {
            id: 1,
            title: 'Flank steak',
            selected: false
        },
        {
            id: 2,
            title: 'Sirloin steak',
            selected: false
        },
    ]
}, {
    id: 3, title: 'Fish', selected: false, data: [
        {
            id: 1,
            title: 'Finger',
            selected: false
        }
    ]
}
]

export const foodDetailsRecipes = [
    { id: 1, title: 'Simple and Easy Chinese Cashew Nut', image: Assets.temp.ed1, },
    { id: 2, title: 'Simple and Easy Chinese Cashew Nut', image: Assets.temp.ed2, },
    { id: 3, title: 'Simple and Easy Chinese Cashew Nut', image: Assets.temp.ed3, },
    { id: 4, title: 'Simple and Easy Chinese Cashew Nut', image: Assets.temp.ed4, },

];
export const mealList = [
    {
        id: 1, category: 'Proteins',
        data: [{
            id: 1,
            title: 'Poultry',
            data: [{ id: 1, title: 'Ground chicken', image: Assets.temp.c1 }, { id: 2, title: 'Chicken thighs', image: Assets.temp.c2 }]
        },
        {
            id: 2,
            title: 'Beef',
            data: [{ id: 1, title: 'Sirloin Steak', image: Assets.temp.b1 }]
        }]
    },
    {
        id: 2, category: 'Veggies',
        data: [{
            id: 1,
            title: 'Poultry',
            data: [{ id: 1, title: 'Spinach', image: Assets.temp.s1 }, { id: 2, title: 'Chicken thighs', image: Assets.temp.c2 }]
        },
        ]
    }
]
