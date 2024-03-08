// @ts-check
//
// ☝🏽 La línea anterior habilita la verificación de tipo para este archivo.Varios ides interpretan
// La directiva @TS-Check.Le dará un servicio automático útil en la web
// y IDES admitido al implementar este ejercicio.No necesitas
// Comprender los tipos, JSDOC o TypeScript para completar este JavaScript
// ejercicio, y puede ignorar por completo este bloque de comentarios y directiva.
// 👋🏽 Hi again!
//
// Un recordatorio rápido sobre los trozos de ejercicio:
//
// 💡 Se le permite despejar completamente cualquier trozo antes de comenzar.A menudo
// Recomendamos usar el stub, porque ya están configurados correctamente para
// Trabaja con las pruebas, que puedes encontrar en ./annalyns-infiltration.spec.js.
//
// 💡 No necesitas escribir un comentario JSDOC bloquea tú mismo;No se espera
// En JavaScript idiomático, pero algunas empresas y guías de estilo los hacen cumplir.
//
// ¡Ahora ayude a Annalyn a liberar a su mejor amiga!

/**
 * El ataque rápido está disponible cuando el caballero está durmiendo
 * @param {boolean} knightIsAwake //el caballero esta despierto
 * @return {boolean} //Si puede o no ejecutar un ataque rápido.
 */
export function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
    return true;
  }
  return false;
}

/**
 *Un espía útil captura información, que no pueden hacer si todos están dormidos.
 *
 * @param {boolean} knightIsAwake //estado del caballero=> despierto/dormido
 * @param {boolean} archerIsAwake //estado del arquero=> despierto/dormido
 * @param {boolean} prisonerIsAwake //estado del priosenero=> despierto/dormido
 *
 * @returns {boolean} Si puedes o no espiar a alguien.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}

/**
 * El arquero lo atrapará si señala mientras están despiertos.
 *
 * @param {boolean} archerIsAwake //Estado del arquero=> despierto/dormido
 * @param {boolean} prisonerIsAwake //Estado del prisionero=> despierto/dormido
 *
 * @returns {boolean} Si puede o no enviar una señal al prisionero.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  }
  return false;
}

/**
 * La etapa final en el plan: liberar el mejor amigo de Annalyn.
 *
 * @param {boolean} knightIsAwake //Estado del arquero=> despierto/dormido
 * @param {boolean} archerIsAwake //Estado del arquero=> despierto/dormido
 * @param {boolean} prisonerIsAwake //Estado del prisionero=> despierto/dormido
 * @param {boolean} petDogIsPresent //Estado de la mascota=> presente/ausente
 *
 * @returns {boolean} Si puedes o no liberar a la amiga de Annalyn.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (
    (petDogIsPresent && !archerIsAwake) ||
    (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake)
  ) {
    return true;
  } else {
    return false;
  }
}
