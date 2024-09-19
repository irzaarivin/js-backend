const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString(undefined, options)
}

const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

module.exports = {
  validateEmail,
  formatDate,
  generateUniqueId
}