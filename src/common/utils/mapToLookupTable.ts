
type LookupTableType<T> = { [key: string]: T }

export const mapToLookupTable = <T extends {id: number}>(items: T[]): LookupTableType<T> => {
    const acc: LookupTableType<T> = {}
    return items.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
    }, acc)
}