/*A custom error handler class 
    1. Extends the JS error class,
    2. Takes 2 params, an error message and a statuscode,
    3. Invokes the AppError Constructor that first,
        i. invokes the Error Constructor with the parameter message as the param
        ii. this causes the error to occur
    4. Sets the parameters message and statuscode ,which are later to be used by the error handling middleware
**Also the defaults are set so that we can just use throw new AppError();

*/

export class AppError extends Error {
  constructor(errorMessage = "An error has occured!", statusCode = 400) {
    super(errorMessage);
    this.statusCode = statusCode;
  }
}
