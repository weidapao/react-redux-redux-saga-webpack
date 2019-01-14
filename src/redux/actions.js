/*
 * action 类型
 */

export const UPDATE_VAL = 'UPDATE_VAL'
export const SHOWINFO = 'SHOWINFO'

/*
 * action 创建函数
 */

export function updateVal(text) {
  return { type: UPDATE_VAL, text }
}

export function showInfo() {
  return { type: SHOWINFO }
}
