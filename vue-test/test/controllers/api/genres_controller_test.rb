require 'test_helper'

class Api::GenresControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_genres_show_url
    assert_response :success
  end

end
