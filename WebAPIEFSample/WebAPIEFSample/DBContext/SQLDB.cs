using System.Data.Entity;
using WebAPIEFSample.Models;

namespace WebAPIEFSample.DBContext
{
    public class SQLDB : DbContext
    {
        public SQLDB() : base("defaultconnection")
        {

        }
        public DbSet<Todo> Todos { get; set; }
    }
}