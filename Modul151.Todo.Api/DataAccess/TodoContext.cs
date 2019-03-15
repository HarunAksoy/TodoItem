using Microsoft.EntityFrameworkCore;
using Modul151.Todo.Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Modul151.Todo.Api.DataAccess
{

    public class TodoContext : IdentityDbContext
    {

        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
        {
            
        }

        public DbSet<TodoItem> TodoItems {get; set;}


        public DbSet<ApplicationUser> ApplicationUsers { get; set;}
    }

}