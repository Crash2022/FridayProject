import {PostsType} from "../state/posts-reducer";

export const fridayAPI = {
    getPosts() {
        return new Promise<PostsType[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    {id: 1, author: 'Crash', text: 'I studying React'},
                    {id: 2, author: 'Dimych', text: `I'm the boss of IT-Incubator`},
                    {id: 3, author: 'Valera', text: 'I like Angular'},
                ])
            }, 2000)
        })
    }
}