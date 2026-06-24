export function normalizeEmailInput(value: string): string {
  return value.trim().toLowerCase()
}

export function isValidEmail(email: string): boolean {
  const normalized = normalizeEmailInput(email)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalized)
}

export function emailValidationMessage(email: string): string | null {
  const normalized = normalizeEmailInput(email)

  if (!normalized) {
    return "Email address is required."
  }
  if (!normalized.includes("@")) {
    return "Email must include an @ symbol."
  }
  if (!isValidEmail(normalized)) {
    return "Enter a valid email address (e.g. name@example.com)."
  }
  return null
}
