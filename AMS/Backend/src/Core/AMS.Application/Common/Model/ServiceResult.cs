using System.Collections.Generic;

namespace AMS.Application.Common.Models
{
    public class ServiceResult
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public List<string> Errors { get; set; }

        protected ServiceResult(bool isSuccess, string message, List<string>? errors = null)
        {
            IsSuccess = isSuccess;
            Message = message;
            Errors = errors ?? new List<string>();
        }

        public static ServiceResult Success(string message = "Operation successful.")
        {
            return new ServiceResult(true, message);
        }

        public static ServiceResult Failure(string error)
        {
            return new ServiceResult(false, "Operation failed.", new List<string> { error });
        }

        public static ServiceResult Failure(List<string> errors)
        {
            return new ServiceResult(false, "Operation failed.", errors);
        }
    }
}