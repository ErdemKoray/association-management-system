using Microsoft.Extensions.DependencyInjection;
using System.Reflection;
using FluentValidation;

namespace AMS.Application 
{
    public static class DependencyInjection 
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            var assembly = Assembly.GetExecutingAssembly();

            services.AddAutoMapper(assembly);
            services.AddValidatorsFromAssembly(assembly);
            
            services.AddMediatR(cfg => {
                cfg.RegisterServicesFromAssembly(assembly);
            });

            return services;
        }
    }
}