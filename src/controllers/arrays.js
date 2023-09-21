class ArraysTools {
    IsInArray(obj, array){
        let i;
        for (i = 0; i < array.length; i++) {
            if (array[i] === obj) {
                return true;
            }
        }
        return false;
    }
}

export default ArraysTools;