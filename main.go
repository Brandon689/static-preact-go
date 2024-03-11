package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// Serve static HTML
	e.Static("/", "static")

	// API endpoint for dynamic data
	e.GET("/api/data", func(c echo.Context) error {
		// You can fetch dynamic data here from a database or other source
		data := map[string]interface{}{"message": "Hello from Go with Echo!"}
		return c.JSON(http.StatusOK, data)
	})

	e.Start(":8080")
}
