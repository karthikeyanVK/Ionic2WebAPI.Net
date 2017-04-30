using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPIEFSample.Models
{
    public class Todo
    {

        [Key]
        public int TaskId { get; set; }
        public string TaskName { get; set; }
    }
}