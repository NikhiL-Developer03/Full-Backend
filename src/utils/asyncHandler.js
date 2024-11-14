const asyncHandler = (requestHandler) => {
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
}

export {asyncHandler}




/*
//usnig try catch 

//Explain step by step

// const asyncHandler = () => {}
// const asyncHandler = () => {()=>{}}
// const asyncHandler = () => () => {}
// const asyncHandler = () => async() => {}

const asyncHandler = (fn) => async(req,res,next) => {
  try{
    await fn(req,res,next)
  }
  catch(error){
    res.status(error.code || 500).json({
      success:false,
      message:error.message
    })
  }
}

export {asyncHandler}

 */