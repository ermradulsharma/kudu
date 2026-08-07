import { execFileSync } from 'child_process'
import type { PlatformElevation } from '../types'

export function createWin32Elevation(): PlatformElevation {
  return {
    isAdmin(): boolean {
      try {
        execFileSync('net', ['session'], { stdio: 'ignore', timeout: 3000, windowsHide: true })
        return true
      } catch {
        // Fallback: net session can fail if the Workstation service is disabled.
        // fltmc is another built-in command that requires admin privileges.
        try {
          execFileSync('fltmc', [], { stdio: 'ignore', timeout: 3000, windowsHide: true })
          return true
        } catch {
          return false
        }
      }
    },
  }
}
