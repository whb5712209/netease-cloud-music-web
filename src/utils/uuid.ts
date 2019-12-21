let seed = 0
export function getUuid (): string {
  const now = Date.now()
  return `message_${now}_${seed++}`
}
