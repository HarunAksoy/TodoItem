using System;

namespace Modul151.Todo.Api.Models

{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; } //bool starts with is, has or can
        public string Importance { get; set; }
        public DateTime Date { get; set; }
        public string Message { get; set; }
        public string User_Id {get;set;}
    }
}