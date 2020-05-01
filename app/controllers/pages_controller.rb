class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :colors ]

  def home
  end

  def colors
  end
end
