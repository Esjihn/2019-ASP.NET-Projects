using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI2._0_ProductsAppDLT.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
    }
}