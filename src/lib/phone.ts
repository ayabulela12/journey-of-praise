export const PHONE_LENGTH = 10

/** Keep digits only, capped at 10 characters (SA format: 0XXXXXXXXX). */
export function sanitizePhoneInput(value: string): string {
  return value.replace(/\D/g, "").slice(0, PHONE_LENGTH)
}

/** Valid SA phone: 10 digits starting with 0. */
export function isValidPhone(phone: string): boolean {
  return /^0\d{9}$/.test(phone)
}

export function phoneValidationMessage(phone: string): string | null {
  if (!phone) {
    return "Phone number is required."
  }
  if (phone.length < PHONE_LENGTH) {
    return `Enter a ${PHONE_LENGTH}-digit phone number.`
  }
  if (!phone.startsWith("0")) {
    return "Phone number must start with 0."
  }
  if (!isValidPhone(phone)) {
    return "Enter a valid phone number using digits only."
  }
  return null
}
