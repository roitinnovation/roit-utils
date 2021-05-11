import * as crypto from 'crypto'
import { NormalizeTypes } from './Types'

/**
 * Generates a md5 hash from a value
 * 
 * @param value Value to hash in md5
 * @returns 
 */
export function md5(value: string): string {
  return crypto.createHash('md5').update(value).digest('hex')
}

/**
 * Normalize string using NFD format, removing accents and set toUpperCase()
 * 
 * @param value Value to be normalized
 * @param type  "NFC" | "NFD" | "NFKC" | "NFKD"
 * @returns a normalized string (removing accented letters)
 */
export function normalizeString(value: string, type: NormalizeTypes = 'NFD'): string {
  return value.normalize(type).replace(/[\u0300-\u036f]/g, "").toUpperCase()
}

