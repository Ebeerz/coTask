function debounce(func, timeoutMs) {
    return function perform(...args) {
      let previousCall = this.lastCall
      this.lastCall = Date.now()
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer)
      }
      this.lastCallTimer = setTimeout(() => func(...args), timeoutMs)
    }
}

export const STATUSES = {
  'backlog' : 'Новые задачи',
  'to-do': 'Взять в работу',
  'in process' : 'В процессе',
  'finished' : 'Готовые задачи'
}
export default debounce;