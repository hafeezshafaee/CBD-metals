const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meajkddd';

export async function submitQuote(form: HTMLFormElement): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' },
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = Array.isArray(result?.errors)
      ? result.errors.map((error: { message?: string }) => error.message).filter(Boolean).join(' ')
      : 'We could not send your request. Please try again or call us directly.';
    throw new Error(message || 'We could not send your request. Please try again.');
  }
}
