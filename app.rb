
# app.rb
require 'sinatra'

set :bind, '0.0.0.0'

class LabyrinthApp < Sinatra::Base
  get '/' do
    "Hello, world!"
  end

  get '/tilt/1' do
    `echo 0=#{params[:percent].to_i}% > /dev/servoblaster`
    "ok"
  end

  get '/tilt/2' do
    `echo 1=#{params[:percent].to_i}% > /dev/servoblaster`
    "ok"
  end

  get '/tilts' do
    `echo 0=#{params[:x].to_i}% > /dev/servoblaster`
    `echo 1=#{params[:y].to_i}% > /dev/servoblaster`
    "ok"
  end
end
