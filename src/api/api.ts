import {PostsType} from "../state/posts-reducer";

export const fridayAPI = {
    getPosts() {
        return new Promise<PostsType[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        author: {
                            id: 11,
                            name: 'Crash'
                        },
                        text: 'I studying React',
                        likes: 10
                    },
                    {
                        id: 2,
                        author: {
                            id: 12,
                            name: 'Dimych'
                        },
                        text: `I'm the boss of IT-Incubator`,
                        likes: 100500
                    },
                    {
                        id: 3,
                        author: {
                            id: 13,
                            name: 'Valera'
                        },
                        text: 'I like Angular',
                        likes: 100
                    }
                ])
            }, 2000)
        })
    },
    updatePost(postId: number, text: string) {
        return Promise.resolve({})
    }
}