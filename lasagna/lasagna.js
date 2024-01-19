/* 1. Defina el tiempo esperado del horno en minutos.
Define la EXPECTED_MINUTES_IN_OVEN constante que representa 
cuántos minutos debe estar la lasaña en el horno. 
Hay que exportarlo. Según el libro de cocina, el 
tiempo esperado en el horno en minutos es 40. */

/* 2. Calcula el tiempo restante del horno en minutos.
Implemente la remainingMinutesInOvenfunción que toma 
como parámetro los minutos reales que la lasaña ha 
estado en el horno y devuelve cuántos minutos aún le 
quedan a la lasaña en el horno, según el tiempo de 
horno esperado en minutos de la tarea anterior.
 */

/*
 * La cantidad de minutos que se necesita para preparar una sola capa.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determina el número de minutos que la lasaña aún debe permanecer en el
 * horno para estar correctamente preparada.
 * @param {number} actualMinutesInOven->minutos en el horno.
 * @returns {number} el número de minutos restantes
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  const minutesremaining = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return minutesremaining;
}
remainingMinutesInOven(30);
// => 10

/**
 * Dada una serie de capas, determina el tiempo de preparación total.
 * @param {number} numberOfLayers
 * @returns {number} el tiempo de preparación total
 */
export function preparationTimeInMinutes(numberOfLayers) {
  const totalTime = PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
  return totalTime;
}
preparationTimeInMinutes(2);
// => 4

/**
 * Calcula el tiempo de trabajo total.Es decir, el momento de preparar todas las capas
 * de lasaña, y el tiempo que ya pasó en el horno.
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} el tiempo de trabajo total
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const totalWorkTime =
    numberOfLayers * PREPARATION_MINUTES_PER_LAYER + actualMinutesInOven;
  return totalWorkTime;
}
totalTimeInMinutes(3, 20);
// => 26
