export function cambiarTamanoFuente(incremento: number, selector: string) {
    // Obtener los elementos objetivo
    const elements = document.querySelectorAll<HTMLElement>(selector);

    // Iterar sobre cada elemento y cambiar el tamaño de fuente
    elements.forEach(element => {
        if (element instanceof HTMLElement) { // Verificar si el elemento es un HTMLElement
            const fontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
            const currentSize = parseFloat(fontSize); // Convertir a número

            // Cambiar el tamaño de la fuente con base en el incremento (1 o -1)
            const newSize = currentSize + incremento;

            // Verificar que newSize es un número positivo
            if (newSize > 0) {
                // Establecer el nuevo tamaño de fuente
                element.style.fontSize = newSize + 'px';
            }
        }
    });
}
