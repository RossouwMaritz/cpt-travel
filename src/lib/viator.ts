const VIATOR_PID = 'P00299735'
const VIATOR_MCID = '42383'
const VIATOR_BASE = 'https://www.viator.com/searchResults/all'

export function viatorUrl(query: string, campaign?: string): string {
  const params = new URLSearchParams({
    text: query,
    pid: VIATOR_PID,
    mcid: VIATOR_MCID,
    medium: 'link',
  })
  if (campaign) params.set('campaign', campaign)
  return `${VIATOR_BASE}?${params.toString()}`
}
