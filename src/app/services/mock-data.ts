import { Interest } from "./../db/data.interest";
import { Portfolio } from "./../db/data.portfolio";

export const INTERESTS: Interest[] = [
    {
        id: 1,
        name: 'chess',
        description: `
            I like chess very much
        `
    },
    {
        id: 2,
        name: 'math',
        description: `
            I like math very much and I have enrolled in many math competition.
        `
    },
    {
        id: 3,
        name: 'physics',
        description: `
            somehow, I like phisics too.
        `
    }
];

export const PORTFOLIOS: Portfolio[] = [
    {
        id: 1,
        name: 'ROS Summar Camp',
        description: `
            I have developed a lot of ROS in 2016 Summer in MIT.
        `
    },
    {
        id: 2,
        name: 'iOS programming',
        description: `
            I can use Swift to program on iOS.
        `
    },
    {
        id: 3,
        name: 'image processor',
        description: `
            this is a Mac application which can help my friend to do more work.
        `
    }
]