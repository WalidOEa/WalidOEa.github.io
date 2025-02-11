local Pong = {}

WINDOW_WIDTH = 1280
WINDOW_HEIGHT = 720

function Pong.load()
    love.window.setMode(WINDOW_WIDTH, WINDOW_HEIGHT, {
        fullscreen = false,
        resizable = false,
        vsync = true
    })
end

function Pong.update(dt)
end

function Pong.draw()
    love.graphics.printf(
        'Part 1 of Pong!',
        0,
        WINDOW_HEIGHT / 2 - 6,
        WINDOW_WIDTH,
        'center')
end

return Pong