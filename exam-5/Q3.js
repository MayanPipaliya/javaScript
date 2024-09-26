let arr = [3, 7, 1, 9, 2]

const LargestElement = () => {

    let LargestElement = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (LargestElement > arr[i])
            LargestElement = arr[i]
    }
    console.log(LargestElement);
}

LargestElement()