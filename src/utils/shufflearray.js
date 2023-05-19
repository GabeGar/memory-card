const shuffleArray = (arrToReArrange) => {
    const tempArr = arrToReArrange.slice();

    for (let i = tempArr.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * i + 1);
        let temp = tempArr[i];

        // * Swapping Elements
        tempArr[i] = tempArr[randomIndex];
        tempArr[randomIndex] = temp;
    }

    return tempArr;
};

export default shuffleArray;
