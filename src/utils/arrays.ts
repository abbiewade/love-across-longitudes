export function sample<T>(array: Array<T>): T {
    if (array.length === 0) {
        throw new Error("Cannot sample from an empty array");
    }
    return array[Math.floor(Math.random() * array.length)]!;
}