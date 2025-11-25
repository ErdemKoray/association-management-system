using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace AMS.Infrastructure // <--- Namespace burası, Program.cs burayı çağırıyor
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            // Şimdilik boş, ileride EmailService vs. eklenecek
            return services;
        }
    }
}