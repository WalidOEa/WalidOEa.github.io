WINDOW_HEIGHT = 1280
WINDOW_WIDTH = 720

function love.load()
    love.window.setMode(WINDOW_HEIGHT, WINDOW_WIDTH, 
    {
        fullscreen = false,
        resizable = false,
        vsync = true
    })
end

function love.draw()
    love.graphics.printf(
        'Part 1 of Pong!',
        0,
        WINDOW_HEIGHT / 2 - 6,
        WINDOW_WIDTH,
        'center')
end

