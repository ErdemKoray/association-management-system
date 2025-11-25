using System.Collections.Generic;

namespace AMS.Application.Common.Models
{
    public class ServiceResult<T> : ServiceResult
    {
        public T? Data { get; set; }

        private ServiceResult(bool isSuccess, string message, T? data, List<string>? errors = null) 
            : base(isSuccess, message, errors)
        {
            Data = data;
        }

        public static ServiceResult<T> Success(T data, string message = "Operation successful.")
        {
            return new ServiceResult<T>(true, message, data);
        }

        public new static ServiceResult<T> Failure(string error)
        {
            return new ServiceResult<T>(false, "Operation failed.", default, new List<string> { error });
        }

        public new static ServiceResult<T> Failure(List<string> errors)
        {
            return new ServiceResult<T>(false, "Operation failed.", default, errors);
        }
    }
}