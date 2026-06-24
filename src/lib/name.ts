export function nameValidationMessage(name: string): string | null {
  const trimmed = name.trim()

  if (!trimmed) {
    return "Full name is required."
  }
  if (trimmed.length < 2) {
    return "Enter your full name."
  }
  if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
    return "Name should only contain letters, spaces, hyphens, or apostrophes."
  }
  return null
}
