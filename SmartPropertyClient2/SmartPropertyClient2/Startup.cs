using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SmartPropertyClient2.Startup))]
namespace SmartPropertyClient2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
