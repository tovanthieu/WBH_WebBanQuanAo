var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

//Product
app.MapControllerRoute(
	name: "tat-ca-san-pham",
	pattern: "tat-ca-san-pham",
	defaults: new { controller = "Product", action = "Index" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/product", StringComparison.OrdinalIgnoreCase) || context.Request.Path.Equals("/product/index", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/tat-ca-san-pham");
	}
	else
	{
		await next();
	}
});


//Contact
app.MapControllerRoute(
	name: "lien-he",
	pattern: "lien-he",
	defaults: new { controller = "Contact", action = "Index" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/contact/index", StringComparison.OrdinalIgnoreCase) || context.Request.Path.Equals("/contact", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/lien-he");
	}
	else
	{
		await next();
	}
});


//User
app.MapControllerRoute(
	name: "thong-tin-ca-nhan",
	pattern: "thong-tin-ca-nhan",
	defaults: new { controller = "User", action = "Profile" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/user/Profile", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/thong-tin-ca-nhan");
	}
	else
	{
		await next();
	}
});


app.MapControllerRoute(
	name: "dang-nhap",
	pattern: "dang-nhap",
	defaults: new { controller = "User", action = "Login" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/user/login", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/dang-nhap");
	}
	else
	{
		await next();
	}
});


app.MapControllerRoute(
	name: "dang-ky",
	pattern: "dang-ky",
	defaults: new { controller = "User", action = "Register" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/user/register", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/dang-ky");
	}
	else
	{
		await next();
	}
});

app.MapControllerRoute(
	name: "san-pham-yeu-thich",
	pattern: "san-pham-yeu-thich",
	defaults: new { controller = "User", action = "Wishlist" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/user/wishlist", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/san-pham-yeu-thich");
	}
	else
	{
		await next();
	}
});

app.MapControllerRoute(
	name: "don-hang-cua-toi",
	pattern: "don-hang-cua-toi",
	defaults: new { controller = "Order", action = "Index" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/Order", StringComparison.OrdinalIgnoreCase)|| context.Request.Path.Equals("/Order/index", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/don-hang-cua-toi");
	}
	else
	{
		await next();
	}
});

//ShoppingCart
app.MapControllerRoute(
	name: "gio-hang",
	pattern: "gio-hang",
	defaults: new { controller = "ShoppingCart", action = "Index" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/shoppingcart", StringComparison.OrdinalIgnoreCase)||context.Request.Path.Equals("/shoppingcart/index", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/gio-hang");
	}
	else
	{
		await next();
	}
});


app.MapControllerRoute(
	name: "thanh-toan",
	pattern: "thanh-toan",
	defaults: new { controller = "ShoppingCart", action = "Checkout" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/ShoppingCart/Checkout", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/thanh-toan");
	}
	else
	{
		await next();
	}
});


//News + Blog
app.MapControllerRoute(
	name: "danh-sach-tin-tuc",
	pattern: "danh-sach-tin-tuc",
	defaults: new { controller = "News", action = "Index" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/News", StringComparison.OrdinalIgnoreCase) || context.Request.Path.Equals("/News/index", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/danh-sach-tin-tuc");
	}
	else
	{
		await next();
	}
});


app.MapControllerRoute(
	name: "danh-sach-gioi-thieu",
	pattern: "danh-sach-gioi-thieu",
	defaults: new { controller = "Blog", action = "Index" });
app.Use(async (context, next) =>
{
	if (context.Request.Path.Equals("/Blog", StringComparison.OrdinalIgnoreCase) || context.Request.Path.Equals("/Blog/index", StringComparison.OrdinalIgnoreCase))
	{
		context.Response.Redirect("/danh-sach-gioi-thieu");
	}
	else
	{
		await next();
	}
});


app.Run();
