//Me quede en 1155

/**
 * Tlinear
 * Tjson
 * Tobject
 * Tform
 * Tutil
 * Ttable
 */
export default class Tlinear{

    constructor(){}

    static printM(){
        console.log('hola');
    }
    static isDataInArray(array, data) {
        // Verifica que el valor data esta incluido en el array, si no, retorna un false
        for (let i = 0; i < array.length; i++) {
            if (array[i] == data)
                return true;
        }
        return false;
    }

    static convertArrayInAssoArrayTrueFalse(array, superArray = null) {
        // convierte un array en uno asociativo, convirtiendo cada texto en un objeto con valor true
        // y luego podemos acoplar al superArray en un unico array, en los que
        // los elementos restantes del superArray seran falsos
        let result = [];
        for (let i = 0; i < superArray.length; i++) {
            if (superArray != null)
                result[superArray[i]] = this.isDataInArray(array, superArray[i]);
            else
                result[array] = true;
        }
        return result;
    }


    static getArrayMultiLevelFromJson(json) {
        let array = [];
        for (let i = 0; i < json.length; i++) {
            array[i] = json[i];
        }
        return array;
    }

    static arrayAddValue(array, value, pos){
        //Añade un valor en cierta posicion a un array
        let result = [];
        for(let i =0; i<(array.length + 1); i++){
            if ( i<pos )
                result[i] = array[i];
            else if ( i==pos )
                result[i] = value;
            else
                result[i] = array[i-1];
        }
        return result;
    }

    static arrayConvertToInt( array ){
        //Retorna un array con los valores cambiados a entero por otro array seteado
        let res = new Array();
        for ( let i=0; i<array.length; i++ ){
            res[i] = parseInt(array[i]);
        }
        return res;
    }
    
    static arrayRemovePoint(mat, columnsNumbers) {
        // Funcion que quita los puntos de cada item en ciertas columnas
        // Se ingresa la matrix y el array de indices de columnas a ser transformadas
        // ejemplo, matRemovePoint(dataContent, [2,4,5,6]);
        if (mat==null) return null;
        let arrayLength = mat.length;
        if (columnsNumbers!=null) arrayLength=columnsNumbers.length;
        for (let i = 0; i < arrayLength; i++) {
                //En la siguiente linea, reemplazamos el punto (".") por un espacio cerrado("")
            if ( columnsNumbers == null )
                mat[i] = mat[i].replace(".", "");
            else
                mat[i] = mat[columnsNumbers[i]].toString().replace(".", "");
        }
        return mat;
    }
    
    static printArray(array) {
        console.log('printArray');
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
    
    static printArrayMultiLev(array) {
        for (let i = 0; i < array.length; i++) {
            let str = "";
            $.each(array[i], function(i, value) {
                str += i + '::' + value + ', ';
            });
            console.log(str);
        }
    }
    
    //Matrices
    static printMatrix(mat) {
        for (let i = 0; i < mat.length; i++) {
            let str = "";
            for (let j = 0; j < mat[i].length; j++) {
                str += mat[i][j] + ', ';
            }
            console.log(str);
        }
    }
    
    static getMatFromArrayMultLev(array) {
        //Obtiene una matriz desde un array multinivel o json
        var matrix = [];
        for (var i = 0; i < array.length; i++) {
            matrix[i] = new Array(array[i].length);
        }
        for (let i = 0, j = 0; i < array.length; i++) {
            j = 0;
            $.each(array[i], function(item, value) {
                matrix[i][j] = value;
                //console.log(i+', ' + j);
                j++;
            });
        }
        return matrix;
    }
    
    static matColumnsParseToInt(mat, columnsNumbers) {
        // Funcion que convierte una columna a entero
        // Se ingresa la matrix y el array de indices de columnas a ser parseados
        // ejemplo, columnsParseToInt(dataContent, [2,4,5,6]);
        if (mat==null) return null;
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < columnsNumbers.length; j++) {
                mat[i][columnsNumbers[j]] = parseInt(mat[i][columnsNumbers[j]]);
            }
        }
        return mat;
    }
    
    static matConvertToInt (mat){
        //Retorna una matriz con los valores parseados a entero
        let res = new Array();
        for ( let i=0; i<mat.length; i++ ){
            res[i] = new Array();
            for ( let j=0; j<mat[i].length; j++ ){
                res[i][j] = parseInt(mat[i][j]);
            }
        }
        return res;
    }
    
    static matConvertToFloat (mat, extractPoint=false){
        //Retorna una matriz con los valores parseados a flotante
        let res = new Array();
        for ( let i=0; i<mat.length; i++ ){
            res[i] = new Array();
            for ( let j=0; j<mat[i].length; j++ ){
                if (extractPoint) mat[i][j] = mat[i][j].replace('.','');
                res[i][j] = parseFloat(mat[i][j]);
            }
        }
        return res;
    }
    
    static matRemovePoint(mat, columnsNumbers) {
        // Funcion que quita los puntos de cada item en ciertas columnas
        // Se ingresa la matrix y el array de indices de columnas a ser transformadas
        // ejemplo, matRemovePoint(dataContent, [2,4,5,6]);
        if (mat==null) return null;
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < columnsNumbers.length; j++) {
                //En la siguiente linea, reemplazamos el punto (".") por un espacio cerrado("")
                mat[i][columnsNumbers[j]] = mat[i][columnsNumbers[j]].replace(".", "");
            }
        }
        return mat;
    }
    
    static matRemoveRow(mat, rows){
        // Remueve las filas de numeros indicados en el array rows de la matriz mat
        let res = new Array();
        let val=false;
        for ( let i=0, k=0; i<mat.length; i++ ){
            val=false;
            if ( Array.isArray(rows) ){
                if ( !this.isDataInArray(rows,i) )
                    val = true;
            }
            else{
                if ( rows != i )
                    val = true;
                }
            if ( val ){
                res[k] = new Array();
                for ( let j=0; j<mat[i].length; j++ ){
                    res[k][j] = mat[i][j];
                }
                k++;
            }
        }
        return res;
    }
    
    static matExtractColumns(mat, columnsNumbers) {
        //Extrae columnas de la matriz mat
        // y las retorna en otra matriz con esas columnas
        // si la cantidad de columnas es 1, los retorna en un array
        //columnsNumbers debe ser un array
        let newmat = [];
        if (columnsNumbers.length == 0) return null;
        else if (columnsNumbers.length == 1) {
            for (let i = 0; i < mat.length; i++) {
                newmat[i] = mat[i][columnsNumbers[0]];
            }
        } else {
            for (let i = 0; i < mat.length; i++) {
                newmat[i] = [];
                for (let j = 0; i < columnsNumbers.length; j++) {
                    newmat[i][j] = mat[i][columnsNumbers[j]];
                }
            }
        }
        return newmat;
    }
    
    static matSumColumns(mat, columnNumbers=null, incluyePunto=false) {
        // retorna un array en el que cada indice contiene la suma de las columnas
        // de la matriz mat en las posiciones columnNumbers
        // si columnNumbers se deja null, entonces la funcion
        // realiza el proceso con todas las columnas
        //console.log(mat.length + '::' + columnNumbers.length);
        // si mat es un array, tambien realiza la suma total del array y lo retorna
        // es importante indicar si los valores incluyen puntos ( Ej. mat[0][4] = 1.234; )
        // o no lo incluyen (Ej. mat[0][4] = 1234; )
        let colSumSize=0;
        if( columnNumbers == null )
            colSumSize = mat[0].length;
        else
            colSumSize = columnNumbers.length;
    
        if ( mat.length == 1 ){
            let result = 0;
            for (let i = 0; i < mat.length; i++)
                if ( !incluyePunto )
                    if( columnNumbers ==null )
                        result += parseInt(mat[i]);
                    else
                        result += parseInt(mat[columnNumbers[i]]);
                else
                    if( columnNumbers ==null )
                        result += parseInt(mat[i].toString().replace('.',''));
                    else
                        result += parseInt(mat[columnNumbers[i]].toString().replace('.',''));
            return result;
        }
    
        let result = [];
        for (let j = 0; j < colSumSize; j++)
            result[j] = 0;
        for (let i = 0; i < mat.length; i++)
            for (let j = 0; j < colSumSize; j++)
                if ( !incluyePunto )
                    if ( columnNumbers != null )
                        result[j] += parseInt(mat[i][columnNumbers[j]]);
                    else
                        result[j] += parseInt(mat[i][j]);
                else
                    if ( columnNumbers != null )
                        result[j] += parseInt( mat[i][columnNumbers[j]].toString().replace('.','') );
                    else
                        result[j] += parseInt( mat[i][j].toString().replace('.','') );
        return result;
    }
    
    static matSumRows(mat, rowNumbers = null) {
        // retorna un array en el que cada indice contiene la suma de las filas
        // de la matriz mat en las posiciones rowNumbers
        // si mat es un array, tambien realiza la suma total del array y lo retorna
        if ( mat.length == 1 )
            return this.matSumColumns(mat);
        if( rowNumbers == null )
            rowNumbers = mat.length;
        let result = [];
        for (let i = 0; i < rowNumbers.length; i++) {
            result[i] = 0;
            for (let j = 0; j < mat[i].length; j++) {
                result[i] += parseInt(mat[rowNumbers[i]][j]);
            }
        }
        return result;
    }
    
    static matAddColumn(mat, newcolumn, pos = null) {
        //Anhade una columna a una matriz,
        //mat = la matriz original
        //newrow = el array con el contenido de la nueva columna
        //pos = la posicion que tendra la nueva columna,
        //      si pos se lo deja en null, la nueva columna se anhadira al ultimo
        let newmat = [];
        if (pos == null) {
            console.log('pos es null');
            if (mat.length == 1) {
                pos = mat.length;
            } else {
                pos = mat[0].length;
            }
        }
        for (let i = 0; i < mat.length; i++) {
            newmat[i] = [];
            for (let j = 0; j < mat[i].length + 1; j++) {
                if (j == pos) {
                    newmat[i][j] = newcolumn[i];
                } else if (j < pos) {
                    newmat[i][j] = mat[i][j];
                } else if (j > pos) {
                    newmat[i][j] = mat[i][j - 1];
                }
            }
        }
        return newmat;
    }
    
    static matAddRow(mat, newrow, pos = null) {
        //Anhade una fila a una matriz,
        //mat = la matriz original
        //newrow = el array con el contenido de la nueva fila
        //pos = la posicion que tendra la nueva fila,
        //      si pos se lo deja en null, la nueva fila se anhadira al ultimo
        let newmat = [];
        if (pos == null) {
            pos = mat.length;
        }
        for (let i = 0; i < mat.length + 1; i++) {
            if (i < pos) {
                newmat[i] = mat[i];
            } else if (i == pos) {
                newmat[i] = [];
                for (let j = 0; j < newrow.length; j++) {
                    newmat[i][j] = newrow[j];
                }
            } else if (i > pos) {
                newmat[i] = [];
                for (let j = 0; j < mat[i - 1].length; j++) {
                    newmat[i][j] = mat[i - 1][j];
                }
            }
        }
        return newmat;
    }
    
    static matUnionCol(mat1, mat2){
        /*
        * Une por columna mat 1 con mat 2
        * es decir si mat1 = [[1,2],[5,6]]
        * y mat2 = [[3,4],[7,8]]
        * el resultado sera= [[1,2,3,4],[5,6,7,8]]
        */
        let res = new Array();
        for ( let i=0; i<mat1.length; i++ ){
            res[i] = new Array();
            for ( let j=0; j<mat1[i].length; j++ ){
                res[i][j] = mat1[i][j];
            }
            for ( let j=0; j<mat2[i].length; j++ ){
                res[i][j+mat1[i].length] = mat2[i][j];
            }
        }
        return res;
    }
    
    static matUnionRow(mat1,mat2){
        /*
         * Une por fila mat 1 con mat 2
         * es decir si mat1 = [[1,2],[5,6]]
         * y mat2 = [[3,4],[7,8]]
         * el resultado sera= [[1,2],[5,6],[3,4],[7,8]]
         */
        let res = new Array();
        for ( let i=0; i<mat1.length; i++ ){
            res[i] = mat1[i];
        }
        for ( let i=0; i<mat2.length; i++ ){
            res[i+mat1.length] = mat2[i];
        }
        return res;
    }
    
    static matExtractColumn(mat, numCol){
        //Extrae una columna y lo retorna en un formato array
        //mat la matriz, numCol el numero de columna
        let result = [];
        for(let i=0; i<mat.length; i++){
            result[i] = mat[i][numCol];
        }
        return result;
    }
    
    static matExtractRow(mat, numRow){
        //Extrae una fila y lo retorna en un formato array
        //mat la matriz, numRow el numero de fila
        let result = [];
        for(let i=0; i<mat[numRow].length; i++){
            result[i] = mat[numRow][i];
        }
        return result;
    }
    
    static matExtractColumnGroup(mat, groupCol){
        //Extrae un grupo de columnas de una matriz, y lo retorna en otra matriz
        // solo con esas columnas
        //groupCol es un array que indica los numeros de columnas a extraer
        // ej, extractColumnGroup(matrizA, [2,4,6]);
        let result = [];
        for(let i=0; i<mat.length; i++){
            result[i] = [];
            for ( let j=0; j<groupCol.length; j++ ){
                result[i][j] = mat[i][groupCol[j]];
            }
        }
        return result;
    }
    
    static matExtractRowGroup(mat, groupRow){
        //Extrae un grupo de filas de una matriz, y lo retorna en otra matriz
        // solo con esas filas
        //groupCol es un array que indica los numeros de filas a extraer
        // ej, extractRowGroup(matrizA, [2,4,6]);
        let result = [];
        for(let i=0; i<groupRow.length; i++){
            result[i] = [];
            for ( let j=0; j<mat[i].length; j++ ){
                result[i][j] = mat[groupRow[i]][j];
            }
        }
        return result;
    }
    
    static matConvertFromArray(array, matColumna = true){
        let result = [];
        if ( !matColumna )
            result[0] = array;
        if ( matColumna )
            for ( let i=0; i<array.length; i++ )
                result[i] = [array[i]];
        return result;
    }
    
    static matTransp(mat){
        //transpuesta de una matriz
        let result = [];
        for ( let i =0; i<mat[0].length; i++ ){
            result[i] = [];
            for ( let j=0; j<mat.length; j++ ){
                result[i][j] = mat[j][i];
            }
        }
        return result;
    }
    
    static matSetColumnRowTitles(mat, rowTitles=null, columnTitles=null ){
        /*
         * Esta funcion envia un titulo a cada columna y a cada fila
         * si se lo desea
         * Ej.  let mat = [[1,2,3],[4,5,6], [7,8,9]];
         *      mat = setColumnRowTitles(mat,['uno', 'dos', 'tres'], ['cuat', 'cinco', 'seis']);
         */
        let result = [];
        let resultNewCol = false;
        if ( rowTitles != null ){
            result = this.matAddColumn(mat,rowTitles, 0);
            resultNewCol = true
        }
        if ( columnTitles != null ){
            if ( resultNewCol )
                result = this.matAddRow(result,this.arrayAddValue(columnTitles, 'X', 0), 0);
            else
                result = this.matAddRow(mat, columnTitles, 0);
        }
        return result;
    }
    
    static matGetValue(mat, columnTitle = null, rowTitle = null){
        /*
        * Esta funcion retorna el valor de una matriz en la fila que lleva
        * el nombre rowTitle y en la columna columnTitle
        * si rowTitle es null entonces envia un array con el contenido de la 
        * columna columnTitle, analogamente si columnTitle es null
        * Ej. 	let mat = [[1,2,3],[4,5,6], [7,8,9]];
                mat = matSetColumnRowTitles(mat,['a', 'b', 'c'], ['d','e', 'f']);
                console.log(matGetValue(mat, 'd', 'a' ));
        */
        if ( (columnTitle == null && rowTitle == null) || mat.length == 1 || mat.length == null )
            return null;
        if (columnTitle != null && rowTitle == null)
            for ( let i=0; i<mat[0].length; i++ )
                if( mat[0][i] == columnTitle ){
                    let result = [];
                    for( let j=0; j<mat.length; j++ )
                        result[j] = mat[j][i];
                    return result;
                }
        for ( let i=0; i<mat.length; i++ )
            if ( columnTitle == null && rowTitle!=null )
                if ( mat[i][0] == rowTitle )
                    return mat[i];
            else
                if ( mat[i][0] == rowTitle )
                    for ( let j=0; j<mat[i].length; j++ )
                        if ( mat[0][j] == columnTitle )
                            return mat[i][j];
    }
    
    /*funtion matAlterColumn( mat, arrayColumns, functionName, valuesInsideFunc=null ){
        if ( mat == null ) return null;
        if ( mat.length == 0 ) return null;
        let result = [];
        for ( let i=0; i<mat.length; i++ ){
            for ( j=0; j<arrayColumns.length; j++ ){
                mat[i][arrayColumns[j]] = functionName(mat[i][arrayColumns[j]]);
            }
        }
        return mat;
    }*/
    
}