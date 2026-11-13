declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara o evento padrão Contact do Meta Pixel uma única vez por clique,
 * sem interferir na navegação ou comportamento dos botões.
 */
export function trackMetaContact(): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}
