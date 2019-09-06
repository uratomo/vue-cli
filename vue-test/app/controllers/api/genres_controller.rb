class Api::GenresController < ApplicationController
  def show
    @genre = Genre.find(params[:id])
    @artists = Artist.where(genre_id: params[:id])
  end
end
