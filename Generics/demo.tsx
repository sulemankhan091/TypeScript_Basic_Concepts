
//generic arrow function in tsx file

const randomItem = <T,>(list: T[]): T => {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}