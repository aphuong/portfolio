Rails.application.routes.draw do

  root 'home#index'
  post 'contact' => 'home#contact'
end
