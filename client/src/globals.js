// export const BASE_URL = 'mongodb://127.0.0.1:27017/dreadDB'
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'
