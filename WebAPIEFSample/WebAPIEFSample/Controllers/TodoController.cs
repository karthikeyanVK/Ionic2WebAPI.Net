using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIEFSample.DBContext;
using WebAPIEFSample.Models;

namespace WebAPIEFSample.Controllers
{
    public class TodoController : ApiController
    {
        private SQLDB db = new SQLDB();
        // GET api/values
        public IEnumerable<Todo> Get()
        {
            return db.Todos.AsQueryable();
            
        }          

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]Todo todo)
        {
 
            db.Todos.Add(todo);
            db.SaveChanges();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpPost]
        [Route("api/Todo/deletetask")]
        public void DeleteTask([FromBody]Todo todo)
        {
            var todos = db.Todos.Find(todo.TaskId);
            db.Todos.Remove(todos);
            db.SaveChanges();
        }
    }
}
