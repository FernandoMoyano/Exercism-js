# Hints

## 1. Compruebe si la acción de 'ataque rápido' es posible

- El operador lógico no (`!`) Se puede colocar antes de una expresión para negar su valor.
- Verificar[this MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT_!) en operadores lógicos

## 2.Compruebe si la acción 'espía' es posible

- Las expresiones lógicas se evalúan de izquierda a derecha y se prueban para posibles 'cortocircuitos'.
- Para una comprensión integral del mecánico de izquierda a derecha, eche un vistazo a [this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)!

## 3.Compruebe si la acción de 'prisionero de señal' es posible

- Operadores lógicos en el orden de su precedencia (de más alta a más baja): `!`, `&&`, `||`.
- Verificar [this MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Precedence_And_Associativity) en la precedencia del operador

## 4. Compruebe si es posible la acción de 'prisionero libre'

- `()` es el operador con la mayor precedencia.Úselo para agrupar expresiones lógicas.
