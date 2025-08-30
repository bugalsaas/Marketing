import { chromium, FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use

  // Setup authentication state
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  try {
    // Navigate to admin login
    await page.goto(`${baseURL}/admin/login`)
    
    // Login with test credentials
    await page.fill('input[name="email"]', 'admin@bugal.com.au')
    await page.fill('input[name="password"]', 'admin123')
    await page.click('button[type="submit"]')
    
    // Wait for successful login
    await page.waitForURL(`${baseURL}/admin/dashboard`)
    
    // Save authentication state
    await page.context().storageState({ path: storageState as string })
    
    console.log('✅ Authentication state saved for E2E tests')
  } catch (error) {
    console.error('❌ Failed to setup authentication state:', error)
    throw error
  } finally {
    await browser.close()
  }
}

export default globalSetup
