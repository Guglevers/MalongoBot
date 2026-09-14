package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "malongoBot",
		Width:  360,
		Height: 560,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		// Same color as --background in .dark (index.css), avoids a white flash on load
		BackgroundColour: &options.RGBA{R: 10, G: 10, B: 10, A: 255},
		Windows: &windows.Options{
			Theme: windows.Dark,
		},
		OnStartup: app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
