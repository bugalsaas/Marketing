import { FullConfig } from '@playwright/test'

async function globalTeardown(config: FullConfig) {
  // Clean up any test data or resources
  console.log('🧹 Cleaning up E2E test environment...')
  
  // Add any cleanup logic here
  // For example, removing test data from database
  // or cleaning up uploaded files
  
  console.log('✅ E2E test cleanup completed')
}

export default globalTeardown
