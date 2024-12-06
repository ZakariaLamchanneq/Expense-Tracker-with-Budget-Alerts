using Microsoft.EntityFrameworkCore;
using ExpenseTracker.Data;

var builder = WebApplication.CreateBuilder(args);

// Ajout des services nécessaires
builder.Services.AddControllers();
builder.Services.AddDbContext<ExpenseTrackerContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 21))
    )
);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Ajout de la politique CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Autoriser les requêtes depuis Angular
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Appliquer la politique CORS avant d'autres middlewares
app.UseCors("AllowAngularApp"); 

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
