import { execFileSync } from 'child_process'
import type { PlatformElevation } from '../types'

export function createWin32Elevation(): PlatformElevation {
  let isElevated: boolean | undefined = undefined

  return {
    isAdmin(): boolean {
      if (isElevated !== undefined) {
        return isElevated
      }

      try {
        execFileSync('net', ['session'], { stdio: 'ignore', timeout: 3000, windowsHide: true })
        isElevated = true
      } catch {
        // Fallback: net session can fail if the Workstation service is disabled.
        // fltmc is another built-in command that requires admin privileges.
        try {
          execFileSync('fltmc', [], { stdio: 'ignore', timeout: 3000, windowsHide: true })
          isElevated = true
        } catch {
          isElevated = false
        }
      }

      return isElevated
    },
  }
}
