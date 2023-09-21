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
class Tjson{
    constructor(){}

    static extractColumnFromJson(json, columnType) {
        // retorna un array que extrae una columna de cierto tipo de un json
        if (json==null) return null;
        let result = [];
        for (let i = 0; i < json.length; i++) {
            result[i] = json[i][columnType];
        }
        return result;
    }
    
    /**
     * Funcion que une dos json, es decir, si a json le falta un atributo, lo rellena de jsonMaster
     * y quizas si un valor de json es null, lo autocompleta de jsonMaster que si o si tiene que estar relleno con
     * valores por defecto
     * @function jsonMergeJsons
     * @param {Object} json 
     * @param {Object} jsonMaster 
     * @returns {Object}
     */
    static jsonMergeJsons(json, jsonMaster){
        jQuery.each(jsonMaster,function(p,val){
            let qval = false;
            jQuery.each(json,function(q,sval){
                if ( q == p ){
                    if ( sval == null ){ //si el valor de json es nulo, se copia
                        json[q] = val;
                    } else if ( !Array.isArray(sval) )
                        if( typeof(sval) == 'object' ){
                            json[q] = this.jsonMergeJsons(sval,val);
                        }
                    qval = true;
                    return false;
                }
            });
            if ( !qval ){
                json[p] = val;
            }
        });
        return json;
    }
    
    static jsonDelValN1(json,fields){
        /*
        * Delete json values on cap 1
        * Esta funcion elimina campos de un json, 
        * que corresponderia a la primera capa de variable, no asi con los subitems
        * fields: seria un array con los campos que no se incluiran en el nuevo json
        */
        let res = new Object();
        jQuery.each(json,function(p,val){
            
            if ( !Tlinear.isDataInArray(fields,p) ){
                res[p] = val;
            }
        });
        return res;
    }
    
    static jsonDelVal(json,matSub){
        /*
        NO ESTA TERMINADO
        * Esta funcion elimina campos de un json, 
        * mat seria la matriz tal que cada fila sea el item o subitem a eliminar
        * si la primera fila consta de un solo valor, entonces sera ese, osea el indice 1 que se
        *  eliminar con todas sus raices incluidas
        * si en la segunda hay 3 columnas, osea 3 valores, sera item1/item2/item3 osea solo
        *   se eliminara el item3 con
        */
        let res = new Object();
        jQuery.each(json,function(p,val){
            
            if ( !Array.isArray(val) ){
                if ( typeof(val)  ){
    
                }
            }
            for ( let i=0; i<matSub.length; i++ ){
                if ( Array.isArray(matSub[i]) )
                    for (let j=0; j<matSub[i].length; j++){
                        //res[] = 
                    }
                else {
                    if ( p!=matSub[i] ){
                            res[p] = val;
                    }
                }
            }
        });
        return res;
    }
    
    static printJson(json) {
        console.log('printJson');
        $.each(json, function(index, value) {
            console.log(index + ": " + value);
        });
    }
    
    static getMatrixFromJson(json) {
        // convierte un json en una matriz
        // atender que las filas del json sean todas del mismo tamanho
        // o saldra tipo indefinido
        if (json == null) return null;
        let mat = [];
        for (let i = 0; i < json.length; i++) {
            //mat[i] = new Array(json[i].length);
            mat[i] = [];
            j = 0;
            $.each(json[i], function(item, value) {
                mat[i][j] = value;
                j++;
            });
        }
        return mat;
    }
    
    
}

class Tobject{
    constructor(){}
    static getTypesFromObjects(objects) {
        // [Array] Obtiene los tipos de los valores del array objects
        var types = [];
        let i = 0;
        $.each(objects, function(typ, value) {
            types[i] = value;
            i++;
        });
        return types;
    }
}

class Tform{
    //De Tools: Tlinear, Tjson,
    constructor(){}
    static pruebaFormCreator_make(){
        let form ={
            'id':'form',
            'onsubmit':'return false',
            'others':{
                'class':'form'
            },
            'conf':{
                'divClassDefault': true
            },
            'items':[{
                    'label': {
                        'text':'Nombre',
                        'class':'col-sm-2 col-form-label'
                    },
                    'type':'none',
                    'id':'text1',
                    //'placeholder':'Escriba su nombre',
                    'class':'form-control input-md',
                    'name':'text1',
                    'required':true,
                    'others':{
                        'placeholder':'Escriba su nombre',
                    }
                },
                {
                    'label': {
                        'text':'Nombre',
                        'class':'col-sm-2 col-form-label'
                    },
                    'type':'text',
                    'id':'text1',
                    //'placeholder':'Escriba su nombre',
                    'class':'form-control input-md',
                    'name':'text1',
                    'required':true,
                    'others':{
                        'placeholder':'Escriba su nombre',
                    }
                },
                {
                    'label': {
                        'text':'Apellido',
                        'class':'col-sm-2 col-form-label'
                    },
                    'type':'text',
                    'id':'text2',
                    'placeholder':'Escriba su apellido',
                    'class':'form-control input-md',
                    'name':'text2',
                    'required':true
                },
                {
                    'label': {
                        'text':'Universidad',
                        'class':'col-sm-2 col-form-label'
                    },
                    'type':'text',
                    'id':'uni',
                    'placeholder':'Escriba el nombre de su universidad',
                    'class':'form-control input-md',
                    'required':true
                },
                {
                    'label': {
                        'text':'Fecha',
                        'class':'col-sm-2 col-form-label'
                    },
                    'type':'date',
                    'id':'date',
                    'class':'input-group date',
                },
                {
                    'optionSelect':'Seleccionar un pais',
                    'options':['Paraguay','Argentina','USA','Canada','Noruega'],
                    //'values':'options',
                    'values':[1,2,3,4,5],
                    'label':{
                        'text':'Pais',
                        'class':'col-sm-2 col-form-label'
                    },
                    'type':'select',
                    'others':{
                        'id':'selectCountry'
                    }
                },
                {
                    'label': {
                        'text':'Eres un humano?',
                        'class':'col-form-label',
                        //for:'ch1'
                    },
                    'type':'checkbox',
                    'id':'ch1',
                    //'class':'form-check-input',
                    'name':'ch1',
                    'divClassDefault':false,
                    'value':'valor de ch1'
                },
                {
                    'label': {
                        'text':'Direccion',
                        'class':'col-sm-2 col-form-label'
                    },
                    'type':'textarea',
                    'id':'ta1',
                    'placeholder':'Escriba su direccion local',
                    'class':'form-control',
                    'name':'ta1',
                    cols:33,
                    rows:3,
                    text:'Hola'
                },
                {
                    type: 'button',
                    id:'button1',
                    text:'Enviar',
                    onclick:'fC_getContent(\'form\')',
                    class:'btn btn-primary',
                    value:'Primer Boton'
                }
            ]
        };
        //console.log(formCreator_make(form));
        return this.formCreator_make(form);
    }

        /**
     * Si es que se envia un array, y el primer valor es null, entonces contendra el valor del segundo elemento del array
     * si es que se envia un boolean, solo recibira el nombre del tipo, no sera igualado a su valor correspondiente
     * por ejemplo required.
     * Ejemplo: 
     * let json = {
     *     'class':[CLASS,'custom-select d-block w-100'],
     *     'id':id,
     *     'name':name,
     *     'required': required
     * };
     * @param {JSON} json
     * @param {JSON} jsonArray
     * Si queremos crear en un bucle varias filas de elementos semejantes de un formulario con los valores de (ciertos o) todos los
     *  atributos distintos podemos enviar en un Objeto tipo JSON los atributos que tendran valores variables, ejemplo:
     * json={
            'optionSelect': 'Seleccione un valor',
            'options':formCreator_getInputs(),
            'values':'options'
        }
        jsonArray={id:'op_'+fields[i]}
        Entonces automaticamente rellena el json con los atributos contenidos en jsonArray, en este ejemplo seria el atributo 'id'.
     * @returns {string}
     */
    static formCreator_addAttComplex(json, jsonArray=null){
        let res='';
        let jAelem = null;
        let jAelemVal = false;
        if ( jsonArray != null ){
            jAelemVal = true;
            jAelem = new Array();
            let i =0;
            jQuery.each(jsonArray,function(p,val){
                json[p] = null;
                jAelem[i] = p;
                i++;
            });
        }
        jQuery.each(json,function(p,val){
            if ( jAelemVal ){
                if ( Tlinear.isDataInArray(jAelem,p) ){
                    val = jsonArray[p];
                }
            }
            if ( Array.isArray(val) ){
                if ( val[0] != null )
                    res+= ' ' + p + '="' + val[0] + '"';
                else 
                    res+= ' ' + p + '="' + val[1] + '"';
            } else if(typeof(val) == 'boolean'){
                if ( val )
                    res += ' ' + p;
            } else {
                if ( val!=null )
                    res += ' ' + p +'="' + val + '"';
            }
        });
        return res;
    }

    /**
     * Crea un input del tipo inputType con sus respectivos atributos
     * @function formCreator_inputCreate
     * @param {string} inputType Es el tipo de input
     * @param {JSON} attJSON Es un JSON que contendra los atributos del input
     * @param {JSON} jsonArray Ver detalles en formCreator_addAttComplex, puede ser null
     * @param {boolean} haveClose true si tendra etiqueta de cierre </..>, false por defecto
     * @param {string} haveContent Este sera el contenido que tendra en medio de las etiquetas, si no habra ni uno, dejar vacio ''
     * @returns {string}
     */
    static formCreator_inputCreate(inputType, attJSON, jsonArray=null, haveClose=false, haveContent=''){
        return '<'+ inputType + this.formCreator_addAttComplex(attJSON, jsonArray) + '>' + haveContent + (haveClose ? '</'+inputType+'>':'');
    }

    /**
     * Crea un json en el que contiene algunos atributos del input por default, luego lo conveniente seria un merge
     * @function formCreator_defaults
     * @param {string} inputType
     * @returns {Object}
     */
    static formCreator_defaults(inputType){
        switch(inputType){
            case 'form':
            return {
                'id':'form',
                'onsubmit':'return false',
                'others':{},
                'items':[
                    {
                        'label': {},
                        'type':''
                    }
                ],
                'conf':{
                    'divClassDefault':true
                },
                'hidden':{
    
                }
            }
            case 'select':
                return {
                    'class':'custom-select d-block w-100',
                }
            break;
            case 'label':
                return {
                    'class':'col-sm-2 col-form-label'
                }
            break;
        }
    }

    /**
     * Retorna un Array de elementos y/o propiedades importantes pero comunes a omitir en la creacion de los inputs
     * @function formCreator_getCommons
     * @param {string} element 
     * @returns {Array}
     */
    static formCreator_getCommons(element='input'){
        //Aqui iran los atributos de items que son comunes a todos los elementos
        switch(element){
            case 'form':
                return ['items','others', 'conf','hidden'];
            break;
            case 'input':
                return ['label','others'];
            break;
            case 'select':
                return ['type','others'];
            break;
            case 'button':
                return ['type','text', 'others'];
            break;
            case 'textarea':
                return ['type','text', 'others', 'label'];
            break;
        }
    }

        
    /**
     * Retorna un input del elemento enviado con sus atributos por default
     * @function formCreator_makeInputDefault
     * @param {string} element Nombre del tipo de input a crear
     * @param {string} item Nombre del item asociado al input, para diferentes inputs diferentes clases por ejemplo
     * @returns {string}
     */
    static formCreator_makeInputDefault(element, item=''){
        switch(element){
            case 'div':
                switch(item){
                    case 'checkbox':
                        json = {'class': 'form-group form-check row'};
                    break;
                    default:
                        json = {'class': 'form-group row'};
                    break;
                }
                
            break;
        }
        return this.formCreator_inputCreate(element, json);
    }
 
    /**
     * Funcion que retorna una etiqueta label con sus atributos
     * @function formCreator_label
     * @param {JSON} json Contendra todos los atributos deseados, un campo quizas obligatorio sera 'text':'TEXTO'
     * @param {string} id Id al cual apuntara el label
     */
    static formCreator_label(json, id){
        json['type'] = 'label';
        json['for'] = id;
        let res = this.formCreator_inputCreate('label', Tjson.jsonDelValN1(json,['text','type'])) + json.text + '</label>';
        return res;
    }
    
    /**
     * Crea un formulario a partir de un JSON que contendra ciertas propiedades que se podran corroborar en la funcion de prueba
     * y/o en la variable formMaster, incluyendo cada uno de los elementos que contendra el formulario
     * @param {JSON} json
     * @returns {string}
     */
    static formCreator_make(json){
    
        //Creamos un json master para dejarlo como default
        let formMaster = this.formCreator_defaults('form');
    
        //Mezclamos el json enviado con el master
        json=Tjson.jsonMergeJsons(json,formMaster);
    
        //Aqui creamos la etiqueta form con sus atributos, eliminamos los objetos items, others, conf, etc (En getCommons se veran mas)
        let res=this.formCreator_inputCreate('form',Tjson.jsonDelValN1(Tjson.jsonMergeJsons(json,json.others),this.formCreator_getCommons('form')));
    
        //Los que son de tipo input y llevan la etiqueta input
        let inputCreateTypes = ['text','num','pass','email','checkbox','radio','date'];
        
        //Creamos la variable que contendra los tipos e id del formulario para luego agregarlos en un input hidden y facilitar la extraccion de datos
        let k=0;
        let dataCapture = new Array();
    
        //Agregamos el contenido del form, de acuerdo a lo establecido en json y formMaster
        jQuery.each(json.items,function(p,val){
    
            //Obtenemos el tipo de input
            let getType = val.type;
    
            if ( getType == 'none')
                return true;
    
            //Mezclamos el contenido de others con el json del elemento
            val = Tjson.jsonMergeJsons(val, val.others);
     
            //Procedemos para la captura de datos
            dataCapture[k] = {
                type: getType,
                id: val.id
            };
            k++;
    
            //Agregamos el div por default si es que lo tuviese en true
            if (json.conf.divClassDefault)
                res+=this.formCreator_makeInputDefault('div',getType);
    
            //Si tendra label
            if (val.label != null){
                res+=this.formCreator_label(val.label, val.id);
                if ( val.divClassDefault != null ){
                    if ( val.divClassDefault==true ){
                        res+='<div class="col-sm-10">';
                    }
                }
                else
                    res+='<div class="col-sm-10">';
            }
            
            //Comprobamos que el getType este dentro de los valores que corresponden a un input
            if ( Tlinear.isDataInArray(inputCreateTypes, getType) ){
                res += this.formCreator_inputCreate('input', Tjson.jsonDelValN1(val,this.formCreator_getCommons()));
            } else if ( getType == 'select' ){
                res+=this.formCreator_selectCreate(Tjson.jsonDelValN1(val,this.formCreator_getCommons('select')));
            } else if ( getType == 'button' ){
                res+=this.formCreator_buttonCreate(val);
            } else if ( getType == 'textarea' ){
                res+=this.formCreator_inputCreate('textarea',Tjson.jsonDelValN1(val,this.formCreator_getCommons('textarea')),null,true,val.text);
            }
    
            //Cerramos el label si es que lo tiene
            if (val.label != null)
            if ( val.divClassDefault != null ){
                    if ( val.divClassDefault==true ){
                        res+='</div>';
                    }
            }
            else
                res+='</div>';
    
            //Cerramoss el div si es que lo tuviese en true
            if (json.conf.divClassDefault)
                res+='</div>';
        });
        res+=this.formCreator_inputCreate('input',
            {
                type:'hidden',
                id:json.id+'_hidden',
                value:JSON.stringify({"data":dataCapture}).replace(/"/g,'\'')
            }, null, false);
        res += '</form>';
        //console.log(res);
        return res;
    }
    
    /**
     * Retorna un Array que contendra todos los elementos que podra contener un formulario
     * @function formCreator_getInputs
     * @returns {string[]}
     */
    static formCreator_getInputs(){
        return ['none','label','text','textarea','num','pass','email','checkbox','select','radio','date'];
    }
    
    /**
     * Crea un html que corresponde al elemento select de un formulario
     * @function formCreator_selectCreate
     * @param {Object} json
     * @param {JSON} jsonArray Ver detalles en formCreator_addAttComplex
     * @returns {Object}
     */
    static formCreator_selectCreate(json, jsonArray=null){
        let jsonMaster = {
            'class':this.formCreator_defaults('select').class,
            'optionSelect':null,
            'options':[],
            'values':'options', //Values puede ser otro array o puede ser igual a options
            'label':null
        }
        json = Tjson.jsonMergeJsons(json,jsonMaster);
        let res = this.formCreator_inputCreate('select',Tjson.jsonDelValN1(json,['optionSelect','options','values','label']), jsonArray);
        if ( json.optionSelect != null ){
            res += '<option selected>' + json.optionSelect + '</option>';
        }
        if ( json.values == 'options' )
            json.values = json.options;
        for ( let i =0; i<json.options.length; i++ ){
            res += '<option' + (json.values!=null ? ' value="'+json.values[i]+'"' : '') + '>' +
                json.options[i] + '</option>';
        }
        res += '</select>';
        return res;
    }
    
    /**
     * Crea un input del tipo inputType con sus respectivos atributos
     * @function formCreator_buttonCreate
     * @param {JSON} json Es un JSON que contendra los atributos del input
     * @param {JSON} jsonArray Ver detalles en formCreator_addAttComplex
     * @returns {string}
     */
    static formCreator_buttonCreate(json, jsonArray=null){
        return '<button' + this.formCreator_addAttComplex(Tjson.jsonDelValN1(json, this.formCreator_getCommons('button')),jsonArray) + '>' + json.text + '</button>';
    }
    
    /**
     * Muestra los campos de la tabla con su correspondiente titulo, tipo de campo y otros para luego proceder
     * a la creacion del formulario
     * @function fC_showFieldsForMake
     * @param {string[]} fields 
     * @returns {string}
     */
    static fC_showFieldsForMake(fields, idMaster=''){
        /**
         * Podemos agregar posicion
         */
        let form = new Array();
        let jcontent = {
            form:{
                id:idMaster +'_form',
                onsubmit:'return false'
            },
            title:{
                id:null,
                placeholder:null,
                class:'form-control'
            },
            select:{
                'optionSelect': 'Seleccione un valor',
                'options':this.formCreator_getInputs(),
                'values':'options'
            },
            others:{
                class: 'form-control',
                cols:'33',
                rows:'3'
            }
        };
        let dataCapture = new Array();
        let content = this.formCreator_inputCreate('form', jcontent.form);
        for ( let i=0, k=0; i<fields.length; i++, k++ ){
            form[i] = [
                fields[i],
                this.formCreator_inputCreate('input', jcontent.title,{id:idMaster +'_label_'+fields[i],placeholder:fields[i]} ),
                this.formCreator_selectCreate(jcontent.select, {id:idMaster +'_type_'+fields[i]}),
                this.formCreator_inputCreate('textarea',jcontent.others,{id:idMaster +'_other_'+fields[i]}, true,'{\n\tid:\'\'\n}')
            ];
            dataCapture[k] = { type: 'input', id: idMaster +'_label_'+fields[i] };
            k++;
            dataCapture[k] = { type: 'select', id: idMaster +'_type_'+fields[i] };
            k++;
            dataCapture[k] = { type: 'textarea', id: idMaster +'_other_'+fields[i] };
        }
        //form[fields.length] = ['','','',formCreator_buttonCreate({ text:'Guardar', class:'btn btn-warning'})];
        content += Ttable.makeTable('form',null,'width: 100%;',['Campos', 'Etiqueta', 'Tipo','Atributos Extras'], form,true,false);
        content += this.formCreator_inputCreate('div',{style:'text-align:center;'},null,true, this.formCreator_buttonCreate({
            text:'Guardar',
            class:'btn btn-warning',
            onclick:'fC_generate(\''+idMaster+'_form\')'
        }) );
        content+=this.formCreator_inputCreate('input',
            {
                type:'hidden',
                id:idMaster +'_form_hidden',
                value:JSON.stringify({"data":dataCapture}).replace(/"/g,'\'')
            }, null, false);
        content += '</form>';
        //console.log(content);
        return content;
    }
    
    /**
     * Aqui es donde vendra cuando la tabla de generador a partir de tabla este completada y se presione el boton enlazado a esta funcion
     * @function fC_generate
     * @param {string} idFormMake Id del form creador
     * @returns {string}
     */
    static fC_generate(idFormMake, idform = 'f_'){
        //Guardamos el json de la estructura del formulario que nos facilitara luego la obtencion de los datos
        let dataTypes = JSON.parse(document.getElementById(idFormMake+'_hidden').value.replace(/'/g,'"'));
    
        let form = formCreator_defaults('form');
        
        for ( let i=1, k=0; i<dataTypes.data.length; i+=3 ){
            //Guardamos los nombres de los campos en field
            let idfieldArray = dataTypes.data[i].id.split('_');
            let idfield='';
            for ( let i=2; i<idfieldArray.length; i++ ){
                idfield += '_'+idfieldArray[i];
            }
    
            let fieldType = $('#'+idFormMake.split('_')[0]+'_type'+idfield).children("option:selected").val();
    
            console.log(idfield + '___' + fieldType);
    
            if ( fieldType != 'none' ){
                form['items'][k] = new Array();
                 
                /** ejemplo
                 * {
                        'label': {
                            'text':'Nombre',
                            'class':'col-sm-2 col-form-label'
                        },
                        'type':'none',
                        'id':'text1',
                        //'placeholder':'Escriba su nombre',
                        'class':'form-control input-md',
                        'name':'text1',
                        'required':true,
                        'others':{
                            'placeholder':'Escriba su nombre',
                        }
                    },
                */
                form.items[k]={
                    label: {
                        'text':document.getElementById(idFormMake.split('_')[0]+'_label'+idfield ).value,
                        'class':this.formCreator_defaults('label').class
                    },
                    //type: document.getElementById(idFormMake.split('_')[0]+'_type'+idfield ).value,
                    type: fieldType,
                    id: idform + fieldType + idfield,
                    others: document.getElementById(idFormMake.split('_')[0]+'_other'+idfield ).value
                };
                k++;
            }
        }
        console.log(dataTypes);
        console.log('form');
        console.log(form);
    }
    
    static fC_getContent(idForm){
        let dataTypes = JSON.parse(document.getElementById(idForm+'_hidden').value.replace(/'/g,'"'));
        console.log(dataTypes);
    
        let data = new Object();
        let value='';
        //return ['none','label','text','textarea','num','pass','email','checkbox','select','radio','date'];
        let valuesTypes = ['text','textarea','num','pass','email','date'];
        for ( let i=0; i<dataTypes.data.length; i++ ){
            value='';
            if ( Tlinear.isDataInArray(valuesTypes,dataTypes.data[i].type) )
                value = document.getElementById(dataTypes.data[i].id).value;
            else if (dataTypes.data[i].type == 'select')
                value = $("#"+dataTypes.data[i].id).find(":selected").text();
            else if (dataTypes.data[i].type == 'checkbox')
                value = document.getElementById(dataTypes.data[i].id).checked;
            else if (dataTypes.data[i].type == 'radio')
                value = $('input[id='+dataTypes.data[i].id+']:checked').val();
            else
                value = document.getElementById(dataTypes.data[i].id).value;
            data[dataTypes.data[i].id] = value;
            
        }
        console.log(data);
        return data;
    }
    
    
    //...........................................
    
    
    static formCreator_input(json, divDefault){
        //<div class="form-group row"></div>
    
        //Agregamos el div por default
        if (divDefault)
            res+=this.formCreator_makeInputDefault('div');
        //Si tendra label
        if (val.label != null){
            res+=this.formCreator_label(val.label, val.id);
            res+='<div class="col-sm-10">';
        }
        //Creamos el input
        res += this.formCreator_inputCreate(inputType, Tjson.jsonDelValN1(val,this.formCreator_getCommons()));
        //Cerramos el label si es que lo tiene
        if (val.label != null)
            res+='</div>';
        //Cerramoss el div
        if (json.conf.divClassDefault)
            res+='</div>';
    }
    
    static formCreator_text( id, placeholder=null, CLASS=null, name=null, required=false ){
        /*return '<input type="text" id="' + id + '"' +(name != null ? ' name="'+name+'"' : '')  +
            (placeholder != null ? ' placeholder="'+placeholder+'"' : '') +
            'class="' + (CLASS != null ? CLASS : 'form-control input-md') +
            (required ? ' required' : '') + '>';*/
        let json = {
            'type':'text',
            'id':id,
            'placeholder':placeholder,
            'class':CLASS,
            'name':name,
            'required':required
        }
        return this.formCreator_inputCreate('input', json);
    }
    static formCreator_label2(name, forName=null, CLASS=null){
        return '<label class="'+(CLASS!=null ? CLASS : 'col-md-4 control-label' )+
            '"'+(forName!=null ? ' for="'+forName+'"' : '' )+'">'+name+'</label>';
    
    
    }
    
    static formCreator_select(options, values=null, title=null,
        id=null, name=null, CLASS=null, required=false ){
        let json = {
            'class':[CLASS,'custom-select d-block w-100'],
            'id':id,
            'name':name,
            'required': required
        };
        res = this.formCreator_inputCreate('select', json);
        if ( title != null ){
            res += '<option value="">' + title + '</option>';
        }
        for ( let i =0; i<options.length; i++ ){
            res += '<option' + (values!=null ? ' value="'+values[i]+'"' : '') + '>' +
                options[i] + '</option>';
        }
        res += '</select>';
        return res;  
    }
    
    static formCreator_options(json){
        let jsonMaster = {
            'type': 'select',
            'id': 'select1',
            
        }
    }
    
    static formCreator_addAtt(json){
        let res='';
        jQuery.each(json,function(p,val){
            if ( val!=null )
                res += ' ' + p +'="' + val + '"';
        });
        return res;
    }
    
    //Require https://gasparesganga.com/labs/jquery-loading-overlay/
    static ut_loading(proc, element=null){ //No funciona hide
        switch(proc){
            case 'show':
                if (element!=null)
                    $.LoadingOverlay("show", {
                        image       : "",
                        fontawesome : "fa fa-cog fa-spin"
                    });
                else
                    $("#"+element).LoadingOverlay("show", {
                        image       : "",
                        fontawesome : "fa fa-cog fa-spin"
                    });
            break;
            case 'hide':
            console.log('aqui');
                if (element!=null){
                    $("#" + element).LoadingOverlay("hide"); console.log('en el if' + "#" + element);}
                else
                    $.LoadingOverlay("hide");
            break;
        }
    }
}

class Tutil{
    //De Tools: Tform, Tlinear,
    //need Swal, jspanel
    constructor(){}
    // Monedas
    static sepMiles(x, moneda='PYG') {
        /*
         * Funcion que separa de a mil cualquier numero ingresado
         * Los tipos de moneda admitidos son 'PYG', 'USD' Y 'CANT'
         * CANT seria un formato de cantidad, sin ni una coma, solo los puntos correspondientes
         * Verificar bien la funcion, ya que depende mucho del tipo de moneda seteado
         */
        let valPoint = false;
        for ( let i=0; i<x.length; i++ ){
            if ( x[i] == '.' ){
                valPoint = true;
                break;
            }
        }
        if ( !valPoint )
            x += '.0';
        if( moneda=='PYG'){
            if ( x.split('.')[1].length == 1 )
                x += '0';
            x = x.toString().replace('.','').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return x;
        } else if (moneda == 'USD'){
            let res = x.split('.');
            x = res[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            x += ',' + res[1];
            return x;
        } else if ( moneda == 'CANT' ){
            x = parseInt(x);
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }

    static arrayColumnSepMil(array, arrayColumns, moneda){
        /*
         * Funcion que retorna el mismo array pero con los puntos separadores de miles
         * ATENCION, la variable moneda es un array, ejemplo,
         * arrayColumnSepMil(array, [2,3,5],['PYG','CANT']
         * en este caso, la columna 2 sera PYG y la columna 3 y 5 seran tipo CANT
         * ya que la si la longitud de arrayColumns es mayor que la de moneda
         * se toma por defecto para las columnas sobrantes la ultima moneda
         * dentro del array moneda
         */
        if ( array == null ) return null;
        if ( array.length == 0 ) return null;
        let totColumns = array.length;
        if ( arrayColumns != null ) totColumns = arrayColumns.length;
        let lastCurrency = moneda[moneda.length-1];
        let mon;
        for ( let i=0; i<totColumns; i++ ){
            if ( moneda[i] == null ) mon = lastCurrency;
            else mon = moneda[i];
            if ( arrayColumns != null )
                array[arrayColumns[i]] = this.sepMiles(array[arrayColumns[i]],mon);
            else
                array[i] = this.sepMiles(array[i],mon);
        }
        return array;
    }

    static matColumnSepMil(mat, arrayColumns, moneda){
        /*
         * Funcion que retorna la misma matriz pero con los puntos separadores de miles
         * ATENCION, la variable moneda es un array, ejemplo,
         * matColumnSepMil(mat, [2,3,5],['PYG','CANT'])
         * en este caso, la columna 2 sera PYG y la columna 3 y 5 seran tipo CANT
         * ya que la si la longitud de arrayColumns es mayor que la de moneda
         * se toma por defecto para las columnas sobrantes la ultima moneda
         * dentro del array moneda
         */
        if ( mat == null ) return null;
        if ( mat.length == 0 ) return null;
        let result = [];
        let lastCurrency = moneda[moneda.length-1];
        let mon;
        for ( let i=0; i<mat.length; i++ ){
            for ( j=0; j<arrayColumns.length; j++ ){
                if ( moneda[j] == null ) mon = lastCurrency;
                else mon = moneda[j];
                mat[i][arrayColumns[j]] = this.sepMiles(mat[i][arrayColumns[j]],mon);
            }
        }
        return mat;
    }

    static matColumnSepMil2(mat, arrayColumns, monedaPos){
        /*
         * Funcion que retorna la misma matriz pero con los puntos separadores de miles
         * ATENCION, la variable moneda es un numero, indica la columna en la que se encuentran
         * las conversiones de moneda, mat y arrayColumns son analogos a matColumnSepMil(...)
         */
        if ( mat == null ) return null;
        if ( mat.length == 0 ) return null;
        for ( let i=0; i<mat.length; i++ ){
            for ( j=0; j<arrayColumns.length; j++ ){
                mat[i][arrayColumns[j]] = this.sepMiles(mat[i][arrayColumns[j]],mat[i][monedaPos].toString());
            }
        }
        return mat;
    }
    
        //Alerts
    static makeAlertFast(msg, type='success', time=5000){
        // types: success, error, warning, info, question
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: time
        });
    
        Toast.fire({
            type: type,
            title: msg
        });
    }
    
    static makeAlert(show=false, msg='', type='success', time=5000, toastVar=true,
                       positionVar= 'top-end', confirmButton=false){
        // types: success, error, warning, info, question
        let Toast = Swal.mixin({
            toast: toastVar,
            position: positionVar,
            showConfirmButton: confirmButton,
            timer: time
        });
        if ( show ){
            Toast.fire({
                type: type,
                title: msg
            });
        }
        return Toast;
    }

    static makeWaitAlert(haveGif=false, folderPath=null, titulo, contentHtml ){
        titulo = (titulo==null ? 'Realizando petición' : titulo);
        contentHtml = (contentHtml==null ? '<h1>Favor aguarde<h1>' : contentHtml);    
        let urlgif = null;
        if ( haveGif )
            urlgif = this.getRandomGif(folderPath);
        return Swal.fire({
            title: titulo,
            html: contentHtml,
            imageUrl: urlgif,
            imageHeight: '200px',
            onBeforeOpen: () => {
            Swal.showLoading();
            },
            onClose: () => {
            
            }
        });
    }
    
    static makeWaitError(titulo='Error en la petición', content='Quizas realizo una solicitud inválida' ){
        return Swal.fire({
            type: 'error',
            title: titulo,
            text: content
          });   
    }
    
    static makeJSPanel(contenidoJSPanel, title, id="jsPanel", altura=null, ancho='auto'){
        //V4 https://www.jqueryscript.net/other/jQuery-Plugin-To-Create-Multifunctional-Floating-Panels-jsPanel.html
        //https://codepen.io/Flyer53/pen/NRNxQW
        //https://codepen.io/Flyer53/pen/bNeRPg
        //https://codepen.io/Flyer53/#
        /*let rx = window.innerHeight/1.1;
        var configs = {
            //theme: 'success filledlight', 'warning', 'info', orangered, steelblue
            theme: 'primary',
            closeOnEscape: true,
            id: id,
            // Estas propiedades siguientes (container, resizeit), son para que el jspanel se mantenga en su
            // posicion actual de la pagina
            // Es decir, para que no se mueva a la par que el scrollY se mueva
            //container: '.content-wrapper',
            headerTitle: title,
            resizeit: {
                containment: [60,60]
            },
            dragit: {
                containment: 0,
            },
            position: {
                my: 'center-top',
                at: 'center-top',
                offsetX: 60,
                offsetY: 61
            },
            panelSize:{
                width: function(){
                    return (ancho == null ? 'auto' : ancho);
                },
                height: function(){
                    return (ancho == null ? window.innerHeight/1.3 : altura);
                    //return window.innerHeight/1.3;
                }
            },
            //la siguiente funcion indica cuanto margen dejara con respecto a los bordes, al maximizar el jspanel
            maximizedMargin: 10,
    
        };
        panelItems = jsPanel.create({
            config: configs,
            content: contenidoJSPanel,
        });*/
    
        //jsPanel version 1
        //https://v1.jspanel.de/api.html
        if (altura == null)
            altura = window.innerHeight/1.3;
        $.jsPanel({
            id: id,
            overflow: 'scroll',
            position: {
                left: 200,
                top:  70
            },
            //size: 'auto',
            size:{
                width: ancho,
                height: altura
            },
            maximizedMargin: {
                top: 10,
                right: 20,
                bottom: 10,
                left: 10
            },
            offset: {
                top: 20,
                left: 20
            },
            resizable: {
                handles: "n, e, s, w, ne, se, sw, nw",
                autoHide: !1,
                minWidth: 400,
                minHeight: 200
            },
            draggable: {
                containment: "parent"
            },
            title:    title,
            theme:    'info',
            content: contenidoJSPanel
        });
    }
    
        //Imagenes
    static getRandomGif(path, interval = [1,24]){
        //Esta funcion retorna un gif aleatorio que se incluye en la carpeta path,  del 1 al 24 o el rango que se envie,
        return path + '/' +Math.floor((Math.random() * interval[1]) + interval[0]) + '.gif';
    }
    
        //Extras
    static utShowElement(id, show){
        // Esta funcion muestra u oculta el contenido de un elemento (o un array de elementos) por su id
        // show tambien puede ser un array, que sera true or false segun su correspondiente en el array id de ids
        // si id es un array, y show no lo es, por defecto todos los campos id seran lo que se seteo en show
        // si id contiene 5 elementos y show solo dos, el primero sera show[0] y el resto sera show[1]
        let lastShow = null;
        if(Array.isArray(show))
            lastShow = show[show.length - 1];
        if ( Array.isArray(id) )
            for ( let i=0; i<id.length; i++ )
                if ( Array.isArray(show) )
                    if( show[i] != null )
                        document.getElementById(id[i]).style.display = (show[i] ? 'block' : 'none' );
                    else
                        document.getElementById(id[i]).style.display = (lastShow ? 'block' : 'none' );
                else
                    document.getElementById(id[i]).style.display = (show ? 'block' : 'none' );
        else
            if ( !Array.isArray(show) )
                document.getElementById(id).style.display = (show ? 'block' : 'none' );
    }
    
    static thisIdExist(id){
        // Esta funcion indica si existe un elemento con el id enviado
        if($("#"+id+"").length == 0) {
            return false
        } else return true;
    }
    
    static utSepararEntre( arrayData, separador, entreChar=null  ){
        //Funcion que retorna un string de datos del array de arrayData separados entre
        //el caracter que se envia en la variable separador, ej: usSepararEntre(['manzana','pera','sandia'], ',')
        // retorna: "manzana,pera,sandia"
        //entreChar seria si cada dato va estar a su vez entre otro caracter,
        //ejemplo: usSepararEntre(['manzana','pera','sandia'], ',', '"')
        // retorna: ' "manzana","pera","sandia" '
        /*
         * Otro Ejemplo
         * arrayData = ["manzana", "pera","sandia"];
         * console.log(utSepararEntre(arrayData, ',', '\''));
         */
        let result = "";
        for ( let i=0; i<arrayData.length; i++){
            result += (entreChar != null ? entreChar : '') +  arrayData[i] + (entreChar != null ? entreChar : '');
            if ( i != (arrayData.length-1) )
                result += separador;
    
        }
        return result;
    }
    
        //Elementos
    static utMakeCollapsable(title, content, type='primary', displayNone=true){
        // Crea un elemento tipo collapsable de bootstrap y adminlte3
        // Si displayNone=true entonces el body del elemento se inicia mostrandose
        // si no, entonces inicia colapsado, osea no se muestra a menos que se le haga click
        return '<div class="card card-'+(type==null ? 'default' : type)+' collapsed-card">' +
            '<div class="card-header" data-widget="collapse"><h3 class="card-title">'+
            title +
            '&nbsp&nbsp&nbsp&nbsp</h3>'+
            '<div class="card-tools">'+
            '<button type="button" class="btn btn-tool" data-widget="collapse">'+
            '<i class="fa fa-plus"></i></button> </div> </div> <div class="card-body" style="display: '+
            (displayNone ? 'none' : 'block')+';">'+
            content + '</div></div>';
    }
    
        //Excel
    static setEditableTable(mat, id){}
    
        //Graficos

    
    static utGraphComplements(type=null){
        /*
        * Esta funcion retorna las opciones de un grafico o chart
        */
        if (type==null) return null;
        switch (type) {
            case 'export':
                //Esta funcion hace que el grafico tenga la opcion de exportar el grafico a ciertos tipos de formatos
                return {
                    chartOptions: { // specific options for the exported image
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        }
                    },
                    fallbackToExportServer: false
                };
                break;
            default:
                return null;
                break;
        }
    }
    
    static utMakeGraphSmart(idDiv, title, subtitle, xAxis, data, series=null, type=null, options=null, dataTransp = false){
        /*
         *  Esta funcion retorna un grafico automaticamente tomando en cuenta los atributos seteados
         *  idDiv = string - el id del elemento preparado para contener el grafico
         *  title = string - el titulo del grafico
         *  subtitle = string - el subtitulo del grafico
         *  xAxis = array(string) - los nombres de los puntos del ejeX, tiene que concidir con la data[0].length de la matriz o cantidad de datos
         *  data = array - matrix - es la matriz que contiene los datos del grafico
         *  series = array(string) son las series o nombre de filas de datos del grafico
         *  type = string - es el tipo requerido para el grafico, estan indicados en la variable resType
         *  options = string - son las opciones requeridas para el grafico, estan indicadas en la variable allOptions
         *  dataTransp = si la matris data sera transpuesta o no
         */
        let resType = ['column','pie','line'];
        let finalType = null;
        if ( data.length>1 ){
            resType.splice(resType.indexOf('pie'), 1);
        }
        let res = new Object();
        res['title'] = new Object();
        res['title']['text'] = title
        res['subtitle'] = new Object();
        res['subtitle']['text'] = subtitle;
        res['plotOptions'] = new Object();
        if ( type != null ){
            if ( isDataInArray(resType, type) ){
                finalType = type;
            }
        } else {
            finalType = 'column';
        }
        if ( finalType == 'column' || finalType=='line' ){
            res['plotOptions']['series'] = new Object();
            res['xAxis'] = new Object();
            res['xAxis']['categories'] = xAxis;
            if ( finalType == 'column' ){
                res['plotOptions']['series']['pointPadding'] = 0.25;
                res['chart'] = new Object();
                res['chart']['type'] = 'column';
            }
            else if ( finalType == 'line' ){
                //res['plotOptions']['series']['stacking'] = 'normal';
                res['plotOptions']['series']['pointStart'] = 0;
                res['plotOptions']['series']['pointInterval'] = 1;
            }
            res['series'] = new Array();
            if ( data.length == 1 ){
                console.log('data length es 1');
                res['series'][0] = new Object();
                res['series'][0]['data'] = data[0];
                res['series'][0]['name'] = series[0];
            } else{
                let lon = data.length;
                if(dataTransp)
                    lon = data[0].length;
                for ( let i=0; i<lon; i++ ){
                    res['series'][i] = new Object();
                    if (!dataTransp) {
                        res['series'][i]['data'] = data[i];
                        res['series'][i]['name'] = series[i];
                    }
                    else {
                        res['series'][i]['data'] = matExtractColumn(data,i);
                        res['series'][i]['name'] = series[i];
                    }
                }
            }
        } else if ( finalType == 'pie' ){
            res['chart'] = new Object();
            res['chart']['type'] = 'pie';
            res['plotOptions']['pie'] = new Object();
            res['plotOptions']['pie']['dataLabels'] = new Object();
            res['plotOptions']['pie']['dataLabels']['connectorWidth'] = 0;
            res['series'] = new Array();
            res['series'][0] = new Object();
            res['series'][0]['data'] = matTransp([xAxis, data[0]]);
        }
    
        //Seccion Options
        let allOptions = ['export'];
        if (options != null)
            options = Tlinear.convertArrayInAssoArrayTrueFalse(options, allOptions);
        else
            options = Tlinear.convertArrayInAssoArrayTrueFalse(allOptions, allOptions);
        for ( let i=0; i<allOptions.length; i++ ){
            if ( options[allOptions[i]] )
                options[allOptions[i]] = utGraphComplements(allOptions[i]);
            else
                options[allOptions[i]] = false;
        }
        res['exporting'] = options['export'];
    
        //Dibujamos el chart
        Highcharts.chart(idDiv, res);
    }
    
    static utGetChartProp( type, data, options ){
        //INUTILIZABLE
        //types = [ 'line', 'column', 'pie', 'bar']
    
        //Las propiedades comunes de los charts
        /*
        let allHave = ['title', 'subtitle', 'plotOptions', 'series'];
    
        //Propiedades exclusivas de cada chart
        let lineProp = ['xAxis'];
        let pieProp = ['chart'];
        let columnProp = ['xAxis', 'chart'];
    
        let chart = new Object();
        jQuery.each(options, function(p, val) {
            chart[p] = val; //Las opciones lo tienen todos los charts
        });
    
        jQuery.each(data, function(p,val){
            if ( isDataInArray(allHave,p) )
                chart[p] = val; //Solo si es una propiedad comun se guarda
        });
        jQuery.each(data, function(p,val) {
            switch (type) {
                case 'line':
                        if (isDataInArray(lineProp, p)) chart[p] = val;
                    break;
                case 'pie':
                    if (isDataInArray(pieProp, p)) chart[p] = val;
                    break;
                case 'column':
                    if (isDataInArray(columnProp, p)) chart[p] = val;
                    break;
                default:
                    return null;
                    break;
            }
        });
        return chart;*/
    }
    
    static utMakeMenu(jsonMenu, idul){
        /*
         * idul: Seria el id de la etiqueta ul donde sera contenida el menu
         * jsonMenu: seria un json con un formato similar al del ejemplo de abajo
         * Ejemplo del jsonMenu:
         * let sidebar = {
                  'repuestos' : {
                    'name' : 'Repuestos',  //nombre del menu
                    'liclass' : 'nav-item has-treeview menu-open', //clase de la etiqueta li del item del menu
                    'iclass' : 'nav-icon fa ion-md-construct', //clase de la etiqueta i del item del menu
                    'url' : '#', //clase de la etiqueta url del item del menu
                    'sub' : [ //Lo que vaya aqui dentro corresponderia a un submenu, proximamente, sub sub menu
                              //n: El nombre del item del menu
                              //u: La url asociada
                              //Podemos cambiarle el icono, enviando el parametro i al item del menu
                                //Si queremos dejarle solo con el circulo, no hace falta enviarle este parametro
                              {'n':'Calculadora', 'u':'{{url('calculadora')}}', 'i':'nav-icon fa fa-table'}
                            ]
                  },
                  'rrhh': {
                    'name': 'Recursos Humanos',
                      'liclass' : 'nav-item has-treeview',
                      'iclass' : 'nav-icon fa fa-book',
                      'url' : '#',
                      'sub' : [
                          {'n':'Areas', 'u':'{{url('areas')}}'},
                          //EJEMPLO PARA SUB CATEGORIZAR UN MENU DENTRO DE OTRO
                          {'n':'Salarios Basicos', 'u':'{{url('basicSalaries')}}',
                            'sub': [
                              {'n':'branches', 'u':'{{url('branches')}}'},
                              {'n':'Compañias de Celulares', 'u':'{{url('cellPhoneCompanies')}}'}
                            ]},
                          {'n':'branches', 'u':'{{url('branches')}}'}
                      ]
                  },
                  'seguridad' : {
                    'name' : 'Seguridad',
                    'liclass' : 'nav-item has-treeview {{ GenericHelper::openMenu(["roles*","permissions*","products*","users*"]) }}',
                    'iclass' : 'nav-icon fa fa-lock',
                    //Podemos cambiarle la clase al menu del nivel 1
                    'aclass': 'nav-link {{ GenericHelper::activeMenu(["roles*","permissions*","products*","users*"]) }}',
                    'url' : '#',
                    'sub' : [
                        @can('roles.index')
                          //Tambien podemos cambiarle la clase con aclass al menu del subnivel
                          {'n':"Roles", 'u':"{{ route('roles.index') }}", 'aclass':'nav-link {{ GenericHelper::activeMenu(["roles*"]) }}' },
                        @endcan
    
                      ]
                  },
                };
         */
        let scontent = '';
        jQuery.each(jsonMenu,function(p,val){
            scontent += '<li class="'+val.liclass+'">' +
                '<a href="'+val.url+'"';
            if ( val.aclass != null )
                scontent += 'class="'+val.aclass+'">';
            else
                scontent += 'class="nav-link">';
            scontent += '<i class="'+val.iclass+'"></i>'+
                '<p>'+val.name+ ( val.sub != null ? '<i class="fa fa-angle-left right"></i>' : '' ) +
                '</p></a>';
            if ( val.sub == null )
                scontent += '</li>';
            else
                scontent+=utMakeMenu_sub(val.sub, 1);
            scontent += '</li>';
        });
        document.getElementById(idul).innerHTML = scontent;
    }
    
    static utMakeMenu_sub(menu, space=1){
        let scontent = '<ul class="nav nav-treeview">';
        jQuery.each(menu,function(q, item){
            scontent += '<li class="'+(item.liclass == null ? 'nav-item' : item.liclass)+'">'+
                '<a href="' + item.u + '"';
            if ( item.aclass != null )
                scontent += 'class="'+item.aclass+'">';
            else
                scontent += 'class="nav-link">';
            for (let s=0; s<space; s++)
            {scontent += '&nbsp&nbsp';}
    
            if ( item.i != null )
                scontent += '<i class="' + item.i + '"></i>';
            else
                scontent += '<i class="fa fa-circle-o nav-icon"></i>';
            scontent += '<p>' + item.n + ( item.sub != null ? '<i class="fa fa-angle-left right"></i>' : '' ) +'</p></a>';
            if ( item.sub != null ){
                scontent += utMakeMenu_sub(item.sub, ++space);
                space--;
            }
            scontent += '</li>';
        });
        scontent += '</ul>';
        return scontent;
    }
    
    static utMakeTextBox(content, type='success'){
        return '<div class="alert alert-'+type+' alert-dismissible">'+
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+
            content+'</div>';
    }
    
    static utMakeButton(id,content,type='btn btn-primary text-center', att=null){
        //att:[json] serian atributos extras del boton,
        //ver la funcion formCreator_addAttComplex para mas info acerca de como enviar los datos
        if ( type == null )
            type = 'btn btn-primary text-center';
        return '<div class="text-center"><button id="'+id+'" type="button" class="'+type+'" data-dismiss="alert" aria-hidden="true"' +
            (att!=null ? Tform.formCreator_addAttComplex(att) : '')+'>'+content+'</button></div>';
    }
    
    //Elementos
    static utMakeCollapsable(title, content, type='primary', displayNone=true){
        // Crea un elemento tipo collapsable de bootstrap y adminlte3
        // Si displayNone=true entonces el body del elemento se inicia mostrandose
        // si no, entonces inicia colapsado, osea no se muestra a menos que se le haga click
        return '<div class="card card-'+(type==null ? 'default' : type)+' collapsed-card">' +
            '<div class="card-header" data-widget="collapse"><h3 class="card-title">'+
            title +
            '&nbsp&nbsp&nbsp&nbsp</h3>'+
            '<div class="card-tools">'+
            '<button type="button" class="btn btn-tool" data-widget="collapse">'+
            '<i class="fa fa-plus"></i></button> </div> </div> <div class="card-body" style="display: '+
            (displayNone ? 'none' : 'block')+';">'+
            content + '</div></div>';
    }
    
    /**
     * @function utMakeCard
     * @param {string} title
     *  Seria el titulo de la tarjeta
     * @param {string} content
     *  El contenido de la tarjeta
     * @param {string} footer      
     *  El footer de la tarjeta
     * @param {string} idcontent   
     *  El id de la tarjeta
     * @returns {string}
     * @description Crea una ventana tipo card de AdminLTE
     */
    static utMakeCard(title, content, footer, idcontent=null){
        return '<div class="card">'+
            '<div class="card-header"><h3 class="card-title">'+title+'</h3><div class="card-tools">'+
                    '<button type="button" class="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">'+
                    '<i class="fa fa-minus"></i></button></div></div>'+
            '<div class="card-body"'+(idcontent!=null ? 'id="'+idcontent+'"' : '')+'>'+content+'</div>'+
            '<div class="card-footer">'+footer+'</div></div>';
    }
}

class Ttable{
    //De Tools: Tlinear, Tutil,
    //requiere highcharts,
    constructor(){}

    /* Este es un codigo tipo libreria
    * Aqui encontraremos funciones utiles para
    * DataTables, Matrices, Tablas, etc
    */

    //Tablas
    static makeHeadFooterTable(id, CLASS, style, arrayColNames, tbody = "", headAndFooter = true) {
        // Esta funcion genera la cabecera y pie de tabla, opcional el body para
        // convertirlo en una tabla completa

        // si headAndFooter es falso, la tabla solo tendra cabecera, que corresponderia
        // a los titulos
        if ( CLASS==null ) CLASS='table table-striped table-bordered';
        let result = '<table id="' + id + '" class="' + CLASS + '"' + ( style != null ? ' style="' + style + '"' : '' )  + '>';
        if ( arrayColNames != null )
            result += '<thead>' +
                '<tr>' + this.makeBetweenLabels('th', arrayColNames) + '</tr>' +
                '</thead>';
        result += tbody;
        if (headAndFooter && arrayColNames != null)
            result += '<tfoot><tr>' + this.makeBetweenLabels('th', arrayColNames) + '</tr></tfoot></table>';
        else {
            result += '</table>';
        }
        return result;
    }

    static makeBodyTable(dataMatrix, isMatrix = true) {
        // isMatrix, la misma description que isDataMatrix de makeTable(...)
        let result = "<tbody>";
        if (!isMatrix) result += '<tr>';
        for (let i = 0; i < dataMatrix.length; i++) {
            if (isMatrix)
                result += '<tr>' + this.makeBetweenLabels('td', dataMatrix[i], isMatrix) + '</tr>';
            else
                result += '<td>' + dataMatrix[i] + '</td>';
        }
        if (!isMatrix) result += '</tr>';
        result += "</tbody>";
        //console.log(result);
        return result;
    }

    static makeBodyTable2(dataMatrix, isMatrix = true, eCol=null, hideCols=null) {
        /* isMatrix, la misma description que isDataMatrix de makeTable(...)
         * eCol: sera un array de objetos, en el que se incluiran o no los parametros
         *      de las columnas a ser editadas
         *      se compondra de la sgte manera:
         *      [{ ncol: ... , element: null|{}, onclick: null|{} }, {obj2},...]
         * ncol podra ser un numero que represente el numero de una columna de la matriz, o podra
         *   ser un array que represente los numeros de columnas que tendran la misma configuracion
         * elements: { et, param } == et sera el nombre de la etiqueta y param los parametros que contendra,
         *   si element es null, y onclick no lo es, la columna tendra la forma: <td onclick="...">..</td>
         *   si element no es null, pero et si lo es, entonces los parametros seran asignados a la etiqueta
         *   td. ej.: <td class=".." style=".." onclick="..">dato</td>
         * onclick: { fname, par:{pos:null|[], ext:null|[]} } == fname sera el nombre de la funcion y par sera un objeto
         *   que contendra 2 variables, pos: null|[] y ext:null|[]
         *   si pos:null y ext:null entonces el unico parametro que contendra la funcion sera, el valor  i,j de la
         *   columna ncol procesada; si pos:null y ext no lo es, entonces la funcion recibira parametros
         *   externos a los de la matriz en las ncol procesadas
         *   si pos:[p1,p2] y ext:[a1, a2, null, a3, null,etc] entonces la funcion recibira
         *   los parametros ai de ext y reemplazara los null con valores en las posiciones p1 y p2 de la matriz
         *   respectivamente.
         * Ejemplo:
         * let ecol = [{
                    ncol: [0],
                    element: {
                        et: 'div',
                        param: {
                            class: 'btn-success'
                        }
                    },
                    onclick: {
                        fname: 'trn_startTrn',
                        par: {
                            pos: [0],
                            ext: null
                        }
                    }
                },
                {
                    ncol: [2],
                    element: {
                        et: 'button',
                        param: {
                            class: 'btn btn-success'
                        }
                    },
                    onclick: {
                        fname: 'trn_startTrn',
                        par: {
                            pos: [2],
                            ext: null
                        }
                    }
                },
            ];
            let ecol = [{
                    ncol: [0,1],
                    element: {
                        et: 'button',
                        param: {
                            class: 'btn btn-success',
                            style: 'width=100%;',
                            value: 'valorx'
                        }
                    },
                    onclick: {
                        fname: 'trn_startTrn',
                        par: {
                            pos: [0],
                            ext: null
                        }
                    }
                }
            ];
            let ecol = [{
                    ncol: [0],
                    element: {
                        et: 'div',
                        param: {
                            class: 'btn-success'
                        }
                    },
                    onclick: {
                        fname: 'trn_startTrn',
                        par: {
                            pos: [0,1],
                            ext: [8.7, 45, null,null,12]
                        }
                    }
                }
            ];
        */
        let result = "<tbody>";
        if (!isMatrix) result += '<tr>';
        let entraAlFor = true;
        if ( isMatrix && eCol != null ){
            entraAlFor = false;
            return "<tbody>" + makeEditColTable(dataMatrix, eCol, hideCols) + "</tbody>";
        }
        if ( entraAlFor )
            for (let i = 0; i < dataMatrix.length; i++) {
                if (isMatrix){
                    //result += '<tr>' + makeBetweenLabels('td', dataMatrix[i], isMatrix) + '</tr>';
                    result += '<tr>';
                    result += this.makeBetweenLabels('td', dataMatrix[i], isMatrix, hideCols);

                    result += '</tr>';
                }
                else
                    result += '<td>' + dataMatrix[i] + '</td>';
            }
        if (!isMatrix) result += '</tr>';
        result += "</tbody>";
        //console.log(result);
        return result;
    }

    static makeEditColTable(mat, ecol, hideCols=null ){
        if ( ecol == null ) return null;
        let eColumns = [];
        for ( let k=0, z=0; k<ecol.length; k++ ){
            if ( Array.isArray(ecol[k].ncol) ){
                for ( let n=0; n<ecol[k].ncol.length; n++ ){
                    eColumns[z] = ecol[k].ncol[n];
                    z++;
                }
            } else {
                eColumns[z] = ecol[k].ncol;
                z++;
            }
        }
        let res = '';
        for ( let i=0; i<mat.length; i++ ){
            res += '<tr>';
            for ( let j=0; j<mat[i].length; j++ ){
                let valhc = true;
                if ( hideCols != null ) {
                    if (Tlinear.isDataInArray(hideCols, j)){
                        valhc = false;
                    }
                }
                if (valhc == true){
                    res += '<td'; // Iniciamos la etiqueta de cada columna
                    let ecolJ = false; // Esta variable indica si la columna sera editada
                    if ( Tlinear.isDataInArray(eColumns, j) ){
                        for ( let k=0; k<ecol.length; k++ ){ // for de cantidad de ecols
                            if ( ecolJ ) break;
                            if ( Array.isArray(ecol[k].ncol) ){ //Si ncol es array
                                if ( Tlinear.isDataInArray(ecol[k].ncol, j) )
                                    ecolJ = true;
                            } else { // Si ncol no es array
                                if ( ecol[k].ncol == j )
                                    ecolJ = true;
                            }
                            if ( ecolJ ){ //Solo si j esta dentro de las columnas editables, sera editada
                                if ( ecol[k].element == null ){ //Si element es null
                                    if ( ecol[k].onclick == null ){ //Si onclick es null y element es null
                                        res += '>' + mat[i][j] + '</td>';
                                    } else { // Si onclick no es null y element es null
                                        res += ' onclick="' + ecol[k].onclick.fname + '(';
                                        let parametros = this.makeEditColTable_onclick(j,mat[i], ecol[k].onclick.par.pos, ecol[k].onclick.par.ext);
                                        res += Tutil.utSepararEntre(parametros, ',', '\'') + ')"';
                                        res += '>' + mat[i][j] + '</td>';
                                    }
                                } else { // Si element no es null
                                    if (ecol[k].element.et !=null)
                                        res += '><' + ecol[k].element.et;
                                    jQuery.each(ecol[k].element.param, function(p, val) {
                                        res += ' ' + p + '="' + val + '"';
                                    });
                                    if ( ecol[k].onclick == null ) // Si element no es null y onclick es null
                                        res += '>' + mat[i][j] + '</' + ecol[k].element.et +'></td>';
                                    else{ // Si element no es null y on click no es null
                                        res += ' onclick="' + ecol[k].onclick.fname + '(';
                                        let parametros = this.makeEditColTable_onclick(j,mat[i], ecol[k].onclick.par.pos, ecol[k].onclick.par.ext);
                                        res += Tutil.utSepararEntre(parametros, ',', '\'') + ')"';
                                        res += '>' + mat[i][j];
                                        if (ecol[k].element.et !=null)
                                            res += '</' + ecol[k].element.et +'>';
                                        res += '</td>';
                                    }
                                }
                            } else { // Si j no esta dentro de las columnas editables, simplemente se le asignara su valor correspondiente
                                if( k>=j )
                                    res += '>' + mat[i][j] + '</td>';
                            }
                        }
                    } else {
                        res += '>' + mat[i][j] + '</td>';
                    }
                }
            }
            res += '</tr>';
        }
        return res;
    }

    static makeEditColTable_onclick(j, row, pos, ext){
        /*
        * Esta funcion tiene su uso exclusivo para la funcion makeEditColTable,
        * No sera tan necesario aparte de la funcion mencionada.
        * Pero de todos modos lo que hace es:
        * Retorna un array en el que se encuentran los parametros que llevara el onclick
        * por ejemplo si pos=null y ext =null entonces res[0] = row[j]
        * y asi sucesivamente, verificar el algoritmo para mejor comprension
        */
        let res = [];
        if ( ext == null ){
            if ( pos == null )
                res[0] = row[j];
            else
                for ( let i=0; i<pos.length; i++ ){
                    res[i] = row[pos[i]];
                }
        }
        else { //Si ext no es null
            for ( let i=0, k=0; i<ext.length; i++ ){
                if ( ext[i] == null ){
                    if ( pos == null )
                        res[i] = row[j];
                    else {
                        if ( row[k] != null ){
                            res[i] = row[pos[k]];
                            k++;
                        }
                        else res[i] = null;
                    }
                }
                else
                    res[i] = ext[i];
            }
        }
        return res;
    }

    /**
     * Genera una tabla a partir de los atributos enviados, solo arrayColNames y dataMatrix son los campos obligatorios
     * @function makeTable
     * @param {string} id id de la tabla
     * @param {string} CLASS clase de la tabla
     * @param {string} style estilo extra de la tabla
     * @param {string[]} arrayColNames Array de titulos de la tabla
     * @param {array[]} dataMatrix Matriz de contenidos de la tabla
     * @param {boolean} isDataMatrix Es una matriz el contenido de la tabla (true)? o es un array? (false)
     * @param {boolean} headAndFooter Tendra Head y Footer la tabla(true)? si no enviar 'false'
     * @param {JSON} editColumns Sera un array de objetos, en el que se incluiran o no los parametros de las columnas a ser editadas
     * para mas info entrar en makeBodyTable2
     * @param {number[]} hideCols Sera un array de numeros de las columnas que estaran ocultas en la tabla
     * @returns {string}
     */
    static makeTable(id='', CLASS, style, arrayColNames, dataMatrix, isDataMatrix = true, headAndFooter = true, editColumns=null, hideCols=null) {
        //Crea una tabla simple con head body y footer
        // isDataMatrix significa que si los datos, osea el contenido es una matriz
        // se procesa de una forma diferente a que si fuera solo un array
        //dataMatrix: es el array o la matriz de datos
        // headAndFooter, indicara si tendra cabecera y footer, si es falso, solo contendra cabecera
        //editColumns: para mas info entrar en makeBodyTable2
        //hideColumns: es un array cuyos valores con los numeros de las columnas a ocultar
        if ( CLASS == 'DEFAULT' )
            CLASS = 'table table-striped table-bordered';
        if ( style == 'DEFAULT' )
            style = 'display: block;overflow-x: auto;white-space: nowrap;width=100%;';
        return this.makeHeadFooterTable(id, CLASS, style, arrayColNames, this.makeBodyTable2(dataMatrix, isDataMatrix, editColumns, hideCols), headAndFooter);
    }
    //HTML
    static makeBetweenLabels(label, arrayData, isArray = true, hideCols=null) {
        //Es una funcion que genera contenido dentro de etiquetas
        //label = nombre de etiqueta a utilizar
        //arrayData = arrays de datos a ser contenidos entre las etiquetas
        //Ejemplo = makeBetweenLabels('td',['uno','dos','tres'], true)
        //  Resultado = <td>uno</td><td>dos</td><td>tres</td>
        // Si isArray es false, solo agrega el dato entre los labels una vez
        let result = "";
        if (isArray) {
            for (let i = 0; i < arrayData.length; i++) {
                if(hideCols!=null){
                    if ( !Tlinear.isDataInArray(hideCols, i) ){
                        result += '<' + label + '>' + arrayData[i] + '</' + label + '>';
                    }
                }
                else
                    result += '<' + label + '>' + arrayData[i] + '</' + label + '>';
            }
        } else result += '<' + label + '>' + arrayData + '</' + label + '>';
        return result;
    }

    //DataTables
    static makeDataTableDefault(id, arrayTitles, content, properties = null, editableColumn = null) {
        /*
        * Crea un DataTable por defecto, con relacion claro a los parametros enviados
        * id: id del table que contendra el datatable
        * content: matriz de datos
        * properties: array que contendra el nombre de cada propiedad que tendra el dt, verificar que exista
        *              en el array allProperties
        * editableColumn es un array indica que columna sera editada
        * Ejemplo de los parametros de editableColumn
        * let editableColumn = {columnNumber: 1, columnName: 'itemStatus', functionName: 'itemStatusJSPanel', values: ['uno','dos'] };
        *
        */
        let editColumnNum = null;
        if ( editableColumn != null ){
            editColumnNum = editableColumn.columnNumber;
        }

        //Seccion de titulos
        let titles = [{}];
        for (let i = 0; i < arrayTitles.length; i++) {
            titles[i] = { title: arrayTitles[i] };
        }

        // Propiedades
        let allProperties = ['destroy', 'searching', 'paging', 'ordering', 'info', 'AutoWidth','select','scrollX'];
        if (properties != null)
            properties = Tlinear.convertArrayInAssoArrayTrueFalse(properties, allProperties);
        else
            properties = Tlinear.convertArrayInAssoArrayTrueFalse(allProperties, allProperties);

        //Principal
        var dt = $('#' + id).DataTable({
            data: content,
            destroy: properties['destroy'],
            searching: properties['searching'],
            paging: properties['paging'],
            ordering: properties['ordering'],
            info: properties['info'],
            AutoWidth: properties['AutoWidth'],
            columns: titles,
            select: properties['select'],
            scrollX: properties['scrollX'],
            language: {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            aoColumnDefs: [{
                "aTargets": [editColumnNum],
                "mRender": function(data, type, full) {
                    if (data && editableColumn != null) {
                        return this.getEditableColumnContentForDT(editableColumn.columnName, data, editableColumn.functionName, editableColumn.values);
                    } else {
                        return data;
                    }
                }
            }],

        });
        return dt;
    }

    static getEditableColumnContentForDT(columnName, data, functionName, values=null) {
        //Esta funcion se relaciona mas con la funcion getEditableColumnContentForDT
        // Aqui creamos el contenido de una columna en un datatable
        // simplemente tenemos que enviar el nombre de la columna para referenciarlo dentro del switch
        // y luego el dato que puede ser desde un simple valor, hasta un array o una funcion.
        let result = '';
        switch (columnName) {
            case 'button': //EN ESTE CASO, SERA UN BOTON PRIMARY CON LLAMADA A UNA FUNCION
                result = '<div><button class="btn btn-primary" onclick="' +functionName +'(\'' + data + '\')" ' +
                    'value="' + data + '">' + data + '</button></div>';
                break;
            case 'divLikeButton': //EN ESTE CASO, SERA UN DIV PRIMARY TIPO BOTON CON LLAMADA A UNA FUNCION
                result = '<div class="btn-primary" id="'+data+'" style="border-radius:4px;" onclick="' +functionName +'(\'' + data + '\')" ' + '>' + data + '</div>';
                break;
            case 'divLikeButtonWithValues':
                let arrayData = [];
                arrayData[0] = data;
                for ( let i=1; i<=values.length; i++ ){
                    arrayData[i] = values[i-1];
                }
                let dataF = Tutil.utSepararEntre(arrayData, ',', '\'');
                result = '<div class="btn-primary" id="'+data+'" style="border-radius:4px;" onclick="' +functionName +'(' + dataF + ')" ' + '>' + data + '</div>';
                break;
            default:
                result = null;
                break;
        }
        return result;
    }

    static utGetDataMatFromDT(id){
        // Retorna los datos de una tabla en forma de matriz con solo enviar su id
        let oTable = document.getElementById(id);
        let mat=new Array();
        for (let i = 0; i < oTable.rows.length; i++){
            mat[i] = new Array();
            let oCells = oTable.rows.item(i).cells;
            for(let j = 0; j < oCells.length; j++){
                mat[i][j] = oCells.item(j).innerHTML;
            }
        }
        return mat;
    }

    static utMakeGraphFromDT(idDT, idDivGraph, arrayColumns, arrayRemoveRows, categorias, xAxis=null, titulo=null, subtitulo=null, opciones=null, tipoChart=null){
        /*Esta funcion toma el id de un datatable y crea el grafico a partir de los parametros enviados
         * idDT = id del datatable
         * idDivGraph = id de la etiqueta o elemento html dentro del cual se va encontrar el grafico
         * arrayColumns = es un array en el que iran los numeros de las columnas de datos que se utilizaran
         * arrayRemoveRows = es un array en el que iran los numeros de las filas que se eliminaran
         * categorias = es un array o numero que representan las categorias de cada grafico
         *              si es un array, las categorias se escriben a mano, ejemplo: ['stock','ventas', 'etc']
         *              si estan dentro del datatable, se selecciona la fila en la que se encuentra, ej.: 0
         * xAxis = al igual que categorias, es un array o numero que representan nombres de los puntos del eje x
         *          si es un array se escriben a mano, si es un numero, este representa la columna de los mismos
         * titulo= el titulo que se le otorga al grafico
         * subtitulo = el subtitulo
         * opciones= las opciones de los graficos, para mas info revisar en la funcion utMakeGraphSmart
         * tipoChart= el tipo del grafico a utilizar, si se lo deja en null, lo envia uno tipo column
         */
        //https://www.highcharts.com/samples/
        let mat = this.utGetDataMatFromDT(idDT);
        const cantColInic = mat[0].length;
        let catFinal = new Array();
        if ( !Array.isArray(categorias) ){
            categorias = Tlinear.matExtractRow(mat, categorias);
            for ( let i=0, k=0; i<cantColInic; i++ ){
                for ( let j=0; j<arrayColumns.length; j++ ){
                    if ( i==arrayColumns[j] ){
                        catFinal[k] = categorias[i];
                        k++;
                    }
                }
            }
            categorias = catFinal;
        }
    
        if ( arrayRemoveRows != null  ){
            mat = Tlinear.matRemoveRow(mat,arrayRemoveRows);
        }
        if ( !Array.isArray(xAxis) ){
            xAxis = Tlinear.matExtractColumn(mat,xAxis);
        }
        mat = Tlinear.matExtractColumnGroup(mat, arrayColumns);
    
        Tutil.utMakeGraphSmart(idDivGraph, titulo, subtitulo, xAxis, Tlinear.matTransp(Tlinear.matConvertToFloat(mat)), categorias, tipoChart, opciones );
    }
}

class Tools{
    constructor(){
        this.linear = new Tlinear();
        this.json = new Tjson();
        this.object = new Tobject();
        this.form = new Tform();
        this.table = new Ttable();
    }

    p(){
        console.log('en Tools');
    }
}
var tool = new Tools();

