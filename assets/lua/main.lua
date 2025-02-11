local Pong = require("pong")  -- Import pong.lua

function love.load()
    Pong.load()
end

function love.update(dt)
    Pong.update(dt)
end

function love.draw()
    Pong.draw()
end