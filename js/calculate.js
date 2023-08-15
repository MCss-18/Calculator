class Calculadora{

    sumar(num1, num2){
        return num1 + num2;

    }

    restar(num1, num2){
        return num1 - num2;
    }

    multiplicar(num1, num2){
        return num1 * num2;
    }

    multiplicar(num1, num2){
        try{
            return num1 / num2;
        }catch(error){
            return error;
        }
        
    }

}