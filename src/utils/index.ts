export function containsAny<T>(arr1:Array<T>,arr2:Array<T>){
    return arr1.some(item => arr2.includes(item))
}