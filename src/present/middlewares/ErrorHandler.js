module.exports = (err, req, res, next) => {
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Something went wrong'
  const stack = process.env.NODE_ENV === 'development' ? err : {}
  
  res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack
  })
}