using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SecureMVC5_DLT.Startup))]
namespace SecureMVC5_DLT
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
