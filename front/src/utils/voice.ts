let isInitialized = false; // Variable para evitar múltiples inicializaciones

export function initializeVoice() {
    if (isInitialized) return; // Si ya está inicializado, no vuelve a hacerlo

    let voices: SpeechSynthesisVoice[] = [];
    const utterance = new SpeechSynthesisUtterance();

    function textToSpeak(container: HTMLElement) {
        utterance.text = container.textContent || '';
        window.speechSynthesis.speak(utterance);
    }

    // Wait until the DOM content is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
        window.speechSynthesis.addEventListener("voiceschanged", () => {
            voices = window.speechSynthesis.getVoices();
            // console.log(voices);

            voices.forEach((el) => {
                const option = document.createElement("option");
                option.value = el.name;
                option.textContent = `${el.name} - ${el.lang}`;
                // You can append the option to a select element if needed
            });
        });
    });

    // Add event listener to buttons only once
    document.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).closest(".btn-voice")) {
            const container = (e.target as HTMLElement).closest(".experience-slide-text") as HTMLElement;
            textToSpeak(container);
        }
    });

    isInitialized = true; // Marcar como inicializado
}
