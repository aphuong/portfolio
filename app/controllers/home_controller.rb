class HomeController < ApplicationController

  def index
  end


  def contact
    sending = MandrillEmail.contact_email(params)
    
    puts sending

    flash[:notice] = "Thanks for the message, I'll get back to you soon!"
    redirect_to root_path
  end


end