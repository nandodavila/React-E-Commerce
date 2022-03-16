using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{

    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions Options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set;}

    }
}